import { useEffect, useState } from "react";

import { fetchArtist } from "../../apicalls";
import SingleAlbum from "../../components/SingleAlbum/SingleAlbum";
import Button from "../../components/Button/Button"
import SingleSong from "../../components/SingleSong/SingleSong"
import "./ArtistPage.css";

const ArtistPage = (props) => {
    const [artist, setArtist] = useState({})

    useEffect(() => {
      fetchArtist(props.match.params.id).then((res) => setArtist(res))
    
    }, [])
    

    return (
        <div className="artist-page__wrap">
            <img src={artist.picture_xl} alt={artist.name} className="artist__header" />
            <div className="header__wrap--art">
                <div className="listeners">{artist?.nb_fan} MONTHLY LISTENERS</div>
                <h1>{artist?.name}</h1>
                <div>
                    <Button text="Play" />
                    <button className="follow__btn">Sign up</button>
                </div>
            </div>
            <h2>Albums</h2>
        </div>
    )
}

export default ArtistPage

