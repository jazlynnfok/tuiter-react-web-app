import React, {useState} from "react";
import "./index.css"
import {useDispatch} from "react-redux";
import { updateProfile } from "../profile/profile-reducer";
import {Link} from "react-router-dom";

const EditProfilePage = (
    {profile = {
        "firstName": "Dummy", "lastName": "User", "handle": "@dummy",
        "profilePicture": "../../../images/reactLogo.jpg", 	"bannerPicture": "../../../images/banner.jpg",
        "bio": "This is a dummy account for a dummy user :)",
        "website": "thisismywebsite.com",
        "location": "Boston, MA",	"dateOfBirth": "1/2/3456",	"dateJoined": "4/2009",
        "followingCount": 340,	"followersCount": 223, "tuitCount":5678
      }}
) => {
    let [prof, setProfile] = useState({"bio":profile.bio, "location":profile.location, "dateOfBirth":profile.dateOfBirth, "firstName":profile.firstName, "lastName": profile.lastName, "website": profile.website});
    const dispatch = useDispatch();
    const profileSaveHandler = () => {
        const newProfile = {
            "bio": prof.bio, "location": prof.location, "dateOfBirth":prof.dateOfBirth, "firstName":prof.firstName, "lastName":prof.lastName, "website":prof.website
        }
        dispatch(updateProfile(newProfile));
    }
    return(
        <div>
            <div className="row">
                <div className="col-1">
                <Link to="/tuiter/profile">
                    <i className="bi bi-x-lg float-end"></i>
                </Link>
                </div>
                <div className="col-9">
                    <b className="wd-large-font">Edit Profile</b>
                </div>
                <div className="col-2">
                    <Link to="/tuiter/profile">
                        <button onClick={profileSaveHandler} className="rounded-pill btn btn-dark float-end pe-3 ps-3 mb-2 fw-bold">Save</button>
                    </Link>
                    
                </div>
            </div>
            <img src={profile.bannerPicture} className="w-100"/>
            <div className="row">
                <div className="col-8">
                    <img src={profile.profilePicture} className="wd-edit-profile-img rounded-circle"/>
                </div>
            </div>
            <div className="wd-move-up mb-2">
                <form className="form-floating">
                    <input type="text" className="form-control" onChange={(event) => setProfile({...prof, "firstName":event.target.value.split(" ")[0], "lastName": event.target.value.split(" ")[1]})} defaultValue={`${profile.firstName} ${profile.lastName}`} />
                    <label for="floatingInputValue">Name</label>
                </form>
                <form className="form-floating mt-4">
                    <input type="text" className="form-control" onChange={(event) => setProfile({...prof, "bio":event.target.value})} defaultValue={profile.bio} />
                    <label for="floatingInputValue">Bio</label>
                </form>
                <form className="form-floating mt-4">
                    <input type="text" className="form-control" onChange={(event) => setProfile({...prof, "location":event.target.value})} defaultValue={profile.location}/>
                    <label for="floatingInputValue">Location</label>
                </form>
                <form className="form-floating mt-4">
                    <input type="text" className="form-control" onChange={(event) => setProfile({...prof, "website":event.target.value})} defaultValue={profile.website}/>
                    <label for="floatingInputValue">Website</label>
                </form>
                <form className="form-floating mt-4">
                    <input type="text" className="form-control" onChange={(event) => setProfile({...prof, "dateOfBirth":event.target.value})} defaultValue={profile.dateOfBirth}/>
                    <label for="floatingInputValue">Birth date</label>
                </form>
            </div>
        </div>
    );
};
export default EditProfilePage;
