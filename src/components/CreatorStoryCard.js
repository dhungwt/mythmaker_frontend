import React from 'react'
import UserHomepage from '../pages/UserHomepage';

function CreatorStoryCard(props) {
    const creatorStory = props.creatorIdSelector;
        console.log(creatorStory, "i am the creator story")
        
  return (
    <div>CreatorStoryCard:   title:    {creatorStory.title}</div>
  )
}

export default CreatorStoryCard