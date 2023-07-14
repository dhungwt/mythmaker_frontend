import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchIndividualStoryThunk } from "../../redux/story/story_actions";
import { deleteCharacterThunk } from "../../redux/character/character_action";
import AddCharacter from "../AddCharacterModal/AddCharacter";
import EditCharacter from "../EditCharacterModal/EditCharacter";

function CharacterList({storyId}) {
    //dispatch the thunk
    const dispatch = useDispatch();

    //get the single story
    const story = useSelector(state => state.story.singleStory);

    //in the dropdown menu select the character
    const [selectedCharacterId, setSelectedCharacterId] = useState(null);

    //define the selected character
    const selectedCharacter = story.characters.find(character => character._id === selectedCharacterId);

    
    useEffect(()=>{
        dispatch(fetchIndividualStoryThunk(storyId));
    }, [dispatch,storyId]);

    //use to delete the character
    const handleCharacterDelete = (characterId) =>{
        dispatch(deleteCharacterThunk(characterId));
        setSelectedCharacterId(null);
    }

    //when the drop down meun character change the character id will change
    const handleCharacterChange =(event) =>{
        setSelectedCharacterId(event.target.value);
    };

    return (
        <div className="characterList">
            <AddCharacter storyId={storyId} />
            <select onChange={handleCharacterChange}>
                <option>Select a Character</option>
                {story.characters.map((character,index)=>(
                    <option key={index} value={character._id}>
                        {character.name}
                    </option>
                ))}
            </select>

            {selectedCharacter && (
                <>
                <EditCharacter character={selectedCharacter} />
                <button onClick={()=> handleCharacterDelete(selectedCharacter._id)}>Delete</button>
                </>
            )}
        </div>
    );

}

export default CharacterList;