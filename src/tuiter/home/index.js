import React from "react";
import TuitsList from "../tuits/tuits-list";
// import posts from "./posts.json"
import WhatsHappening from "./whats-happening";
// import HomePostItem from "./home-post-item";

const HomeComponent = () => {
    return(
    //     <ul className="list-group">
    //     {
    //         posts.map(post => <HomePostItem post={post}/> )
    //     }
    // </ul>
    <>
        <h4>Home</h4>
        <WhatsHappening/>
        <TuitsList/>
    </>
    );
};
export default HomeComponent;

