export const getAlbums = () => {
    return JSON.parse(localStorage.getItem('albums'))?? []
}
export const setAlbumsToLocalStorage = (albums) => {
    localStorage.setItem('albums', JSON.stringify(albums))
}
