//need props, which is why we imported storycard into storiespage
import React, { useEffect, useState } from 'react'

function StoryCard(props) {
    // const { title, event } = props;
    const story = props.story;

    const handleClick = (e) =>{
        e.preventDefault();
        window.location.href= `/stories/:id`; //redirects to the individual story page
    }
  return (
    <div>
        <button onClick =  {handleClick}>
        <h1> Title: {story.title} </h1>
        {/* <p> Event: {event} </p> */}
        <div key={story.id}>

            {/* <h2> {storyList.title} </h2>
            <h2>{storyList.event} </h2> */}
          </div>
       </button>
    </div>
  )
}

export default StoryCard;
