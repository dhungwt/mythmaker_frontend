//need props, which is why we imported storycard into storiespage
// import React, { useEffect, useState } from 'react'
// import './components.css'

// function StoryCard(props) {
//     const story = props.story;

//     const handleClick = (e) =>{
//         e.preventDefault();
//         window.location.href= `/stories/:id`; //redirects to the individual story page
//     }
//   return (
//     <div className="story-card" style={{maxWidth:"20%", height:"10%"}}>
//         <button className="card-button" onClick={handleClick}>
//         <h1 className="card-title"> Title: {story.title} </h1>
//         {/* <p> Event: {event} </p> */}
//         <div key={story.id}>

//           </div>
//        </button>
//     </div>
//   )
// }

// export default StoryCard;
//need props, which is why we imported storycard into storiespage
//this card is for the browse all stories page
import React, { useEffect, useState } from 'react'
import './components.css'

function StoryCard(props) {
    // const { title, event } = props;
    const story = props.story;
    const searchBar = props.filterStudents; //filtered array from storiespage

    const handleClick = (e) =>{
        e.preventDefault();
        window.location.href= `/stories/${story._id}`; //redirects to the individual story page
    }
      //does essentially the samething as the StoriesPage where we check if the input/title exists 

  return (
    // <div className="story-card" style={{maxWidth:"20%"}}>
    //     <button className="card-button" onClick={handleClick}>
    //     <h1 className="card-title"> Title: {story.title} </h1>
    //     <div key={story.id}>

    
    //       </div>
    //    </button>
    // </div>
    
    <div className="story-card" style={{margin:"3%", marginTop:"15vh", boxShadow: "10px 10px 15px 0 rgba(0, 0, 0, 0.2)" }}>
    <div className="card" style={{height: '60%', border:"none"}}> 
      <img className="card-img-top" src="https://i.imgur.com/t1lXeFj.png" alt="Card image cap"
        style={{ height: '320px', objectFit:"cover" }} // Set a fixed height for the card image
 />
      
      <div className="card-body" >
        <h5 className="card-title btn btn-primary" 
        onClick={handleClick} 
        style={{width:"100%"}}
        >{story.title}</h5>
    
        <p className="card-text" >{story.event}</p>
         {/* <h1 className="btn btn-primary" onClick={handleClick}>
          Go somewhere
        </h1>  */}
      </div>
    </div>
  </div>
);
}

export default StoryCard;