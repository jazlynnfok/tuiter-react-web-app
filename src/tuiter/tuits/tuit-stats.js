import React from "react";
import { updateLikes } from "./tuits-reducer";
import {useDispatch} from "react-redux";
const TuitStats = (
    {tuit = {
        "_id": 234,
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
        "image": "../images/virgingalacticlogo.jpg",
        "liked": true,
        "replies": 123,
        "retuits": 432,
        "likes": 2345,
        "handle": "@spacex",
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
      }
    }
) => {
    const dispatch = useDispatch(); //get dispatcher to invoke reducer functions
    const updateLikesHandler = (tuit) => {
        dispatch(updateLikes(tuit))
    }
    return( 
        <div className="row ps-1 pt-3">
            <div className="col">
                <i class="bi bi-chat"></i>
                <span className="ps-1">{tuit.replies}</span>
            </div>
            <div className="col ps-5">
                <i class="bi bi-arrow-repeat"></i>
                <span className="ps-1">{tuit.retuits}</span>
            </div>
            <div className="col ps-5">
            <i onClick={() => 
            updateLikesHandler(tuit)} class={`${tuit.liked ? 'bi bi-heart-fill wd-pink' : 'bi bi-heart'}`}></i>
                <span className="ps-1">{tuit.likes}</span>
            </div>
            <div className="col ps-5">
                <i class="bi bi-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;