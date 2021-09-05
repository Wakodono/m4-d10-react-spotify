export const fetchAlbum = async(query) => {
    let response = await fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    let music = await response.json()
    return music.data
}