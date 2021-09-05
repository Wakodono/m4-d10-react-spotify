import React from 'react'
import { useEffect, useState } from 'react'
import { fetchAlbum } from '../../apicalls'
import './AlbumPage.css'
import SingleSong from '../../components/SingleSong/SingleSong'

export default function AlbumPage(props) {
    const [album, setAlbum] = useState({})

    useEffect(() => {
        fetchAlbum(props.match.params.id).then((res) => setAlbum(res) )
    }, [])

    return (
        <div className="album__wrapper">
            <h2>{album.title}</h2>
            {album && tracks && tracks.data.map(() => <SingleSong title={tracks.title} arist={tracks.artist.name} duration={tracks.duration / 60}/>)}
        </div>
    )
}
