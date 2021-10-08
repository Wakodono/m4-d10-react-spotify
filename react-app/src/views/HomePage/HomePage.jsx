import './HomePage.css'
import Header from '../../components/header/Header'
import SingleAlbum from '../../components/SingleAlbum'
import { fetchMusic} from '../../apicalls'
import { useEffect, useState } from 'react'
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
            <h2>SKEPTA</h2>
        <div className="home__line">
            {skepta && skepta.slice(0,6).map((song) => <Link to={"album/" + song.album.id}><SingleAlbum src={song.album.cover_medium} key={song.id} /></Link>)}
        </div>
            <h2>FIREBOY DML</h2>
        <div className="home__line">
            {fireboy && fireboy.slice(0,6).map((song) => <Link to={"album/" + song.album.id}><SingleAlbum src={song.album.cover_medium} key={song.id} /></Link>)}
        </div>
    </div>
}

export default HomePage