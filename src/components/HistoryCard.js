import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import './components.css';
import '../components/Button/StreamingButton.css'

//this card displays stories the user has played
function HistoryCard(props) {
  //history will hold all the information within
  // the individual stories in the user's history
  const navigate = useNavigate();
  const history = props.singleStoryHistory;

  // const navigate = useNavigate();


  const handleHistoryClick = () => {
    console.log("INSIDE HISTORY CLICK HANDLER");
    //will redirect user to the url of the individual story

    navigate(`/stories/${history?._id}`);

  };

  const Item = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    color: "white", 
    marginBottom:"10px", 
    width:"40vw",
    fontSize:"17px",
    border:"solid 1px", 
    borderRadius:"25px",
    boxShadow: "0px 0px 30px rgba(254, 252, 252, 0.3)",
  }));
  
  return (
    <div >
      <div 
      style={{
        border:"solid white", 
        padding:"20px",
        borderRadius:"20px",  
        marginBottom:"20px",
        boxShadow: "0px 0px 30px rgba(254, 252, 252, 0.3)"
    }}>
      <p style={{
        color:"white", textAlign:"center" }}> 
        <strong>Replay</strong> 
      </p>
        <Item onClick={handleHistoryClick}
        className="btn" style={{}} 
        >
          {history?.Title}
        </Item>
        </div>
      </div>
  )
}

export default HistoryCard;
