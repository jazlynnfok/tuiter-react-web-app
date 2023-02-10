const NavigationSidebar = (active) => {
    return(`
    <div class="list-group mb-2">
        <i class="fab fa-twitter list-group-item"></i>
        <a href="../HomeScreen/index.html" class="list-group-item ${active==='home' ? 'active' : ''}">
            <i class="fas fa-house-chimney"></i>
            <span class="d-none d-xl-inline">Home</span>
        </a>
        <a href="../Explore/index.html" class="list-group-item ${active==='explore' ? 'active' : ''}">
            <i class="fas fa-hashtag"></i> 
            <span class="d-none d-xl-inline">Explore</span>
        </a>      
        <a href="#" class="list-group-item ${active==='notifications' ? 'active' : ''}"> 
            <i class="fas fa-bell"></i>
            <span class="d-none d-xl-inline">Notifications</span>
        </a>      
        <a href="#" class="list-group-item ${active==='messages' ? 'active' : ''}">
            <i class="fas fa-envelope"></i> 
            <span class="d-none d-xl-inline">Messages</span>
        </a>  
        <a href="../bookmarks/index.html" class="list-group-item ${active==='bookmarks' ? 'active' : ''}"> 
            <i class="fas fa-bookmark"></i> 
            <span class="d-none d-xl-inline">Bookmarks</span>
        </a>  
        <a href="#" class="list-group-item ${active==='lists' ? 'active' : ''}"> 
            <i class="fas fa-list "></i> 
            <span class="d-none d-xl-inline">Lists</span>
        </a>
        <a href="../profile.html" class="list-group-item ${active==='profile' ? 'active' : ''}"> 
            <i class="fas fa-user"></i> 
            <span class="d-none d-xl-inline">Profile</span>
        </a>
        <a href="#" class="list-group-item ${active==='more' ? 'active' : ''}">
            <i class="fas fa-circle-chevron-down"></i> 
            <span class="d-none d-xl-inline">More</span>
        </a>
    </div>
    <button class="btn btn-primary rounded-pill" style="width:100%;">Tuit</button>
    `);
}
export default NavigationSidebar;