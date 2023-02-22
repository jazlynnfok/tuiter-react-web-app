import { createSlice } from "@reduxjs/toolkit";
import profile from './profile.json';

const profileSlice = createSlice({
 name: 'profile',
 initialState: profile,
 reducers: {
    updateProfile(state, action) {
        const currentProfile = state.at(0);
        currentProfile.firstName = action.payload.firstName;
        currentProfile.lastName = action.payload.lastName;
        currentProfile.bio = action.payload.bio;
        currentProfile.location = action.payload.location;
        currentProfile.website = action.payload.website;
        currentProfile.dateOfBirth = action.payload.dateOfBirth;
      }
    }
});

export const {updateProfile} = profileSlice.actions;

export default profileSlice.reducer;