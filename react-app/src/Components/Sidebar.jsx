import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
               <Nav class="col-md-3 col-lg-2 d-md-block " id="sidebar">
            <div class="position-sticky pt-3 side-navigation"> 
            <div className="spotifyLogo">
              <a class="nav-link text-secondary" href="#">
                <img src="/..assets/Spotify_Logo_RGB_White.png" alt="Spotify logo">
              </a>
            </div>
            <div className="nav-list">
              <li><a class="nav-link " href="#"><i class="bi bi-house-door"> </i>Home</a></li>
              <li><a class="nav-link" href="#"><i class="bi bi-search"></i> Search</a></li>
              <li><a class="nav-link" href="#"><i class="bi bi-collection"></i> Your Library</a></li>
            </div>
            <div id="playlistLikes">
                <button type="button" class="playlistLikes-item"><a class=" href=" #"=""><i class="bi bi-plus-square"></i> Create Playlist</a></button>
                <button type="button" class="playlistLikes-item"><a class=" href=" #"=""><img src="/assets/likedsidebaricon.jpeg" alt="Liked songs icon">Liked Songs</a></button>
              
              <div class="sidebarDivider"></div>
                <div class="sidebarTracks">
                  <ul class="sidebar-list-unstyled">
                    <li>Loading - Olamide ft. Bad Boy Timz </li>
                    <li>Damages - Tems</li>
                    <li>Shad'e - Fireboy DML</li>
                    <li>Party With A Jagaban - Midas the Jagaban</li>
                    <li>Mandy - Scribz Riley</li>
                  <li>O2 - Oxlade</li>
                  <li>Essence - Wizkid ft. Tems</li>
                  <li>Woman - Rema</li>
                  <li>For Me - Happi</li>
                  <li>Airplane Mode - Fireboy DML</li>
                  <li>Southy Love - Peruzzi ft. Fireboy DML</li>
                  <li>My Touch - Chop Daily &amp; Eugy</li>
                  <li>Energy - Skepta &amp; Wizkid</li>
                  <li>Work To Do - August Alsina</li>
                  <li>Mama Stay - WSTRN</li>
                  <li>Back Home - Trey Songz ft. Summer Walker</li>
                  <li>W - Kofee ft. Gunna</li>
                  <li>Dimension - JAE5 ft. Skepta &amp; Rema</li>
                  <li>Your Mines - Yung Bleu ft. Drake</li>
                  <li>Bare Wit Me - Teyana Taylor</li>
                </ul>
                </div>
            </div>
            <div class="installApp">
              <a><i class="bi bi-arrow-down-circle"></i> Install App</a>
            </div> 
          </div></Nav>
        )
    }
}

export default Sidebar