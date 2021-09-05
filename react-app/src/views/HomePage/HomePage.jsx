import { useEffect, useState } from 'react'
import SingleAlbum from '../../components/SingleAlbum'
import './HomePage.css'

import { fetchAlbum } from '../../apicalls'

const HomePage = () => {
    const [skepta, setskepta] = useState([])
    const [fireboy, setfireboy] = useState([])

    useEffect(() => {
        fetchAlbum("skepta").then((res) => setskepta(res) )
        fetchAlbum("fireboy dml").then((res) => setfireboy(res) )
    }, [])
    return <div className="home__wrapper">
        {/* {section 1} */}
        <h2>Time machine</h2>
        {skepta && skepta.slice(0,6).map((song) => <SingleAlbum src={song.album.cover_medium} key={song.id} />)}
        {/* {section 2} */}
        <h2>New releases</h2>
        {fireboy && fireboy.slice(0,6).map((song) => <SingleAlbum src={song.album.cover_medium} key={song.id} />)}
    </div>
}

export default HomePage