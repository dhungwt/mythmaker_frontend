import React from "react";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { deleteStoryThunk } from "../redux/story/story_actions";
import { editStoryThunk } from "../redux/story/story_actions";
import CharacterList from "../components/CharacterList/CharacterList";

const CreateStory = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    //get the story id
    const { storyId } = useParams();

    //use for test:07/14
    const updatedStory = {
        _id: storyId,
    }

    //handle the story save change
    const handleSaveChanges = async () => {
        try {
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
            <div>
                <CharacterList storyId={storyId} />

            </div>
            <div>
                <h1>Please Click the Delete button right now. NO SAVE!!!</h1>
                <button onClick={handleSaveChanges}>Save Changes</button>
                <button onClick={handleDeleteStory}>Delete Story</button>
            </div>
        </div>
    );


}

export default CreateStory;