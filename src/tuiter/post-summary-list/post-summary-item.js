import React from "react";
const PostSummaryItem = (
 {
   post = {
     "topic": "Space",
     "userName": "SpaceX",
     "time": "2h",
     "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
     "image": "../images/teslaLogo.jpg"
   }
 }
) => {
 return(
    <li className="list-group-item">
    <div className="row">
        <div className="col-10">
            <div className="wd-fg-color-lightgray">{post.topic}</div>
            <b>{post.userName} </b>
            <i class="bi bi-check-circle-fill"></i>
            <span className="wd-fg-color-lightgray"> - {post.time}</span><br/>
            <b>
                {post.title}
            </b>
        </div>
        <div className="col-2 d-flex align-items-center">
            <img width={70} className="float-end rounded-3" src={`${post.image}`}/>
        </div>
    </div>
</li>
 );
};
export default PostSummaryItem;