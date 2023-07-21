import "./StyleSheets/individualStoryPage.css"

import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchIndividualStoryThunk } from '../redux/story/story_actions';
import { fetchAllEventsByStoryThunk } from '../redux/event/event_actions';
import EventDisplay from '../components/EventDisplay';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import { updateEntireUserThunk } from '../redux/user/user_actions';


function IndividualStoryPage() {
  const dispatch = useDispatch();
  const story = useSelector((state) => state.story.singleStory);
  const event = useSelector((state) => state.event.events);
  const user = useSelector((state) => state.user);

  const [eventObj, setEventObj] = useState({});
  const [displayEvent, setDisplayEvent] = useState([]);
  const [theEnd, setTheEnd] = useState(false);
  //store and fetch the currentevent
  const [currentEvent, setCurrentEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [typing, setTyping] = useState(true);

  //navigate between the pages
  const navigate = useNavigate();

  //get id from the url >>> ( :id )
  const { id } = useParams();

  // fire fetchIndividualStoryThunk when page is open
  useEffect(() => {

    dispatch(fetchIndividualStoryThunk(id));

  }, []);

  //fetch the event relate to this story
  useEffect(() => {
    if (story && story._id === id) {
      dispatch(fetchAllEventsByStoryThunk(id));

      let exist = false;

      if (user && user.storyHistory) {
        for (let i = 0; i < user.storyHistory.length; i++) {
          if (user.storyHistory[i]?._id === id) {
            exist = true;
            break;
          }
        }
        if (!exist && user.storyHistory.length >= 5) {
          let newArr = [id,...user.storyHistory]
          newArr.pop();
          let newHistory = { storyHistory: newArr };
          dispatch(updateEntireUserThunk(user._id, newHistory));
        }else if (!exist){
          let newArr = { storyHistory: [id, ...user.storyHistory] };
          console.log("After NEWARR :",newArr )
          dispatch(updateEntireUserThunk(user._id, newArr));
          console.log(newArr, "im newArr and im working");
        }
      } else {
        let newArr = { storyHistory: [id] };
        dispatch(updateEntireUserThunk(user._id, newArr))
        console.log("user DNE");
      }
    }
  }, [story]);

  useEffect(() => {
    if (event.length > 0) {
      let newObj = {};

      event.forEach((data) => {
        newObj[data._id] = data;
        if (story.currentEvent === data._id) {
          setDisplayEvent([data]);
        }
      });

      setEventObj(newObj);
      setLoading(false);
    }
  }, [event]);

  useEffect(() => {
    if (Object.keys(eventObj).length > 0) {
      loadGame();
    }
  }, [eventObj]);


  //if the page is still loading(loading === true)
  if (loading) {
    return <h1>LOADING...</h1>
  }


  //add next event to the end of displayEvent once player has click on an option
  const addNextEvent = (option) => {
    const newEvent = eventObj[option?.next]
    console.log('End of the story?', newEvent);

  // if option.next is null, trigger the end of the story instead
  if (newEvent) {
      setDisplayEvent([...displayEvent, newEvent]);
      setCurrentEvent(newEvent);
    } else {
      setTheEnd(true);
    }

  }

  //if options exist, wait for player to click one
  const playerChoice = () => {
    const tempEvent = displayEvent[displayEvent.length - 1];
    if (tempEvent && 
      tempEvent.option1.name === "Default Option Name" &&
      tempEvent.option2.name === "Default Option Name" &&
      tempEvent.option3.name === "Default Option Name"
    ) {
    console.log('End of the story');
    
      return <div>
            {
              <button className="eventChoiceButton" onClick={() => addNextEvent(null)}>End</button>
            }
      </div>
  }

    if (tempEvent) {
      // 3 options
      return (
        <Fragment>
          {
            tempEvent?.option1 && tempEvent.option1.name !== "Default Option Name" &&
            <button className="eventChoiceButton" onClick={() => addNextEvent(tempEvent?.option1)}>{tempEvent.option1.name || "End"}</button>
          }
          {
            tempEvent?.option2 && tempEvent.option2.name !== "Default Option Name" &&
            <button className="eventChoiceButton" onClick={() => addNextEvent(tempEvent?.option2)}>{tempEvent.option2?.name || "End"}</button>
          }
          {
            tempEvent?.option3 && tempEvent.option3.name !== "Default Option Name" &&
            <button className="eventChoiceButton" onClick={() => addNextEvent(tempEvent?.option3)}>{tempEvent.option3?.name || "End"}</button>
          }
        </Fragment>
      )
    }
  }

  // end of the story diplay
  const finishScene = () => {
    //if the user reach the end of the story, remove all saved
    localStorage.removeItem(`savedEvent_${id}`);
    localStorage.removeItem(`currentEvent_${id}`);
    return <h2>The END</h2>
  }


  // typing animation when first displaying the event
  const typeEvent = () => {
    // Typing animation library, react-type-animation

    return <div className="eventDialogue">
      <TypeAnimation
        key={displayEvent[displayEvent.length - 1]._id}
        className="eventDialogueText"
        sequence={[
          // Same substring at the start will only be typed out once, initially
          displayEvent[displayEvent.length - 1].text,
          1000
        ]}
        cursor={false}
        wrapper="h2"
        speed={50}
      />
    </div>
  }

  //once the user click the save if will save the current event to the local storage
  const saveGame = () => {
    //const currentEvent = displayEvent[displayEvent.length-1];
    localStorage.setItem(`currentEvent_${id}`, currentEvent._id);
    localStorage.setItem(`savedEvent_${id}`, JSON.stringify(displayEvent.map(event => event._id)));
  }

  const loadGame = () => {
    const savedEventId = localStorage.getItem(`savedEvent_${id}`);
    const currentEventId = localStorage.getItem(`currentEvent_${id}`);
    console.log('SavedEventId:', savedEventId);  // log to debug
    console.log('CurrentEventId:', currentEventId);  // log to debug

    if (savedEventId && currentEventId) {
      try {
        const savedEventIds = JSON.parse(savedEventId);
        setDisplayEvent(savedEventIds.map(id => eventObj[id]));
        setCurrentEvent(eventObj[currentEventId]);
      } catch (error) {
        console.error('Error parsing JSON:', error);
      }
    }
  }


  const handleGoBack = () => {
    navigate('/home');
  }

  //clear the local storage and reload the css
  const clearDataAndReload = () => {
    localStorage.removeItem(`savedEvent_${id}`);
    localStorage.removeItem(`currentEvent_${id}`);
    window.location.reload();
  }

  return (
    <div className="eventOuterContainer">
      <h1>{story.title || "No Story"}</h1>

      <div className="eventContainer">
        <div className="eventDisplayBox">
          <div className="eventChoiceBox">
            {
            // if event has 2 or more available option wait for player to click on an option, else display next event
            theEnd
              ? finishScene()
              : playerChoice()
            }
          </div>
          <div className="eventCharacter">
            {displayEvent[displayEvent.length - 1].characterId.name}
          </div>
          {typeEvent()}
        </div>
        
        <div className="eventLogBox">
          <div className="eventLog">
            {
            displayEvent.length !== 0
              ? (displayEvent.map((event) => {
                //console.log("event id :", event._id)
                if (event !== displayEvent[displayEvent.length - 1] || theEnd) {
                  return <EventDisplay key={event._id} event={event} />
                }
              }))
              : (<h1>NO EVENT</h1>)
            }
          </div>
        </div>
      </div>

      <button onClick={saveGame}>Save Game</button>
      <button onClick={handleGoBack}>Go Back</button>
      <button onClick={clearDataAndReload}>Clear</button>
    </div>
  );
}

export default IndividualStoryPage;
