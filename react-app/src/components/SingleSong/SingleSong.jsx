import React from 'react'
import './SingleAlbum.css'
import {CgMusicNote} from "react-icons/cg"

export default function SingleAlbum({title, artist, duration}) {
    return (
        <div className="single__wrapper">
           <div className="note-icon">{CgMusicNote}</div> 
           <div className="title-and-artist">
                <span className="title">{title}</span>   
                <span className="artist">{artist}</span>   
            </div> 
           <div className="duration">{duration}</div> 
        </div>
    )
}
