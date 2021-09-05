import { useEffect, useState } from 'react'
import SingleAlbum from '../../components/SingleAlbum'
import './HomePage.css'

import { fetchMusic} from '../../apicalls'
import Header from '../../components/header/Header'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [skepta, setskepta] = useState([])
    const [fireboy, setfireboy] = useState([])

    useEffect(() => {
        fetchMusic("skepta").then((res) => setskepta(res) )
        fetchMusic("fireboy dml").then((res) => setfireboy(res) )
    }, [])
    return <div className="home__wrapper">
        <Header />
        {/* {section 1} */}
            <h2>Time machine</h2>
        <div className="home__line">
            {skepta && skepta.slice(0,6).map((song) => <Link to={"album/" + song.album.id}><SingleAlbum src={song.album.cover_medium} key={song.id} /></Link>)}
        </div>
        {/* {section 2} */}
            <h2>New releases</h2>
        <div className="home__line">
            {fireboy && fireboy.slice(0,6).map((song) => <Link to={"album/" + song.album.id}><SingleAlbum src={song.album.cover_medium} key={song.id} /></Link>)}
        </div>
    </div>
}

export default HomePage