import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIndividualStoryThunk } from "../../redux/story/story_actions";
import { deleteCharacterThunk } from "../../redux/character/character_action";
import AddCharacter from "../AddCharacterModal/AddCharacter";
import EditCharacter from "../EditCharacterModal/EditCharacterModal/EditCharacter";
import "../../components/Button/StreamingButton.css";
import "../Button/Dropdown.css";

function CharacterList({ event, characterId, storyId, onCharacterChange, setDeletedCharacterMsg }) {
    //dispatch the thunk
    const dispatch = useDispatch();

    //get the single story
    const story = useSelector(state => state.story.singleStory);

    //in the dropdown menu select the character
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    //define the selected character
    const selectedCharacter = story && story.characters
        ? story.characters.find(character => character._id === selectedCharacterId)
        : null;


    // //define the selected character
    // const selectedCharacter = story.characters.find(character => character._id === selectedCharacterId);

    useEffect(() => {
        if(selectedCharacterId === null && event){
            setSelectedCharacterId(event.characterId._id)
            onCharacterChange(event.characterId._id);
        }
    }, []);

    useEffect(() => {
        dispatch(fetchIndividualStoryThunk(storyId));
    }, [dispatch, storyId, selectedCharacterId]);


    //use to delete the character
    const handleCharacterDelete = (characterId) => {
        let tempCharacter = selectedCharacter.name
        dispatch(deleteCharacterThunk(characterId));
        setSelectedCharacterId(null);
        setDeletedCharacterMsg(`Character '${tempCharacter}' is deleted!`)
        setTimeout(() => {
            setDeletedCharacterMsg("");
          }, 10000);
    }

    //when the drop down meun character change the character id will change
    const handleCharacterChange = (event) => {
        event.preventDefault();
        setSelectedCharacterId(event.target.value);
        onCharacterChange(event.target.value);
    };

    return (
        <div className="characterList" style={{
            justifyContent: "center",
            alignItems: "center",
            
        }}>
            <AddCharacter storyId={storyId} />
            {story && story.characters && (
                <form>
                    <select className="custom-dropdown capitalize" onChange={handleCharacterChange} defaultValue={characterId || null} required>

                        <option className="btn">Checkout a Character</option>
                        {story.characters.map((character, index) => {
                            if(selectedCharacterId === character._id){
                                return <option className="capitalize" key={index} value={selectedCharacterId} selected>
                                {character.name}
                                </option>  
                            }
                            
                            else{
                              return <option className="capitalize" key={index} value={character._id}>
                                {character.name}
                              </option>  
                            }
                            
                        })}
                    </select>

                </form>


            )}


            {selectedCharacter && (
                <div className="selectedCharacter">
                    <EditCharacter character={selectedCharacter} />
                    <button className="btn" onClick={() => handleCharacterDelete(selectedCharacter._id)}>Delete Character</button>
                </div>
            )}
        </div>
    );

}

export default CharacterList;