import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitItem from "./tuit-item";
import { findTuitsThunk } from "../../services/tuits-thunks.js"; //import the thunk

const TuitsList = () => {
//   const tuitsArray = useSelector(state => state.tuits);
    const {tuits, loading} = useSelector( // grab tuits and loading flag from reducer
        state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => { //on component Load, invoke find tuits thunk to fetch tuits and put them in the reducer's store
        dispatch(findTuitsThunk())}, []) //so we can extract them with useSelector() and render tuits here
 return(
    <div>
        <ul className="list-group">
            {
            loading && //if loading flag is true, then show a loading message while data is still coming back from server
            <li className="list-group-item">
                Loading...
            </li>
            }
            {
            // tuitsArray.map(tuit => 
            tuits.map(tuit =>
                <TuitItem key={tuit._id} tuit={tuit} />
            )
            }
        </ul>
    </div>
    
 );
};
export default TuitsList;