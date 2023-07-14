import React, {useEffect} from "react";
import { useDispatch } from "react-redux";
import '../App.css'
import { fetchAllStories } from "../redux/story/story_actions";
import { useSelector } from "react-redux";
import { fetchUserStoriesThunk} from "../redux/user/user_actions";

//This the user's homepage
//07/11 created: just simple page created




const fakeUser = { 
    "_id": {
      "$oid": "64b18c5527eb54ea32cd96ca"
    },
    "username": "K5Hammer",
    "email": "rj77@gmail.com",
    "password": "password",
    "storyIds": [
      {
        "$oid": "64b18e5d27eb54ea32cd96d4"
      },
      {
        "$oid": "64b193b745b3dfdc2cd08265"
      }
    ],
    "__v": 0
  }

const UserHomepage = () =>{
    
    const dispatch = useDispatch();
    //useSelctor for the logged in user
    const user = useSelector((state) => state.user);
    const fetchUserStories = (userID) => {
        console.log("RUNNING DISPATCH FROM fetchUserStories");
        return dispatch(fetchUserStoriesThunk(userID));
      };


    //get the email address from the store state
    //comment below back in when auth is set up
   // const user = useSelector((state)=>state.user);

    useEffect(() => {
        console.log("FETCH USER Stories FIRING IN USEEFFECT");
        fetchUserStories(fakeUser._id.$oid);
      }, []);

    return (
        <div className="background">
            <p>
                {user
                ?JSON.stringify(user)
                :"No User"}
            </p>
         {/* <h3>Welcome, {email}</h3> */}
        </div>
    );



};


export default UserHomepage;