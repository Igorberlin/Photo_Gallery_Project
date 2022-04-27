import { useContext } from "react"
import { AppContext } from "../App"
import { useParams } from "react-router-dom"
import AlbumPhoto from "./AlbumPhoto"


const AlbumPhotos = () => {
    const { photos, getAlbumTitleById } = useContext(AppContext);
    const { id, author } = useParams();
    const albumPhotos = photos.filter(photo => photo.albumId === +id)

    return (
        <div className='container mt-3'>
            <h3 className='text-center '>album"{getAlbumTitleById(id)}", by{ author}</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {albumPhotos.map(photo =><AlbumPhoto key={photo.id} photo={photo}/>)}
            </div>
        </div>
    )
}  
export default AlbumPhotos