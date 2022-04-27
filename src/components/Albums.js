import { useContext } from "react";
import { AppContext } from "../App";
import Album from "./Album"


const Albums = ({match}) => {
    let { albums } = useContext(AppContext)
    const{getUserNameById}=useContext(AppContext)
    
    const userId = +match.params.id
    
    if (userId) {
        albums = albums.filter(album=>album.userId === userId)
    }
    return (
        <div className='container'>
            <h1 className='text-center my-5'>{userId? `Albums by ${getUserNameById(userId)}`:'All our albums'}</h1>
            <div className='row row-cols-2 row-cols-md-4'>
                {albums.map(album => <Album key={album.id} album={album} />)}
            </div>
        </div>
    )
}
export default Albums;