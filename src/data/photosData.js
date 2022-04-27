export const getPhotos = () => {
    return JSON.parse(localStorage.getItem('photos'))??[]
}
export const setPhotosToLocalStorage = (photos) => {
    localStorage.setItem('photos', JSON.stringify(photos))
}
