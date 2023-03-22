import {createAsyncThunk} //import createAsyncThunk
  from "@reduxjs/toolkit"
import * as service //import all exported functions as service
  from "./tuits-service.js"

export const findTuitsThunk = createAsyncThunk( //create thunk for findTuits
  'tuits/findTuits', async () => //give unique name, thunk invokes service function
    await service.findTuits() // returned data goes in redux action's payload
)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuit', //unique thunk identifier
    async (tuitId) => { //wraps
      await service.deleteTuit(tuitId) //service method
      return tuitId //return tuit ID so we can remove tuit from reducer's store
  })
  
export const createTuitThunk = createAsyncThunk(
'tuits/createTuit',
async (tuit) => {
    const newTuit = await service.createTuit(tuit)
    return newTuit
})
  
export const updateTuitThunk = //create update tuit thunk
  createAsyncThunk( 
    'tuits/updateTuit',  //unique identifier
    async (tuit) => //accepts updated tuit
      await service.updateTuit(tuit) //sends updated tuit to server with service
)
