import React from "react";
import "./index.css";
import {Link} from "react-router-dom";

const ProfilePageComponent = (
    {profile = {
        "firstName": "Dummy", "lastName": "User", "handle": "@dummy",
        "profilePicture": "../../../images/reactLogo.jpg", 	"bannerPicture": "../../../images/banner.jpg",
        "bio": "This is a dummy account for a dummy user :)",
        "website": "thisismywebsite.com",
        "location": "Boston, MA",	"dateOfBirth": "1/2/3456",	"dateJoined": "4/2009",
        "followingCount": 340,	"followersCount": 223, "tuitCount":5678
      }}
) => {
    return(
        <div>
            <div className="row">
                <div className="col-1">
                    <i className="bi bi-arrow-left"></i>
                </div>
                <div className="col-10">
                    <b className="wd-large-font">{profile.firstName} {profile.lastName}</b>
                    <div className="wd-small-font wd-fg-color-lightgray">{profile.tuitCount} Tuits</div>
                </div>
            </div>
            <img src={profile.bannerPicture} className="w-100"/>
            <div className="row">
                <div className="col-8">
                    <img src={profile.profilePicture} className="wd-profile-img rounded-circle"/>
                </div>
                <Link to="/tuiter/edit-profile/" className=" col-3 mt-2 ms-3">
                    <button className=" rounded-pill btn btn-outline-dark float-end fw-bold">Edit profile</button>
                </Link>
                
            </div>
            <div className="ms-4 mt-3">
                <b className="wd-large-font">{profile.firstName} {profile.lastName}</b>
                <div className="wd-small-font wd-fg-color-lightgray">{profile.handle}</div>
                <div className="pt-2">{profile.bio}</div>

                <div className="wd-fg-color-lightgray mt-2">
                    <span className="pe-3">
                        <i class="bi bi-geo-alt"> </i>
                        {profile.location}
                    </span>
                    <span className="pe-3">
                        <i class="bi bi-globe-americas"> </i>
                        Born {profile.dateOfBirth}
                    </span>
                    <span className="pe-3">
                        <i class="bi bi-calendar3"> </i>
                        Joined {profile.dateJoined}
                    </span>
                </div>

                <div className="mt-2">
                    <b>{profile.followingCount}</b> <span className="wd-fg-color-lightgray pe-3"> Following</span>
                    <b>{profile.followersCount}</b> <span className="wd-fg-color-lightgray pe-3"> Followers</span>
                </div>

            </div>
        </div>
    );
};
export default ProfilePageComponent;
