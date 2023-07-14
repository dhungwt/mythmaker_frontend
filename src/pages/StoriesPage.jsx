import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAllStoriesThunk} from '../redux/story/story_actions'

// /stories page
function StoriesPage() {
    const dispatch = useDispatch();
    const stories = useSelector((state) => state.allStories.allStory)

        const fetchAllStories = async () => {
        console.log("Dispatching from fetching all students");
        dispatch(fetchAllStoriesThunk());
    }
      
    useEffect(() =>  { 
        fetchAllStories();
      }, []);

  return (
    <div>StoriesPage</div>
  )
}

export default StoriesPage;

// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom'
// import { fetchIndividualStoryThunk } from '../redux/story/story_actions';

// function IndividualStoryPage() {
//     const dispatch = useDispatch();
//     const story = useSelector((state) => state.story);

//     //get id from the url >>> ( :id )
//     const {id} = useParams();

//     // fire fetchIndividualStoryThunk when page is open
//     useEffect(() => {
//         const fetchStory = async() => {
//           console.log("Dispatch from fetch campus");
//           dispatch(fetchIndividualStoryThunk(id));
//         };
    
//         fetchStory();
//       }, []);

//   return (
//     <div>IndividualStoryPage : {id}</div>
//   )
// }

// export default IndividualStoryPage

// //todo: story page that holds all stories eg the browse page