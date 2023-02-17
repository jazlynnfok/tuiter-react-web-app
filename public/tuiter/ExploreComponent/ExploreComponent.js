import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row">
            <div class="input-group mb-2">
                <i style="color:gray;" class="pt-2 input-group-text fas fa-magnifying-glass wd-search wd-no-right-border"></i>
                <input type="text" class="form-control wd-no-left-border rounded-pill wd-search wd-straight-border-left" placeholder="Search Tuiter">
                <a href="explore-settings.html"><i class="ms-2 fas fa-cog fa-2x"></i></a>
            </div>
        </div>
        <ul class="nav mb-2 nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" href="for-you.html">For you</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="trending.html">Trending</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="news.html">News</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sports.html">Sports</a>
            </li>
            <li class="nav-item d-none d-md-inline">
                <a class="nav-link" href="entertainment.html">Entertainment</a>
            </li>
        </ul>
        <!-- image with overlaid text -->
        <div class="card">
            <img style="width: 100%;" src="../../images/starship.jpg"/>
            <div class="card-img-overlay text-white d-flex align-items-end">
                <h2>SpaceX's Starship</h2>
            </div>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
