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
import ErrorPage from "./ErrorPage";
import Notification from "../components/Notification";


function IndividualStoryPage() {
  const dispatch = useDispatch();
  const story = useSelector((state) => state.story.singleStory);
  const event = useSelector((state) => state.event.events);
  const user = useSelector((state) => state.user);
  
  //const logRef = useRef(null);

  const [eventObj, setEventObj] = useState({});
  const [displayEvent, setDisplayEvent] = useState([]);
  const [theEnd, setTheEnd] = useState(false);
  //store and fetch the currentevent
  const [currentEvent, setCurrentEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [typing, setTyping] = useState(true);
  const [speedUp, setSpeedUp] = useState(false); //show choice and full dialogue early

  //button notifications
  const [saveMsg, setSaveMsg] = useState("");
  const [clearGameAlert, setClearGameAlert] = useState(false);

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
        if (!exist && user.storyHistory.length >= 6) {
          let newArr = [id,...user.storyHistory]
          newArr.pop();
          let newHistory = { storyHistory: newArr };
          dispatch(updateEntireUserThunk(user._id, newHistory));
        }else if (!exist){
          let newArr = { storyHistory: [id, ...user.storyHistory] };
          //console.log("After NEWARR :",newArr )
          dispatch(updateEntireUserThunk(user._id, newArr));
          //console.log(newArr, "im newArr and im working");
        }
      } else {
        let newArr = { storyHistory: [id] };
        dispatch(updateEntireUserThunk(user._id, newArr))
        //console.log("user DNE");
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

  // //scroll to the end(where ref is at)
  // const scrollToEnd = (ref) => {
  //   ref.current?.scrollIntoView({ behavior: "smooth", block: 'end'})
  // }

  // // scroll log to end everytime it's updated
  // useEffect(() => {
  //   scrollToEnd(logRef);
  // }, [displayEvent]);


  //if the page is still loading(loading === true)
  if (loading) {
    return <ErrorPage msg="Loading..." />
  }


  //add next event to the end of displayEvent once player has click on an option
  const addNextEvent = (option) => {
    setTyping(true);
    const newEvent = eventObj[option?.next]
    //console.log('End of the story?', newEvent);

    setSpeedUp(false);

    // if option.next is null, trigger the end of the story instead
    if (newEvent) {
      setDisplayEvent([newEvent, ...displayEvent]);
      setCurrentEvent(newEvent);
    } else {
      setTheEnd(true);
    }

  }

  //if options exist, wait for player to click one
  const playerChoice = () => {
    const tempEvent = displayEvent[0];
    if (!typing && tempEvent && 
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

    if (tempEvent && !typing) {
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
      
    return <h2 className="theEnd">The END</h2>
  }

  const handleSpeedUp = () => {
    setSpeedUp(true);
    setTyping(false);
  }


  // typing animation when first displaying the event
  const typeEvent = () => {
    // Typing animation library, react-type-animation

    if(theEnd){
      return <div className="eventDialogue">
      <div className="eventDialogueTop"></div>
        <div className="eventDialogueText"></div>
    </div>
    }

    if(speedUp){
      return <div className="eventDialogue">
      <div className="eventDialogueTop"></div>
        <div
          key={displayEvent[0]?._id}
          className="eventDialogueText"
        >
          {displayEvent[0]?.text}
        </div>
    </div>
    }

    return <div className="eventDialogue" onClick={handleSpeedUp}>
      <div className="eventDialogueTop"></div>
      <TypeAnimation
        key={displayEvent[0]._id}
        className="eventDialogueText"
        sequence={[
          "",
          500,
          // Same substring at the start will only be typed out once, initially
          displayEvent[0].text,
          () => {setTyping(false)},
        ]}
        cursor={false}
        wrapper="div"
        speed={60}
      />
    </div>
  }

  //once the user click the save if will save the current event to the local storage
  const saveGame = () => {
    //const currentEvent = displayEvent[displayEvent.length-1];
    localStorage.setItem(`currentEvent_${id}`, currentEvent?._id);
    localStorage.setItem(`savedEvent_${id}`, JSON.stringify(displayEvent.map(event => event._id)));
    setSaveMsg("Your Game Is Save!")
        setTimeout(() => {
            setSaveMsg("");
        }, 6000);
  }

  //load game from where the user last save the game
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


  //back button, redirect to homepage
  const handleGoBack = () => {
    navigate('/home');
  }

  //cancel clear game, make the alert disappear
  const handleCancelClear = () => {
    setClearGameAlert(false);
  }

  //show a pop up for the user to confirm their decision of clearing the game
  const handleClearBtn = () => {
    setClearGameAlert(true);
  }

  //clear the local storage and reload the css
  const clearDataAndReload = () => {
    localStorage.removeItem(`savedEvent_${id}`);
    localStorage.removeItem(`currentEvent_${id}`);
    window.location.reload();
  }



  return (
    <div className="eventOuterContainer">
      <div className="eventContainer">
        <div className="eventDisplayBox">
        <h1 className="eventTitle">{story.title || "No Story"}</h1>
          <div className="eventChoiceBox">
            {
            // if event has 2 or more available option wait for player to click on an option, else display next event
            theEnd
              ? finishScene()
              : playerChoice()
            }
          </div>
          <div className="eventCharacter capitalizeName">
            {theEnd ? <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span> :displayEvent[0]?.characterId.name}
          </div>
          {typeEvent()}
          <div className="userNote">*Click Dialogue Box To Fast Forward {'>>'} </div>
        </div>
        
        <div className="eventLogBox">
          <div className="eventLogTitle">HISTORY LOG</div>
          <div className="eventLog">
            {clearGameAlert && <div className="storyNotif clear">
              <div>This will clear your save data and restart your game. Are you sure?</div>
              <button className="eventButt" onClick={clearDataAndReload}>Yes</button>
              <button className="eventButt" onClick={handleCancelClear}>Cancel</button>
            </div>}
            {saveMsg !== "" && <div className="storyNotif"><Notification msg={saveMsg} /></div>}
            <div className="eventLogTop"></div>
            {
            displayEvent.length !== 0
              ? (displayEvent.map((event) => {
                //console.log("event id :", event._id)
                if (event !== displayEvent[0] || theEnd) {
                  return <EventDisplay key={event._id} event={event} />
                }
              }))
              : (<h1>NO EVENT</h1>)
            }
          </div>
          <div className="eventButtons">
            <div>
              <button className="eventButt" onClick={saveGame}>Save Game</button>
              <button className="eventButt" onClick={handleClearBtn}>Clear Game</button>
            </div>
            <div>
              <button className="eventButt" onClick={handleGoBack}>Back</button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndividualStoryPage;