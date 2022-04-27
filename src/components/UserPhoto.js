const UserPhoto = ({ photo }) => {
    return (
        <div className='col'>
            <div className='card text-center h-100'>
                <div className='card-body'>
                    <img src={photo.src} className='card-img-top' alt='...' />
                </div>
                <h5 className='card-title'>{photo.title}</h5>
            </div>
        </div>
    )
}
export default UserPhoto