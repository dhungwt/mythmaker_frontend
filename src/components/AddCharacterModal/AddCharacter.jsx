import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addCharacterThunk } from "../../redux/character/character_action";


const AddCharacter = ({storyId}) =>{
    //determine wheteher the pop-up form appears
    const [isPop, setIsPop] = useState(false);

    //use to set the characters name
    const [characterName, setCharacterName] = useState("");

    //dispatch the thunk
    const dispatch = useDispatch();

    //use to reverse the value of isPop
    const popupModel = () =>{
        setIsPop(!isPop);
    }

    //use to handle to the character name change
    const handleNameChange = (event) =>{
        setCharacterName(event.target.value);
    }

    //use to submit the form when we click the submit
    const handleSubmit = async (event) =>{
        event.preventDefault();

        //create the new character
        const newCharacter = {
            name: characterName,
        };

        try {
            //1. add the character to character list
            const addedCharacter = await dispatch(addCharacterThunk(newCharacter));
            

        } catch (error) {
            console.error(error);
        }


    }

}