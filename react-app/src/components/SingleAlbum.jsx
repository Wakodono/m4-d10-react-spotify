import "./SingleAlbum.css";

const SingleAlbum = (props) => {
    return (
        <img src={props.src} alt="album cover" key={props.key} />
    )
}

export default SingleAlbum

