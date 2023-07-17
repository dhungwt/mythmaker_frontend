import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAllStoriesThunk} from '../redux/story/story_actions'
import StoryCard from '../components/StoryCard'
import './pages.css'

// /stories page
function StoriesPage() {
    const dispatch = useDispatch();
    const stories = useSelector((state) => state.allStories.allStory)
    const [isLoading, setIsLoading] = useState(true) //for the loading page

        const fetchAllStories = async () => {
        console.log("Dispatching from fetching all students");
        dispatch(fetchAllStoriesThunk());
    }
      
    useEffect(() =>  { 
        fetchAllStories();
      }, []);

    useEffect(() => {
      // for checking if the information is still loading
      if(stories.length > 0){
        setIsLoading(false);
      }
    }, [stories])

// storycard just need to display the information corrrectly by using onclick, so when u click on it, it'll redirect to the individual page

  return (
    <div className="story-card-container" 
    style={{ display: 'flex', flexWrap: 'wrap' , 
    // backgroundImage: 'url(https://wallpapercave.com/wp/wp2635945.jpg)' ,
    // backgroundSize: 'cover', 
    // backgroundRepeat: 'no-repeat', 
    // minHeight: '100vh',
    backgroundPosition: 'center'  }}
  >
      <h1>StoriesPage</h1>
    
      {isLoading ? (
        <h1>Loading..</h1>
      )
       : 
      stories.length > 0 ? (
        stories.map((storyList) => (
           <StoryCard story={storyList} key={storyList._id}/>
        ))         
        ) 
      : (
        <h1>Nothing to return</h1>
      )}
      
    </div>
  
  )
}

export default StoriesPage;