import { useContext, useState } from "react"
import { AppContext } from "../App"
const UserAlbum = ({ album, setCurrentAlbum }) => {
    const { addNewPhoto } = useContext(AppContext)
    const [photo, setPhoto] = useState({
        src: '',
        title: '',
        albumId:album.id
    })

    const changeFieldHandler = (e) => {
        setPhoto({ ...photo, [e.target.name]: e.target.value })
    }
    return (
        <div className='col'>
        <div className="card text-center h-100 mb-3 px-2">
            <div className="card-body">
                <img src={album.cover} className="card-img-top" alt="album-icon" />
            </div>
                <h5 className="card-title">{album.title}</h5>
                <button className='btn btn-primary btn-sm mb-3' onClick={()=>setCurrentAlbum(album)}>View album</button>
                <button className="btn btn-success btn-sm mb-3"
                    type="button"
                    data-bs-toggle="modal" data-bs-target={`#addPhotoModal_${album.id}`}>
                    add photo</button>
            <div className="modal fade" id={`addPhotoModal_${album.id}`} tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >Add your photo to album { album.title}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"onClick={()=>{setPhoto({ ...album, title: '', cover: '' })}}></button>
                            </div>
                            <div className="modal-body">
                            <input
                                className="form-control my-3"
                                type="text"
                                name="title"
                                placeholder="Type photo title"
                                value={photo.title}
                                onChange={changeFieldHandler}
                            />
                        </div>
                        <div className="modal-body">
                            <input
                                className="form-control my-3"
                                type="text"
                                name="src"
                                placeholder="Type photo src"
                                value={photo.src}
                                onChange={changeFieldHandler}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
                                    onClick={() => {
                                        addNewPhoto(photo)
                                        setPhoto({ ...photo, src:'', title:''})
                                    }}
                                >
                                Add photo</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
export default UserAlbum

