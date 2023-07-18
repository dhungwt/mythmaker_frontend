import React,{useState,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { fetchSingleEventThunk } from "../../../redux/event/event_actions";
import { editEventThunk } from "../../../redux/event/event_actions";
import CharacterList from "../../CharacterList/CharacterList";


const EditEvent = () => {
    //get the single event id
    const { storyId, id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //use the hook to get the single event
    const event = useSelector(state => state.event.singleEvent);

    //this is the name in the event
    const [name, setName] = useState("");

    //this is the text in the event
    const [text, setText] = useState("");

    // this is the options in the event
    const[options,setOptions] = useState([null,null,null]);

    //this is the part use to handle the character change
    const [characterId, setCharacterId] = useState(null);

    // handle the character change
    const handleCharacterChange = (selectedCharacterId) => {
        setCharacterId(selectedCharacterId)
    };

    //create the new option and to handle each option change
    //index is the option's 1,2,3 
    const handleOptionChange = (index, option)=>{
        //define the new option, based on the options
        const newOptions = [...options];
        newOptions[index] =option;
        setOptions(newOptions);

    };

    // when we click the event it will take us to dispatch edit event thunk
    const handleEditEvent = async () =>{
        await dispatch(editEventThunk(id,{
            ...event,
            name,
            text,
            characterId,
            option1: options[0],
            option2: options[1],
            option3: options[2]
        }));
        navigate(`/createStory/${storyId}`);
    };

    //fetch data and fill the form by the event value
    useEffect(()=>{
        const fetcheventData = async () =>{
            await dispatch(fetchSingleEventThunk(storyId, id))
        }
        fetcheventData();

        //if event exist, set the value
        if(event){
            setName(event.name);
            setText(event.text);
            setOptions([event.option1, event.option2, event.option3]);

        }
    },[dispatch, id, event]);

    return (
        <div>
            <div className="Edit_Event_Character_List">
                <CharacterList storyId={storyId} onCharacterChange={handleCharacterChange} />
            </div>
        </div>
    );
}

export default EditEvent;