import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {cutScene, setCutScene, option, optionScreen} from '../redux/Game/game1Actions'

 const HafeefasQuest = () => {
    //always declare the dispatch
    const dispatch = useDispatch();
    //get the cutScene and optionScreen using useSelector, which will be grabbed from the redux store which is essentially what useSelector does
    const cutScene = useSelector((state) => state.cutScene);
    // const optionScreen = useSelector((state) => state.game.optionScreen);

    //the useEffect will be used for side effects that may occur when the component is rendered or updated
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await axios.get(`http://localhost:8080/api/stories}`);
                //dispatch is the mailman. dispatch the cutScene :
                dispatch(response)
                 console.log(dispatch(response));
                 
            } catch (error) {
                console.log(error, "an error occured when patching the api ")
            }
        }
        
        //NOT NEEDED ANYMORE: fake api request that will include a delay thats done with a promise:
        // const fakeAPIRequest = () => {
        //     return new Promise((resolve) => {
        //         //set a delay of 1000 milliseconds, which is actually 1 second
        //         setTimeout(() => {
        //             const data = {
        //                 cutScene: "Todoroki gets super shy and fires his powers at you. You die a burning death.",
        //                 options: [],
        //             };
        //             resolve(data);
        //             console.log(data , "you've reached the data")
        //         }, 1000);
        //     })
        // }; 

            fetchData();
        }, [dispatch]);
        

        return (
            <>
                <h1> Quest </h1>
                <p> {cutScene} and Options: </p>
                <ul>
                    {/* iterate through the array of optionScreen */}
                    {/* {cutScene.map((option, index)=>{
                        console.log(option);
                        <li key = {index}> {option} </li>;
                    })}; */}
                </ul>
            </>
        )
    };

export default HafeefasQuest;