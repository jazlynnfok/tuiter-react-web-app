import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

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
 initialState: tuits,
 reducers: {
     updateLikes(state, action) {
         const tuit = state.find((tuit) =>
               tuit._id === action.payload._id)
         tuit.liked = !tuit.liked
         if (tuit.liked) {
            tuit.likes += 1;
         } else {
            tuit.likes -=1;
         }
       },
       createTuit(state, action) {
        state.unshift({
          ...action.payload,
          ...templateTuit,
          _id: (new Date()).getTime(),
        })
        },
        deleteTuit(state, action) {
            const index = state
               .findIndex(tuit =>
                  tuit._id === action.payload);
            state.splice(index, 1);
          }
   }     
});
export const {updateLikes, createTuit, deleteTuit} = tuitsSlice.actions;

export default tuitsSlice.reducer;