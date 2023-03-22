import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import { deleteTuitThunk, findTuitsThunk, createTuitThunk, updateTuitThunk } from "../../services/tuits-thunks.js";

const initialState = {
    tuits: [], //initial state has no tuits
    loading: false //loading flag to display spinner
}

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "../../../images/nasaLogo.jpg",
   };
   
   const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
   }
   

const tuitsSlice = createSlice({
 name: 'tuits',
 initialState, //same as "initialState": initialState
 extraReducers: { //define asynchronous reducers
   [findTuitsThunk.pending]: //if request is not yet fulfilled
      (state) => {
         state.loading = true //set loading true so UI can display spinner
         state.tuits = [] //empty tuits since we are still fetching them
   },
   [findTuitsThunk.fulfilled]: //when we get response, request is fulfilled
      (state, { payload }) => { //extract/destruct payload from action object
         state.loading = false //turn off loading flag since we have the data
         state.tuits = payload //payload has tuits from server & update redux state
   },
   [findTuitsThunk.rejected]: //if request times out or responds with error
      (state, action) => { 
         state.loading = false //reset loading flag 
         state.error = action.error //report error
   },
   [deleteTuitThunk.fulfilled] : //handle successful response
   (state, { payload }) => { //server response successful
   state.loading = false //payload from action contains tuit ID to remove; turn off loading flag
   state.tuits = state.tuits //filter out tuit whose ID matches tuit to remove
     .filter(t => t._id !== payload)
 },
    [createTuitThunk.fulfilled]: //when server responds
    (state, { payload }) => { //payload contains new tuit
    state.loading = false //clear loading flag
    state.tuits.push(payload) //append new tuit to tuits array
    },
    [updateTuitThunk.fulfilled]:
  (state, { payload }) => {
    state.loading = false
    const tuitNdx = state.tuits
      .findIndex((t) => t._id === payload._id)
    state.tuits[tuitNdx] = {
      ...state.tuits[tuitNdx],
      ...payload
    }
  }
 },

//  initialState: tuits,
 reducers: { //we're not goign to use old reducers anymore
//      updateLikes(state, action) {
//          const tuit = state.find((tuit) =>
//                tuit._id === action.payload._id)
//          tuit.liked = !tuit.liked
//          if (tuit.liked) {
//             tuit.likes += 1;
//          } else {
//             tuit.likes -=1;
//          }
//        },
//        createTuit(state, action) {
//         state.unshift({
//           ...action.payload,
//           ...templateTuit,
//           _id: (new Date()).getTime(),
//         })
//         },
//         deleteTuit(state, action) {
//             const index = state
//                .findIndex(tuit =>
//                   tuit._id === action.payload);
//             state.splice(index, 1);
//           }
   }     
});
export const {updateLikes, createTuit, deleteTuit} = tuitsSlice.actions;

export default tuitsSlice.reducer;