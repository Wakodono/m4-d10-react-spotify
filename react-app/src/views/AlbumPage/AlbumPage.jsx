import React from 'react'
import { useEffect, useState } from 'react'
import { fetchAlbum } from '../../apicalls'
import './AlbumPage.css'
import SingleSong from '../../components/SingleSong/SingleSong'

export default function AlbumPage(props) {
    const [album, setAlbum] = useState([])

    useEffect(() => {
        fetchAlbum(props.match.params.id).then((res) => setAlbum(res) )
    }, [])

    return (
        <div className="album__wrapper">
            <div className="album__info">
                <h2>{album.title}</h2>
            </div>
            <div className="album__tracks">
            {album?.tracks?.data.map((track) => <SingleSong title={track.title} arist={track.artist.name} duration={track.duration / 60}/>)}
            </div>
        </div>
    )
}
