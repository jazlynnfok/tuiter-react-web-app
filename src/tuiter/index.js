import ExploreComponent from "./explore/index.js";
import HomeComponent from "./home/index.js";
import NavigationSidebar from "./navigation-sidebar/index.js";
import WhoToFollowList from "./who-to-follow-list/index.js";
import {Routes, Route} from "react-router";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer.js";
import whoReducer from './reducers/who-reducer'; //import reducer
import { configureStore } from '@reduxjs/toolkit'; //import configureStore
import {Provider} from "react-redux"; //import provider component
import ProfileComponent from "./profile/index.js";
import EditProfile from "./edit-profile/index.js";
const store = configureStore({
    reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer}
});

function Tuiter() {
    return(
        <Provider store = {store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                    style={{"position": "relative"}}>
                <Routes>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="edit-profile" element={<EditProfile/>}/>
                </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
        
    );
 }
 export default Tuiter