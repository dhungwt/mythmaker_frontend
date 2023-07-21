import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStoriesThunk } from '../redux/story/story_actions';
import StoryCard from '../components/StoryCard';
import './pages.css';

// /stories page
function StoriesPage() {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.allStories.allStory);
  const [isLoading, setIsLoading] = useState(true); //for the loading page
  const [search, setSearch] = useState('');

  const fetchAllStories = async () => {
    console.log("Dispatching from fetching all students");
    dispatch(fetchAllStoriesThunk());
  };

  useEffect(() => {
    fetchAllStories();
  }, []);

  useEffect(() => {
    // for checking if the information is still loading
    if (stories.length > 0) {
      setIsLoading(false);
    }
  }, [stories]);

  // Filter students based on their search terms:
  const filterStories = stories.filter((story) => {
    // allows the user to search in uppercase, lowercase, or whatever and the user input will still be lowercased
    // story.title.toLowerCase().includes(search.toLowerCase()) other way of doing it but takes O(N^2) time
    return story.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    // indexOf returns the index of the first occurrence of the search term in the story title, and -1 if nothing is found
  });

  // storycard just needs to display the information correctly by using onclick, so when you click on it, it'll redirect to the individual page

  return (
    <div className="story-card-container" 
    style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
    // backgroundImage: 'url(https://wallpapercave.com/wp/wp2635945.jpg)' ,
    // backgroundSize: 'cover', 
    // backgroundRepeat: 'no-repeat', 
    // minHeight: '100vh',
      backgroundPosition: 'center' 
      }}>

      <h1>StoriesPage</h1>

      {/* for search... */}
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title..."
        style={{height:"32px", margin:"20px"}}
      />

      {isLoading ? (
        <h1>Loading..</h1>
      ) : (
        filterStories.length > 0 ? (
          filterStories.map((storyList) => (
            <StoryCard story={storyList} key={storyList._id} />
          ))
        ) : (
          // checking if there are any stories
          stories.length > 0 ? (
            stories.map((storyList) => (
              <StoryCard story={storyList} key={storyList._id} />
            ))
          ) : (
            // if there are no stories then return this
            
            <h1>Nothing to return</h1>
          )
        )
      )}
    </div>
  );
}

export default StoriesPage;
