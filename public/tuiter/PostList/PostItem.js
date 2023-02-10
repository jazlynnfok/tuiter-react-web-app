function PostItem(post) {
    return (`
    <li class="list-group-item">
        <div class="row" style="color:white;">
            <div class="col-1">
                <img class="wd-avatar-img d-flex align-items-center" src="${post.profilePic}"/>
            </div>
            <div class="col-11 ps-3">
                <div class="row">
                    <div class="col-11">
                        <b>${post.userName}</b>
                        <i class="fas fa-circle-check"></i>
                        <span class="wd-fg-color-lightgray">
                            ${post.handle} • ${post.time}
                        </span>
                    </div>
                    <div class="col-1 wd-fg-color-lightgray">
                        <i class="fas fa-ellipsis "></i>
                    </div>
                </div>
                <div class="pb-2">
                    ${post.topic}
                </div>
                <div class="card wd-post-img wd-post-text" style="border-color: rgb(47,51,54); background-color:rgb(31, 31, 31);">
                    <img class="wd-post-img" style="width: 100%; ${(post.title==='') ? 'border-radius: 15px;' : ''}" src="${post.postPic}"/>
                    ${(post.title==='') ? '' : '<div  class="ps-3 pt-2 pe-3">'+post.title+'</div>'}
                    ${(post.text==='') ? '' : '<div class="wd-fg-color-lightgray ps-3 pe-3 wd-post-text">'+post.text+'</div>'}
                    ${(post.link==='') ? '' : '<div class="wd-fg-color-lightgray ps-3 pe-3 pb-2"> <i class="fas fa-link"></i>'+post.link+'</div>'}
                </div>
                <div class="row wd-fg-color-lightgray ps-1 pt-3">
                    <div class="col">
                        <i class="fa-regular fa-comment"></i>
                        <span class="ps-1">${post.comments}</span>
                    </div>
                    <div class="col ps-5">
                        <i class="fas fa-retweet"></i>
                        <span class="ps-1">${post.retweets}</span>
                    </div>
                    <div class="col ps-5">
                        <i class="fa-regular fa-heart"></i>
                        <span class="ps-1">${post.likes}</span>
                    </div>
                    <div class="col ps-5">
                        <i class="fas fa-arrow-up-from-bracket"></i>
                    </div>
                </div>
            </div>
        </div>
    </li>
    `);
}
export default PostItem;