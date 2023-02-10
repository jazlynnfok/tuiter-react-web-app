const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2 d-flex align-items-center">
                    <img class="wd-profile-circle rounded-circle" src="${who.avatarIcon}"/>
                </div>
                <div class="col-10">
                    <div class="row">
                        <div class="col-9">
                            <div>
                                <b>${who.userName}</b>
                                <i class="fas fa-circle-check"></i>
                            </div>
                            @${who.handle}
                        </div>
                        <div class="col-1 wd-left-padding d-flex align-items-center ">
                            <button class="rounded-pill btn btn-primary">
                                Follow
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;