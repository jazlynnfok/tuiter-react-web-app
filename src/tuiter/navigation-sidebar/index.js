import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group mb-2">
        <a href="#" className="list-group-item"><i class="bi bi-twitter"></i>  <span class="d-none d-xl-inline">Tuiter</span></a>
        <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
        <i class="bi bi-house-fill"></i>  <span class="d-none d-xl-inline">Home</span>
        </Link>
        <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
        <i class="bi bi-hash"></i>  <span class="d-none d-xl-inline">Explore</span>
        </Link>
        <a href="#" className={`list-group-item ${active === 'notifications'?'active':''}`}>
        <i class="bi bi-bell-fill"></i>  <span class="d-none d-xl-inline">Notifications</span>
        </a>
        <a href="#" className={`list-group-item ${active === 'messages'?'active':''}`}>
        <i class="bi bi-envelope-fill"></i>  <span class="d-none d-xl-inline">Messages</span>
        </a>
        <a href="../../tuiter/bookmarks/index.html" className={`list-group-item ${active === 'bookmarks'?'active':''}`}>
        <i class="bi bi-bookmark-fill"></i>  <span class="d-none d-xl-inline">Bookmarks</span>
        </a>
        <a href="#" className={`list-group-item ${active === 'lists'?'active':''}`}>
        <i class="bi bi-list-ul"></i>  <span class="d-none d-xl-inline">Lists</span>
        </a>
        <a href="../../tuiter/profile.html" className={`list-group-item ${active === 'profile'?'active':''}`}>
        <i class="bi bi-person-fill"></i>  <span class="d-none d-xl-inline">Profile</span>
        </a>
        <a href="#" className={`list-group-item ${active === 'more'?'active':''}`}>
        <i class="bi bi-plus-circle-dotted"></i>  <span class="d-none d-xl-inline">More</span>
        </a>
        
      </div>
   
    );
};
export default NavigationSidebar;