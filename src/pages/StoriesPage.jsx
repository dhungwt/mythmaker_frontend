import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StoryCard from '../components/StoryCard';
import { fetchAllStoriesThunk } from '../redux/story/story_actions';
import './pages.css';

// import Pagination from '../components/Pagination';
// import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import ParticleBackground from '../components/Particles/ParticleBackground';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Stack from '@mui/material/Stack';


function StoriesPage() {
  const dispatch = useDispatch();
  const stories = useSelector((state) => state.allStories.allStory);
  const [isLoading, setIsLoading] = useState(true); //for the loading page
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  //will show the current page for example first page second page etc
  const postPerPage = 4;
  // eight cards should only show on the first page. when i click on the button that says 2, it should lead me to a page that has the next 5 pages

  const fetchAllStories = async () => {
    console.log("Dispatching from fetching all students");
    dispatch(fetchAllStoriesThunk());
  };

  useEffect(() => {
    fetchAllStories();
  }, []);

  useEffect(() => {
    // checking if the information is still loading
    if (stories.length > 0) {
      setIsLoading(false);
    }
  }, [stories]);


  //Function that handles pagination when the user clicks on a different page number
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log("pagination page number: ", pageNumber);
  };

  const handleSearch = (event) => {
    setCurrentPage(1);
    setSearch(event.target.value);
  };


  //Calculate the index of the last story that will be shown on the page
  const lastPostIndex = currentPage * postPerPage;  //0*5 = 0th index
  const firstPostIndex = (currentPage - 1) * postPerPage;
  //0 * 8 = 0 gets first index of the page


  // const currentPosts = filterStories.slice(firstPostIndex, lastPostIndex);

  // Filter students based on their search terms:
  const filterStories = stories.filter((story, ind, arr) => {
    // allows the user to search in uppercase, lowercase, or whatever and the user input will still be lowercased
    // indexOf returns the index of the first occurrence of the search term in the story title, and -1 if nothing is found
    console.log("is search is working? ", story.title.toLowerCase().indexOf(search.toLowerCase()) !== -1)
    return story.title.toLowerCase().indexOf(search.toLowerCase()) !== -1;
  });

  const paginatedStories = () => {
    const currentPosts = stories.slice(firstPostIndex, lastPostIndex);
    console.log("currentpost", currentPosts)
    return currentPosts.map((storyList) => (
      <StoryCard story={storyList} key={storyList._id} />
    ))
  }

  const searchedStories = () => {
    return filterStories.map((story, ind, arr) => {
      return (
        <StoryCard story={story} key={story._id} />
      )
    }).slice(firstPostIndex, lastPostIndex)
  }
  const theme = createTheme({
    palette: {
      primary: {
        main: '#EEBBC3', // Set your desired custom primary color here
      },
      secondary: {
        main: '#EEBBC3', // Set your desired custom secondary color here
      },
    },
  });

  return (
    <div>
      <div className="Stories_Page_Particles">
        <ParticleBackground />
      </div>

      <div className='Stories_Page_Name'>
          <h1>StoriesPage</h1>
      </div>

      <div
        className="story-card-container"
        style={{
          // display: 'flex', 
          // flexWrap: 'wrap', 
          // backgroundImage: 'url(https://wallpapercave.com/wp/wp2635945.jpg)' ,
          backgroundPosition: 'center'
        }}
      >

        {/* for search... */}
        <div className='Stories_Page_Search_Bar'>
          <div className="inputBox">
            <input
              type="text"
              value={search}
              onChange={handleSearch}
              required="required"
              style={{ height: "32px", margin: "20px" }}
            />
            <span>Search by title...</span>
            <i></i>
          </div>
        </div>

        <div className='Stories_Page_Display_Stories'>
          {isLoading ? (
            <h1 style={{color:"#fff"}}>Loading..</h1>
          )
            : search.length > 0 ? searchedStories() : paginatedStories()
          }
        </div>

        <div className='Stories-Page-Pagination'>
          <ThemeProvider theme={theme}>
            <Stack spacing={1}>
              <div
                style={{
                  display: "grid",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "5px",


                  cursor: "pointer",
                  outline: "none", // Add this to remove focus outline when the button is clicked
                  padding: 0, // Add this to remove default button padding
                  backgroundColor: "#ffffffc0"
                }}
              >
                <Pagination
                  color="secondary"
                  count={Math.ceil(filterStories.length / postPerPage)}
                  page={currentPage}
                  onChange={(event, value) => paginate(value)}
                />
              </div>
              {/* <Pagination count={10} color="secondary" /> */}
            </Stack>
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
}

export default StoriesPage;