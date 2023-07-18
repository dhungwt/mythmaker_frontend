import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteStoryThunk } from "../redux/story/story_actions";
import { editStoryThunk } from "../redux/story/story_actions";
import { fetchIndividualStoryThunk } from "../redux/story/story_actions";
import { fetchAllEventsByStoryThunk } from "../redux/event/event_actions";
import CharacterList from "../components/CharacterList/CharacterList";
import DisplayEvent from "../components/EventPart/DispalyEvent/DisplayEvent";

const CreateStory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //get the story id
    const { storyId } = useParams();

    //get the all events
    const events = useSelector((state) => state.event.events);

    //fetch the current story
    useEffect(() => {
        dispatch(fetchIndividualStoryThunk(storyId))
        dispatch(fetchAllEventsByStoryThunk(storyId))
    }, [dispatch, storyId]);

    //get the current story
    const story = useSelector(state => state.story.singleStory);

    //set the story title
    const [storyTitle, setStoryTitle] = useState(story ? story.title : "Untitled");

    //handle the story title change in the input title form
    const handleStoryTitleChange = (event) => {
        setStoryTitle(event.target.value);
    };

    //handle the story save change
    const handleSaveChanges = async () => {
        try {
            //updated on 07/17
            const updatedStory = {
                _id: storyId,
                title: storyTitle //send the new title here
            }
            await dispatch(editStoryThunk(updatedStory));
            console.log("Changes saved successfully");
        } catch (error) {
            console.log("Error saving changes:", error);
        }
    }

    //please must delete the story when you test here
    const handleDeleteStory = async () => {

        try {
            await dispatch(deleteStoryThunk(storyId));
            console.log("Story deleted successfully");
            navigate('/home'); // Navigate back to user home page after deletion
        } catch (error) {
            console.log("Error deleting story:", error);
        }

    }

    return (
        <div>
            <div className="Create_Story_Title">
                <input type="text" value={storyTitle} onChange={handleStoryTitleChange} />
            </div>

            <div className="Add_Character_Field">
                <CharacterList storyId={storyId} onCharacterChange={()=>{}} />
            </div>

            <div className="Display_Event_Field">
                <h1>Display the Current Story Events</h1>
                {events.map((event, index) => (
                    <DisplayEvent key={index} event={event} />
                ))}

            </div>
            
            <div className="Save_Delete_CreateStory_Buttton">
                <h1>Please Click the Delete button right now. NO SAVE!!!</h1>
                <button onClick={handleSaveChanges}>Save Changes</button>
                <button onClick={handleDeleteStory}>Delete Story</button>
            </div>
        </div>
    );


}

export default CreateStory;