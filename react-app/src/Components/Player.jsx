import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class Player extends Component {
    render() {
        return (
            <footer>
        <div class="container-fluid spotify-footer">
          <div id="footer-left" class="d-flex justify-content-start align-items-center">
            <div class="album-cover-image">
              <img class="img-fluid" src="/assets/footer/albumCover.jpg" alt="" />
            </div>

            <div class="card-body text-white d-flex flex-column text-nowrap">
              <a href="#" class="footer-card-title h6 mb-0 song-title">Torna a casa</a>
              <span> <a href="#" class="song-author">Måneskin</a></span>
            </div>
            <div class="card-icons text-white ml-2">
              <Button type="button" class="save-btn">
                <i class="far fa-heart" aria-hidden="true"></i>
              </Button>
            </div>
          </div>
          <div id="footer-middle">
            <div id="footer-middle-top" class="d-flex justify-content-center align-items-center">
              <Button class="btn-footer btn-footer-shuffle">
                <i class="fas fa-random" aria-hidden="true"></i>
              </Button>
              <Button class="btn-footer">
                <i class="fas fa-step-backward" aria-hidden="true"></i>
              </Button>
              <Button class="btn-footer btn-footer-play">
                <i class="fas fa-play-circle" style="font-size: 2rem" aria-hidden="true"></i>
              </Button>
              <Button class="btn-footer">
                <i class="fas fa-step-forward" aria-hidden="true"></i>
              </Button>
              <Button class="btn-footer btn-footer-repeat">
                <i class="fas fa-redo" aria-hidden="true"></i>
              </Button>
            </div>
            <div id="footer-middle-bottom">
              <span class="mx-2 curent-time">0:00</span>
              <div class="progress playback-progress-container">
                <input class="playback-time" type="range" value="0" min="0" max="100" style="background-size: 0% 100%;" />
              </div>

              <span class="mx-2 total-time">3:34</span>
            </div>
          </div>
          <div id="footer-right" class="d-flex justify-content-center align-items-center">
            <Button class="btn-footer btn-footer-small btn-queue">
              <i class="fas fa-th-list" aria-hidden="true"></i>
            </Button>
            <Button class="btn-footer btn-footer-small">
              <i class="fas fa-plug" aria-hidden="true"></i>
            </Button>
            <Button class="btn-footer btn-volume">
              <i class="fas fa-volume-up" aria-hidden="true"></i>
            </Button>
            <div class="progress volume-bar">
              <div class="progress-bar footer-progress-bar" role="progressbar" style="width: 75%" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
            <Button class="volume-bar-slider"></Button>
            <Button class="btn-footer btn-footer-small">
              <i class="fas fa-expand-alt" aria-hidden="true"></i>
            </Button>
          </div>
        </div>
      </footer>
        )
    }
}
