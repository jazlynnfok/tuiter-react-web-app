import React from "react";
const WhoToFollowListItem = (
 {
   who = { userName: 'NASA', handle: 'NASA', avatarIcon: '../images/nasaLogo.jpg' }
 }
) => {
    const wdLeftPadding = {
        "position": "absolute",
        "right": "70px",
        "top": "12px",
    };
 return(
    <li className="list-group-item">
    <div className="row">
        <div className="col-2 d-flex align-items-center">
            <img className="rounded-circle" height={48} src={`${who.avatarIcon}`}/>
        </div>
        <div className="col-10">
            <div className="row">
                <div className="col-9">
                    <div>
                        <b>{who.userName} </b>
                        <i class="bi bi-check-circle-fill"></i>
                    </div>
                    @{who.handle}
                </div>
                <div className="col-1 d-flex align-items-center" style={wdLeftPadding}>
                    <button className="rounded-pill btn btn-primary">
                        Follow
                    </button>
                </div>
            </div>
        </div>
    </div>
</li>
 );
};
export default WhoToFollowListItem;