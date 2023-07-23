import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllStoriesThunk } from '../redux/story/story_actions';
import StoryCard from '../components/StoryCard';
import './pages.css';
// import Pagination from '../components/Pagination';
// import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function StoriesPage() {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.allStories.allStory);
  const [isLoading, setIsLoading] = useState(true); //for the loading page
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  //will show the current page for example first page second page etc
  const [postPerPage, setPostPerPage] = useState(8);
  // eight cards should only show on the first page. when i click on the button that says 2, it should lead me to a page that has the next 8 pages
  // this is used to make 8 stories per page^

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

  //Calculate the index of the last story that will be shown on the page
  const lastPostIndex = currentPage * postPerPage; 
  //  currentPage is 2, postPerpage is 10 = 20
  //Calculates the index of the first story that will be shown on the page
  const firstPostIndex = (currentPage - 1) * postPerPage; 
  // Ask for example of this
  //20 - 10 = 10

  //Slicing the stories array so that we get the current set of story cards to be displayed
  // const currentPosts = stories.slice(firstPostIndex, lastPostIndex);
  const currentPosts = filterStories.slice(firstPostIndex, lastPostIndex);

  //Function that handles pagination when the user clicks on a different page number
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log("pageNumber console log ", pageNumber);
  };
  

  return (
    <div className="story-card-container" 
    style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
    // backgroundImage: 'url(https://wallpapercave.com/wp/wp2635945.jpg)' ,
      backgroundPosition: 'center' 
      }}>

      <h1>StoriesPage</h1>

          <button>
              <Pagination 
              //The total number of pages is calculated based on the total number of stories and the 'postPerPage'
                count = {Math.ceil(stories.length / postPerPage)}
                //place currentPage number to be stored in currentPage and passed into the pagination component
                page = {currentPage}
                onChange={(event, value) => paginate(value)}
              />
          </button>

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
      ) 
      : 
      (
      //   filterStories.length > 0 ? (
      //     filterStories.map((storyList) => (
      //       <StoryCard story={storyList} key={storyList._id} />
      //     ))
        // ) 
        // : 
        // (
          // checking if there are any stories
          // currentPosts.length > 0 ? (
            currentPosts.map((storyList) => (
              <StoryCard story={storyList} key={storyList._id} />
            )
            // )
          // ) : (
            // if there are no stories then return this

            // <h1>Nothing to return</h1>
          )
        // )
      )
    }
         {/* Add the Pagination component */}
        
    </div>
  );
}

export default StoriesPage;
