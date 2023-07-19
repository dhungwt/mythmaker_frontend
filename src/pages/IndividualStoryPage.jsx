import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchIndividualStoryThunk } from '../redux/story/story_actions';
import { fetchAllEventsByStoryThunk } from '../redux/event/event_actions';
import { updateEntireUserThunk } from '../redux/user/user_actions'
import EventDisplay from '../components/EventDisplay';
import { TypeAnimation } from 'react-type-animation';

function IndividualStoryPage() {
    const dispatch = useDispatch();
    const story = useSelector((state) => state.story.singleStory);
    const event = useSelector((state) => state.event.events);
    const [eventObj, setEventObj] = useState(null);
    const [displayEvent, setDisplayEvent] = useState([]);
    const [theEnd, setTheEnd] = useState(false);
    const [ loading, setLoading ] = useState(true);

    //get id from the url >>> ( :id )
    const {id} = useParams();


    //when a user logs in and they visit a game they havent played before, 
    //check if the user exists, and if they do, the story id is saved in the users
    //play history. Meaning if the user is logged in. If the user doesnt exist, they are 
    //not logged in and it wont be added to their play history.
    const user = useSelector((state) => state.user);


    // fire fetchIndividualStoryThunk when page is open
    useEffect(() => {
      const fetchStory = async() => {
        console.log("Dispatch from fetch campus");
        dispatch(fetchIndividualStoryThunk(id));
      };

      //only fetch story if it's not already fetch
      if(!story || story?._id !== id)
        fetchStory();
    }, []);

    // after story data is receive, fire fetchEventByStoryIdThunk to fill all event with event data
    useEffect(() => {
      if(story && story?._id === id){
        console.log("FETCHING_EVENT_THUNK")
        dispatch(fetchAllEventsByStoryThunk(id))

        if(user){
          let newArr = {"storyHistory": [id, ...user.storyHistory]}
          dispatch(updateEntireUserThunk(user._id, newArr))
          console.log(newArr, "im newArr and im working")
        } else {
          console.log("user DNE")
        }
      }
    }, [story])

    // convert event array to object with their id as key, fill eventObj
    useEffect(() => {
      console.log("UseEffect event : ", event);
      if((eventObj === null || eventObj[0] === null) && event.length > 0 ){
        //console.log("eventObj : ", eventObj);
        let newObj = {}; 
        
        //convert event array into object
        event.forEach((data) => {
          newObj[data._id] = data;
          if(story.currentEvent === data._id){
            //console.log("SET DISPLAY EVENT \n", data)
            setDisplayEvent([data]);
          }
        });

        setEventObj(newObj);
        //console.log("After EventObj : ", eventObj)
      }

      // return () => { 
      //   setEventObj(null); 
      //   setDisplayEvent([]);
      // }

    }, [event]);

    useEffect(() => {
      setLoading(false);
    }, [eventObj])

    //console.log("eventObj outside useEffect ", eventObj);

    if(loading){
      return <h1>LOADING...</h1>
    }

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
      const tempEvent = displayEvent[displayEvent.length-1];

      if(tempEvent){
        // 3 options
        return (
          <div>
          {
            tempEvent.option1 && 
            <button onClick={() => addNextEvent(tempEvent.option1)}>{tempEvent.option1.text || "..."}</button>
          }
          {
            tempEvent.option2 &&
            <button onClick={() => addNextEvent(tempEvent?.option2)}>{tempEvent.option2?.text || "..."}</button>
          }
          {
            tempEvent.option3 &&
            <button onClick={() => addNextEvent(tempEvent?.option3)}>{tempEvent.option3?.text || "..."}</button>
          }
          </div>
        )
      }  
      // } else if(tempEvent?.option2) {
      //   // 2 options
      //   return (
      //     <div>
      //       <button onClick={() => addNextEvent(tempEvent.option1)}>{tempEvent.option1.text || "..."}</button>
      //       <button onClick={() => addNextEvent(tempEvent?.option2)}>{tempEvent?.option2.text || "..."}</button>
      //     </div>
      //   )
          
      // } else {
      //   // 1 options
      //   return (
      //     <div>
      //       <button onClick={() => addNextEvent(tempEvent.option1)}>{tempEvent.option1.text || "..."}</button>
      //     </div>
      //   )
      // }
    }
  
  // end of the story diplay
  const finishScene = () => {
    return <h2>The END</h2>
  }

  // typing animation when first displaying the event 
  const typeEvent = () => {
    // Typing animation library, react-type-animation
    return <TypeAnimation
      key={displayEvent[displayEvent.length-1]._id}
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


  return (
    <div>
      <h1>IndividualStoryPage : {id}</h1>
      {
        displayEvent.length !== 0
        ? (displayEvent.map((event) => {
            //console.log("event id :", event._id)
            if(event != displayEvent[displayEvent.length-1] || theEnd){
              return <EventDisplay key={event._id} event={event} />
            }
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