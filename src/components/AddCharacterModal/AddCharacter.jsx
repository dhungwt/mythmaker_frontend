import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCharacterThunk } from "../../redux/character/character_action";
import { editStoryCharacterIdThunk } from "../../redux/story/story_actions";
import { fetchIndividualStoryThunk } from "../../redux/story/story_actions";
import './StyleAddCharacter.css';
import "../../components/Button/StreamingButton.css";

const AddCharacter = ({ storyId }) => {
    //determine wheteher the pop-up form appears
    const [isPop, setIsPop] = useState(false);

    //use to set the characters name
    const [characterName, setCharacterName] = useState("");

    //dispatch the thunk
    const dispatch = useDispatch();

    //use to reverse the value of isPop
    const handleAdd = () => {
        setIsPop(true);
    }

    const handleCancel = () => {
        setIsPop(false);
        setCharacterName("");
    };


    //use to handle to the character name change
    const handleNameChange = (event) => {
        setCharacterName(event.target.value);
    }

    //use to submit the form when we click the submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        //create the new character
        const newCharacter = {
            name: characterName,
        };

        try {
            //1. add the character to character list
            const addedCharacter = await dispatch(addCharacterThunk(newCharacter));
            //2. after create character, we need to add id to the story
            await dispatch(editStoryCharacterIdThunk(storyId,addedCharacter._id));
            //3. stor the newcharacter object in the local storage of the browser
            // localStorage.setItem("character", JSON.stringify(newCharacter));

            await dispatch(fetchIndividualStoryThunk(storyId));
            setIsPop(false);
            setCharacterName("")


        } catch (error) {
            console.error(error);
        }


    };

    // const handleFormClick = (event) => {
    //     event.stopPropagation();
    // }


    return (
        <div className="AddCharacter">
            <button className="btn" onClick={handleAdd}>Add Character</button>
            {isPop && (
                <div className="add-character-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="character-name" name="name"
                            value={characterName} onChange={handleNameChange} required />
                        <button className="btn" type="submit">Submit</button>
                        <button className="btn" type="button" onClick={handleCancel}>Cancel</button>
                    </form>
                </div>
            )}
        </div>
    );

}

export default AddCharacter;