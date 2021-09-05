import { useEffect, useState } from 'react'
import SingleAlbum from '../../components/SingleAlbum'
import './HomePage.css'

import { fetchAlbum } from '../../apicalls'
import Header from '../../components/header/Header'

const HomePage = () => {
    const [skepta, setskepta] = useState([])
    const [fireboy, setfireboy] = useState([])

    useEffect(() => {
        fetchAlbum("skepta").then((res) => setskepta(res) )
        fetchAlbum("fireboy dml").then((res) => setfireboy(res) )
    }, [])
    return <div className="home__wrapper">
        <Header />
        {/* {section 1} */}
            <h2>Time machine</h2>
        <div className="home__line">
            {skepta && skepta.slice(0,6).map((song) => <SingleAlbum src={song.album.cover_medium} key={song.id} />)}
        </div>
        {/* {section 2} */}
            <h2>New releases</h2>
        <div className="home__line">
            {fireboy && fireboy.slice(0,6).map((song) => <SingleAlbum src={song.album.cover_medium} key={song.id} />)}
        </div>
    </div>
}

export default HomePage