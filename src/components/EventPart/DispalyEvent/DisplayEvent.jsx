import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteEventThunk } from "../../../redux/event/event_actions";


const DisplayEvent = ({event}) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const eventId = event._id;

    //get the events state in the the redux store
    //const {events} = useSelector(state => state.event);

    //use to handle the delete event
    const handleDeleteEvent = () =>{
         dispatch(deleteEventThunk(eventId));
         //window.location.reload();
    }

    // // once the events data change rerender the page
    // useEffect(()=> {
    //     if(!events.find(e => e._id === event._id)){
    //         navigate(`/createStory/${event.storyId}`);
    //     }
    // }, [event._id]);

    //use to handle the edit button
    // once we click this button, it will navigate to the edit event page
    const editEvent = () =>{
        navigate(`/editEvent/${event.storyId}/${event._id}`);
    }

    return (
        <div className="single_event_field">
            {event.characterId && <h3>{event.characterId.name}</h3>}
            <p>{event.text}</p>
            {event.option1 && event.option1.name && <div>{event.option1.name}</div>}
            {event.option2 && event.option2.name && <div>{event.option2.name}</div>}
            {event.option3 && event.option3.name && <div>{event.option3.name}</div>}
            <button onClick={handleDeleteEvent}>Delete</button>
            <button onClick={editEvent}>Edit</button>
        </div>
    );
}

export default DisplayEvent;
