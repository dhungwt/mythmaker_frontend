import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchIndividualStoryThunk } from '../redux/story/story_actions';
import { fetchAllEventsByStoryThunk } from '../redux/event/event_actions';
import EventDisplay from '../components/EventDisplay';

function IndividualStoryPage() {
    const dispatch = useDispatch();
    const story = useSelector((state) => state.story);
    const event = useSelector((state) => state.event.events);
    const [eventObj, setEventObj] = useState(null);
    const [displayEvent, setDisplayEvent] = useState([]);

    //get id from the url >>> ( :id )
    const {id} = useParams();

    // fire fetchIndividualStoryThunk when page is open
    useEffect(() => {
        const fetchStory = async() => {
          console.log("Dispatch from fetch campus");
          dispatch(fetchIndividualStoryThunk(id));
        };

        //only fetch story if it's not already fetch
        if(story._id !== id)
          fetchStory();
      }, [story]);

    // after story data is receive, fire fetchEventByStoryIdThunk to fill all event with event data
    useEffect(() => {
      if(story._id === id){
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
          if(story.currentEvent === data._id){
            setDisplayEvent([data]);
          }
        });

        setEventObj(newObj);

      }
    }, [event]);

    console.log(eventObj);
  return (
    <div>
      <h1>IndividualStoryPage : {id}</h1>
      {displayEvent.length !== 0 ? (displayEvent.map((event) => {
        return <EventDisplay key={event._id} event={event} />
      }))
      : (<h1>NO EVENT</h1>)
      }
    </div>
  )
}

export default IndividualStoryPage;

//todo: story page that holds all stories eg the browse page