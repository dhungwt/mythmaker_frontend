import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useParams } from "react-router";
import { fetchSingleEventThunk } from "../../../redux/event/event_actions";
import { editEventThunk } from "../../../redux/event/event_actions";
import { editStoryThunk, fetchIndividualStoryThunk } from "../../../redux/story/story_actions";
import { addEventThunk } from "../../../redux/event/event_actions";
import CharacterList from "../../CharacterList/CharacterList";




const EditEvent = () => {
    //get the single event id
    //const [storyid, id] = useParams()
    const { eventStoryId, eventId } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //use the hook to get the single event
    const event = useSelector(state => state.event.singleEvent);

    //use the hook to get the single story
    const story = useSelector(state => state.story.singleStory)

    //this is the name in the event
    const [name, setName] = useState("");

    //this is the text in the event
    const [text, setText] = useState("");

    // this is the options in the event
    const [options, setOptions] = useState([null, null, null]);

    //this is the part use to handle the character change
    const [characterId, setCharacterId] = useState(null);

    //use to track should we created the event for this option
    const [newEventOptions, setNewEventOptions] = useState([]);

    //use to check the user click the save or not
    const [unsavedChanges, setUnsavedChanges] = useState(false);

    // Store the initial 'next' values for each option
    const [initialOptionNextValues, setInitialOptionNextValues] = useState([null, null, null]);

    //all events
    const allEvents = useSelector(state => state.event.events);

    // handle the character change
    const handleCharacterChange = (selectedCharacterId) => {
        setCharacterId(selectedCharacterId)
    };

    //create the new option and to handle each option change
    //index is the option's 1,2,3 
    //07/18 whenwe create the option name not "Default Option Name", it will create event connect to this event
    const handleOptionChange = (index, option) => {
        //define the new option, based on the options
        const newOptions = [...options];
        newOptions[index] = option;
        setOptions(newOptions);
        setUnsavedChanges(true);
        
    };

    const handleSaveOption = (index) => {
        const option = options[index];
        setUnsavedChanges(false);
    
        // If an option already has an event linked to it, consider it as an existing option
        if (option.name !== "Default Option Name" && initialOptionNextValues[index] !== null) {
            // Add logic to update existing option
            const existingOptionIndex = newEventOptions.findIndex(e => e.index === index);
            if (existingOptionIndex > -1) {
                setNewEventOptions(old => {
                    const newOptions = [...old];
                    newOptions[existingOptionIndex] = { index, option };
                    return newOptions;
                });
            } else {
                setNewEventOptions(old => [...old, { index, option }]);
            }
        } else if (option.name !== "Default Option Name") {
            // Else, consider it as a new option
            const existingOptionIndex = newEventOptions.findIndex(e => e.index === index);
            if (existingOptionIndex > -1) {
                setNewEventOptions(old => {
                    const newOptions = [...old];
                    newOptions[existingOptionIndex] = { index, option };
                    return newOptions;
                });
            } else {
                setNewEventOptions(old => [...old, { index, option }]);
            }
        }
    };

    

    // when we click the event it will take us to dispatch edit event thunk
    const handleEditEvent = async (e) => {
        e.preventDefault();
        if (!characterId) {
            alert("Please select a character before saving changes");
            return;
        }
    
        if (unsavedChanges) {
            alert('Please save your changes before editing the event.');
            return;
        }
    
        
    
        for (let i = 0; i < newEventOptions.length; i++) {
            const { index, option } = newEventOptions[i];
    
            //create the default option
            const defaultOption = {
                name: "Default Option Name",
                text: "Default Option Text",
                next: null,
            };
    
            // If the linked event of this option does not exist or has been deleted, create a new one
           if (option.next === null || !(allEvents.some(event => event._id === option.next))) {
                //define new event
                const newEvent = {
                    name: option.name,
                    text: option.text,
                    characterId: characterId,
                    option1: defaultOption,
                    option2: defaultOption,
                    option3: defaultOption,
                    storyId: eventStoryId
                }
    
                const createdEvent = await dispatch(addEventThunk(newEvent));
    
                if (!createdEvent) {
                    console.error('An error occurred when creating the event:', createdEvent);
                } else if (createdEvent.error) {
                    console.error('An error occurred:', createdEvent.error);
                } else {
                    options[index].next = createdEvent._id;
                    console.log("What is the new story looks like after new event:", story);
    
                    if (story && !story.error) {
                        console.log("This is the story I am looking for:", story);
                        story.events.push(createdEvent._id);
                        await dispatch(editStoryThunk(story));
                    }
                }
            } else {
                // Otherwise, update the existing linked event
                await dispatch(editEventThunk(option.next, {
                    name: option.name,
                    text: option.text,
                    characterId: characterId,
                    // option1: options[0],
                    // option2: options[1],
                    // option3: options[2]
                }));
            }
        }
    
        await dispatch(editEventThunk(eventId, {
            name,
            text,
            characterId,
            option1: options[0],
            option2: options[1],
            option3: options[2]
        }));
    
        setNewEventOptions([]);
        navigate(`/createStory/${eventStoryId}`);
    };

    //fetch data and fill the form by the event value
    useEffect(() => {
        const fetcheventData = async () => {
            await dispatch(fetchSingleEventThunk(eventStoryId, eventId))
            await dispatch(fetchIndividualStoryThunk(eventStoryId));
        }
        fetcheventData();
    }, [dispatch, eventId, eventStoryId]);

    //if event exist, set the value
    useEffect(() => {
        if (event) {
            setName(event.name);
            setText(event.text);
            setOptions([event.option1, event.option2, event.option3]);
            setInitialOptionNextValues([event.option1.next, event.option2.next, event.option3.next]);
        }

    }, [event]);

    //if no event exist, give the loading page
    if (!event) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <div className="Edit_Event_Character_List">
                <p>Select your character</p>
                <CharacterList storyId={eventStoryId} onCharacterChange={handleCharacterChange} />
            </div>
            <div className="Edit_Event_Name">
                <p>Event Name</p>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Event Name" />
            </div>
            <div className="Edit_Event_Text">
                <p>Event Text</p>
                <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Event Text" />
            </div>
            <div className="Edit_Event_Option">
                <p>Options:</p>
                {options.map((option, index) => (
                    option ? (
                        <div key={index}>
                            <input type="text" value={option.name} onChange={e => handleOptionChange(index, { ...option, name: e.target.value })} placeholder={`Option ${index + 1} Name`} />
                            <textarea value={option.text} onChange={e => handleOptionChange(index, { ...option, text: e.target.value })} placeholder={`Option ${index + 1} Text`} />
                            <button onClick={() => handleSaveOption(index)}>Save Changes</button>
                        </div>
                    ) : (
                        <button key={index} onClick={() => handleOptionChange(index, { name: '', text: '' })}>Add Option {index + 1}</button>
                    )
                ))}
            </div>
            <div className="Edit_Event_Button">
                <button onClick={handleEditEvent}>Edit Event</button>
            </div>
        </div>
    );
}

export default EditEvent;