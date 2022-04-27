import { useState, useContext } from "react"
import { AppContext } from "../App"
import UserAlbum from "./UserAlbum"
import UserPhotos from "./UserPhotos"

const UserAlbums = () => {
    const {currentUser, addNewAlbum, currentUserAlbums}=useContext(AppContext)
    const [album, setAlbum] = useState({
        title: '',
        cover: '',
        userId:currentUser
    })
    const changeFieldHandler = (e) => {
        setAlbum({ ...album, [e.target.name]: e.target.value })
    }
    const [currentAlbum, setCurrentAlbum] = useState(null)

    const userAlbums = currentUserAlbums()
    
    return (
        <div className="col-8 p-3 my-2">
            <h3 className="text-center">My albums</h3>
            <div className='row row-cols-1 row-cols-md-3 g-4 p-2'>
                {userAlbums.map(album => <UserAlbum key={album.id} album={album} setCurrentAlbum={ setCurrentAlbum}/>)}
            </div>
            <button className="w-100 btn btn-success"
                type="button"
                data-bs-toggle="modal" data-bs-target="#addAlbumModal">
                Add new album</button>
            <div className="modal fade" id="addAlbumModal" tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >Make your new photo album</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>{setAlbum({ ...album, title: '', cover: '' })}}></button>
                        </div>
                        <div className="modal-body">
                            <input
                                className="form-control my-3"
                                type="text"
                                name="title"
                                placeholder="Type album title"
                                value={album.title}
                                onChange={changeFieldHandler}
                            />
                            <input
                                className="form-control my-3"
                                type="text"
                                name="cover"
                                placeholder="Type cover src"
                                value={album.cover}
                                onChange={changeFieldHandler}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                onClick={() => {
                                    addNewAlbum(album)
                                    setAlbum({ ...album, title: '', cover: '' })
                                }}
                                >
                                add album</button>
                        </div>
                    </div>
                </div>
            </div>
            {currentAlbum && <UserPhotos currentAlbum={currentAlbum}/>} 
        </div>
    )
}
export default UserAlbums;

//{currentAlbum ? <Photos currentAlbum={currentAlbum}/> :{null}