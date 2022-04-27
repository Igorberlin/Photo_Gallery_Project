import { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const User = ({ user }) => {
    const { currentUser } = useContext(AppContext)
    return (
        <div className="card col-6 col-sm-4 col-md-3 text-center p-3 ">
            {user.avatar ? <img src={user.avatar} className="card-img-top" alt="..." /> :
                <svg xmlns="http://www.w3.org/2000/svg" width="10rem" height="10rem" fill="currentColor" className="bi bi-person-fill mx-auto text-primary" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>}
                <div className="card-body">
                    <h5 className="card-title">{user.fName} {user.lName}</h5>
                    <p className="card-text">{user.email}</p>
                {currentUser === user.id ?
                    <Link to={`/user/${user.id}`} className='btn btn-dark'> profile edit</Link> :
                    <Link to={`/albums/user/${user.id}`} className='btn btn-primary'> view albums</Link>}
                </div> 
        </div>
    )
}
export default User;