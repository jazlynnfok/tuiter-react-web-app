import React from "react";
import {useSelector} from "react-redux";
import ProfilePageComponent from "./profile-page.js";


const ProfileComponent = () => {
  const profileArray = useSelector(state => state.profile);
 return(
    <>
       <ProfilePageComponent profile={profileArray[0]} />
    </>)
};
export default ProfileComponent;