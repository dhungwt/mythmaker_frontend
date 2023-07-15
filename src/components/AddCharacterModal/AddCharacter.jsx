import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCharacterThunk } from "../../redux/character/character_action";
import { editStoryCharacterIdThunk } from "../../redux/story/story_actions";
import './StyleAddCharacter.css';

const AddCharacter = ({ storyId }) => {
    //determine wheteher the pop-up form appears
    const [isPop, setIsPop] = useState(false);

    //use to set the characters name
    const [characterName, setCharacterName] = useState("");

    //dispatch the thunk
    const dispatch = useDispatch();

    //use to reverse the value of isPop
    const popupModel = () => {
        setIsPop(!isPop);
    }

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
            await dispatch(editStoryCharacterIdThunk(addedCharacter._id, storyId));
            //3. stor the newcharacter object in the local storage of the browser
            localStorage.setItem("character", JSON.stringify(newCharacter));
            popupModel();


        } catch (error) {
            console.error(error);
        }


    };

    return (
        <div className="AddChareacter">
            <button onClick={popupModel}>Add Character</button>
            {/*it will show the form when we click the button */}
            {isPop && (
                <div>
                    {/*once we click the button it will revrse the value of isPop */}
                    <div className="overlay_addCharacter" onClick={popupModel}></div>

                    <div className="modal-character-content">
                        <h2>Add New Character</h2>

                        <form onSubmit={handleSubmit}>
                            <input type="text" value={characterName} onChange={handleNameChange} placeholder="Character Name" required />

                            <button type="button" onClick={popupModel}>Close</button>
                            <button type="submit">Save</button>
                        </form>
                    </div>
                </div>

            )}
        </div>
    );

}

export default AddCharacter;