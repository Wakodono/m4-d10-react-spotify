import React from 'react'
import './SingleSong.css'
import {CgMusicNote} from "react-icons/cg"

const SingleSong = ({title, artist, duration}) => {
    return (
        <div className="single__wrap" onclick={getSong}>
           <div className="note-icon">{CgMusicNote}</div> 
           <div className="title-and-artist">
                <span className="title">{title}</span>   
                <span className="artist">{artist}</span>   
            </div> 
           <div className="duration">{duration.toFixed(1)}</div> 
        </div>
    )
}

export default SingleSong