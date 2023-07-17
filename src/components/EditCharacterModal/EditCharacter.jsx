import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editCharacterThunk } from "../../redux/character/character_action";
import "./StyleEditCharacter.css";

//This component use to edit the character,pass by the 
function EditCharacter({ character }) {
    //determine wheteher the pop-up form appears
    const [isPop, setIsPop] = useState(false);
    //determine and set the character name
    const [characterName, setCharacterName] = useState(character.name);

    //dispatch the thunk
    const dispatch = useDispatch();

    //use to for when i click edit
    const handleEdit = () => {
        setIsPop(true);
    };

    //use to cancel the edit form
    const handleCancel = () => {
        setIsPop(false);
        // set name back to the original character name on cancel
        setCharacterName(character.name);
    };

    //handle the name change part
    const handleNameChange = (event) => {
        setCharacterName(event.target.value);
        //localStorage store the name in the local browser
        localStorage.setItem('editedCharacterName', event.target.value);

    };

    //handle the event when we click the submit button
    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedCharacter = { ...character, name:characterName, };

        dispatch(editCharacterThunk(updatedCharacter));

        // reset local storage after successful update
        localStorage.removeItem('editedCharacterName');
        setIsPop(false);

    };

    return (
        <div className="EditCharacter">
            <h2>{character.name}</h2>
            <button onClick={handleEdit}>Edit</button>
            {isPop && (
                <div className="edit-character-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="character-name" name="name"
                            value={characterName} onChange={handleNameChange} required />
                        <button type="submit">Submit</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>


                    </form>
                </div>

            )}
        </div>
    );


}

export default EditCharacter;