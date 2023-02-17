import React from "react";
import "./index.css";

const HomePostItem = (
 {
   post = {
    "topic": "Amazing show about @Inspiration4x mission!",
    "userName": "Elon Musk",
    "handle": "elonmusk",
    "time": "23h",
    "profilePic": "../images/avatar-img.jpg",
    "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
    "postPic": "../images/inspiration4.jpg",
    "text": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space ...",
    "link": "netflix.com",
    "comments": "4.2K",
    "retweets": "3.5K",
    "likes": "37.5K"
}
 }
) => {
 return(
    <li className="list-group-item">
        <div className="row">
            <div className="col-1">
                <img className="wd-avatar-img d-flex align-items-center" src={`${post.profilePic}`}/>
            </div>
            <div className="col-11 ps-3">
                <div className="row">
                    <div className="col-11">
                        <b>{post.userName} </b>
                        <i class="bi bi-check-circle-fill"></i>
                        <span className="wd-fg-color-lightgray ps-2">
                            {post.handle} • {post.time}
                        </span>
                    </div>
                    <div className="col-1 wd-fg-color-lightgray">
                        <i class="bi bi-three-dots"></i>
                    </div>
                </div>
                <div className="pb-2">
                    {post.topic}
                </div>
                <div className="card wd-post-img wd-post-text" >
                    <img className={`wd-post-img ${(post.title==='') ? 'wd-post-text' : ''}`} src={`${post.postPic}`}/>
                    <div className={`${(post.title==='') ? '' : 'ps-3 pt-2 pe-3'}`}>
                        {`${(post.title==='') ? '' : post.title}`}
                    </div>
                    <div className={`${(post.text==='') ? '' : 'wd-fg-color-lightgray ps-3 pe-3 wd-post-text'}`}>
                        {`${(post.text==='') ? '' : post.text}`}
                    </div>
                    <div className={`${(post.link==='') ? '' : 'wd-fg-color-lightgray ps-3 pe-3 pb-2'}`}>
                        <i className={`${(post.link==='') ? '' : 'bi bi-link-45deg'}`}></i>
                        {`${(post.link==='') ? '' : post.link}`}
                    </div>
                </div>
                <div className="row wd-fg-color-lightgray ps-1 pt-3">
                    <div className="col">
                        <i class="bi bi-chat"></i>
                        <span className="ps-1">{post.comments}</span>
                    </div>
                    <div className="col ps-5">
                        <i class="bi bi-arrow-repeat"></i>
                        <span className="ps-1">{post.retweets}</span>
                    </div>
                    <div className="col ps-5">
                        <i class="bi bi-heart"></i>
                        <span className="ps-1">{post.likes}</span>
                    </div>
                    <div className="col ps-5">
                        <i class="bi bi-upload"></i>
                    </div>
                </div>
            </div>
        </div>
    </li>
 );
};
export default HomePostItem;