import React from "react";
import posts from "./posts.json"
import HomePostItem from "./home-post-item";

const HomeComponent = () => {
    return(
        <ul className="list-group">
        {
            posts.map(post => <HomePostItem post={post}/> )
        }
    </ul>
    );
};
export default HomeComponent;

