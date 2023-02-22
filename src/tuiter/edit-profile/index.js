import React from "react";
import {useSelector} from "react-redux";
import EditProfilePage from "./edit-profile-page";


const EditProfile = () => {
  const profileArray = useSelector(state => state.profile);
 return(
       <EditProfilePage profile={profileArray[0]} />
       )
};
export default EditProfile;