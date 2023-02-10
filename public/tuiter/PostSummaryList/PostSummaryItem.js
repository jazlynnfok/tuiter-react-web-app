function PostSummaryItem(post) {
    return (`
    <li class="list-group-item">
        <div class="row">
            <div class="col-10">
                <div class="wd-fg-color-lightgray">${post.topic}</div>
                <b>${post.userName}</b>
                <i class="fas fa-circle-check"></i>
                <span class="wd-fg-color-lightgray"> - ${post.time}</span><br/>
                <b>
                    ${post.title}
                </b>
            </div>
            <div class="col-2 d-flex align-items-center">
                <img class="wd-article-img" src="${post.image}"/>
            </div>
        </div>
    </li>
    `);
}
export default PostSummaryItem;