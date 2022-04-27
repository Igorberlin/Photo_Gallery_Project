import { useContext } from "react"
import { AppContext } from "../App"
import UserPhoto from "./UserPhoto"

const UserPhotos = ({ currentAlbum }) => {
    const { photos } = useContext(AppContext)
    const albumPhotos = photos.filter(photo => photo.albumId === currentAlbum.id)
    
    return (
        <div className='container mt-3'>
            <h3 className='text-center '>{currentAlbum.title}</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {albumPhotos.map(photo =>
                    <UserPhoto key={photo.id}
                                photo={photo}
                />)}
            </div>
        </div>
    )
}
export default UserPhotos