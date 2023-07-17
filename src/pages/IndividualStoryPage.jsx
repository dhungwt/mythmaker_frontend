import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchIndividualStoryThunk } from '../redux/story/story_actions';
import { fetchAllEventsByStoryThunk } from '../redux/event/event_actions';

import ErrorPage from '../pages/ErrorPage'
import EventDisplay from '../components/EventDisplay';
import { TypeAnimation } from 'react-type-animation';

function IndividualStoryPage() {
    const dispatch = useDispatch();
    const story = useSelector((state) => state.story.singleStory);
    const event = useSelector((state) => state.event.events);
    const [eventObj, setEventObj] = useState(null);
    const [displayEvent, setDisplayEvent] = useState([]);
    const [theEnd, setTheEnd] = useState(false);

    //get id from the url >>> ( :id )
    const {id} = useParams();

    // fire fetchIndividualStoryThunk when page is open
    useEffect(() => {
        const fetchStory = async() => {
          console.log("Dispatch from fetch campus");
          dispatch(fetchIndividualStoryThunk(id));
        };

        //only fetch story if it's not already fetch
        if(!story || story._id !== id)
          fetchStory();
      }, [story]);

    // after story data is receive, fire fetchEventByStoryIdThunk to fill all event with event data
    useEffect(() => {
      if(!story || story._id === id){
        dispatch(fetchAllEventsByStoryThunk(id))
      }
    }, [story])

    // convert event array to object with their id as key, fill eventObj
    useEffect(() => {
      if(!eventObj && event.length !== 0 ){
        let newObj = {}; 
        
        //convert event array into object
        event.map((data) => {
          newObj[data._id] = data;
          if(story && story.currentEvent === data._id){
            setDisplayEvent([data]);
          }
        });

        setEventObj(newObj);

      }
    }, [event]);

    //console.log(eventObj);

    //add next event to the end of displayEvent once player has click on an option
    const addNextEvent = (option) => {
      const newEvent = eventObj[option.next]

      // if option.next is null, trigger the end of the story instead
      if(newEvent)
        setDisplayEvent([...displayEvent, newEvent]);
      else
        setTheEnd(true);
    }

    //if options exist, wait for player to click one
    const playerChoice = () => {
      const event = displayEvent[displayEvent.length-1];

      if(event.option3 !== undefined){
        // 3 options
        return (
          <div>
            <button onClick={() => addNextEvent(event.option1)}>{event.option1.text || "..."}</button>
            <button onClick={() => addNextEvent(event.option2)}>{event.option2.text || "..."}</button>
            <button onClick={() => addNextEvent(event.option3)}>{event.option3.text || "..."}</button>
          </div>
        )
          
      } else if(event.option2) {
        // 2 options
        return (
          <div>
            <button onClick={() => addNextEvent(event.option1)}>{event.option1.text || "..."}</button>
            <button onClick={() => addNextEvent(event.option2)}>{event.option2.text || "..."}</button>
          </div>
        )
          
      } else {
        // 1 options
        return (
          <div>
            <button onClick={() => addNextEvent(event.option1)}>{event.option1.text || "..."}</button>
          </div>
        )
      }
    }
  
  // end of the story diplay
  const finishScene = () => {
    return <h2>The END</h2>
  }

  // typing animation when first displaying the event 
  const typeEvent = () => {
    // Typing animation library, react-type-animation
    return <TypeAnimation
      sequence={[
          // Same substring at the start will only be typed out once, initially
          displayEvent[displayEvent.length-1].text,
          1000
        ]}
      cursor={false}
      wrapper="h2"
      speed={50}
    />
  }

  // if no eventObj found, return an error page
  if(!eventObj){
    return <ErrorPage />
  }

  return (
    <div>
      <h1>IndividualStoryPage : {id}</h1>
      {
        displayEvent.length !== 0 
        ? (displayEvent.map((event) => {
            if(event && event != displayEvent[displayEvent.length-1])
              return <EventDisplay key={event._id} event={event} />
            else
              return typeEvent()
          }))
        : (<h1>NO EVENT</h1>)
      }
      {
        // if event has 2 or more available option wait for player to click on an option, else display next event
        theEnd
        ? finishScene()
        : playerChoice()
      }
    </div>
  )
}

export default IndividualStoryPage;