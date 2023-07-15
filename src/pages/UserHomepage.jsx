import React from "react";
// import  {useEffect} from "react";
import { useDispatch } from "react-redux";
import '../App.css'
// import { fetchAllStories } from "../redux/story/story_actions";
import { useSelector } from "react-redux";
// import { fetchUserStoriesThunk} from "../redux/user/user_actions";
import { useNavigate } from "react-router-dom";
import { addCharacterThunk } from "../redux/character/character_action";
import { addStoryThunk } from "../redux/story/story_actions";


//This the user's homepage
//07/11 created: just simple page created




// const fakeUser = { 
//     "_id": {
//       "$oid": "64b18c5527eb54ea32cd96ca"
//     },
//     "username": "K5Hammer",
//     "email": "rj77@gmail.com",
//     "password": "password",
//     "storyIds": [
//       {
//         "$oid": "64b18e5d27eb54ea32cd96d4"
//       },
//       {
//         "$oid": "64b193b745b3dfdc2cd08265"
//       }
//     ],
//     "__v": 0
//   }

const UserHomepage = () =>{
    
    const dispatch = useDispatch();
    //useSelctor for the logged in user
    const user = useSelector((state) => state.user);
    // const fetchUserStories = (userID) => {
    //     console.log("RUNNING DISPATCH FROM fetchUserStories");
    //     return dispatch(fetchUserStoriesThunk(userID));
    //   };


    const navigate = useNavigate();
    //get the userid
    const userID = user._id;

    //set the default character
    const defaultCharacter = {
        name:"narrator",
    }

    //set the defaultStory
    const defaultStory = {
        title:"Untitled",
        events:[],
        characters:[],
        //currentEvent: "Default Current Event",
        creatorId:userID,
    }
    

    console.log("what is the user id:",userID);

    //handle the default story we create
    const handleCreateStory = async () =>{
        //create the new character
        const newCharacter = await dispatch(addCharacterThunk(defaultCharacter));

        //put the new character into the default story
        defaultStory.characters.push(newCharacter._id);
        

        console.log("what is the character id:",newCharacter._id);
        console.log("I am ready to add story");
        //create the new story
        const newStory = await dispatch(addStoryThunk(defaultStory));

        console.log("I am done");
        //once we create the newstory, we will jump to the page to create the story
        navigate(`/createStory/${newStory._id}`);
    }
    //get the email address from the store state
    //comment below back in when auth is set up
   // const user = useSelector((state)=>state.user);

    // useEffect(() => {
    //     console.log("FETCH USER Stories FIRING IN USEEFFECT");
    //     fetchUserStories(fakeUser._id.$oid);
    //   }, []);

    return (
        <div className="background">
            <p>
                {user
                ?JSON.stringify(user)
                :"No User"}
            </p>
            <button onClick={handleCreateStory}>Create Story</button>
         {/* <h3>Welcome, {email}</h3> */}
        </div>
    );



};


export default UserHomepage;