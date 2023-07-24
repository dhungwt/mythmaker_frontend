import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';


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
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border:"solid 1px", 
    padding:"25px", 
    borderRadius:"5px", 
    marginBottom:"10px", 
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center",
    // display:"inline-block",
    width:"50vh",
    textDecoration:"underline"
  }));
  
  return (
    <section>
      
      <Item onClick={handleHistoryClick} >
        {history?.Title}
      </Item>
    </section>
  )
}

export default HistoryCard;
