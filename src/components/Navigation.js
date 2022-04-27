import { useContext } from "react";
import { NavLink, useHistory, Link } from "react-router-dom";
import { AppContext } from "../App";

const Navigation = () => {

    const {currentUser, logout, getUserNameById}= useContext(AppContext)
    const history = useHistory();
    return (
        <nav className="navbar navbar-expand bg-primary mb-3">
            <div className="container">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                    <li className="nav-item"><NavLink exact to="/">Home</NavLink></li>
                    <li className="nav-item"><NavLink to="/users">Users</NavLink></li>
                    <li className="nav-item"><NavLink to="/albums">Albums</NavLink></li>
                </ul>
                {currentUser?
                    <>
                        <li className='text-white me-3 list-unstyled'>{`Hi, ${getUserNameById(+currentUser)}!`}</li>
                        <li className='li text-white list-unstyled' onClick={() => {
                            logout()
                            history.push('/')
                        }}>Logout</li>
                    </> :
                    <>
                        <li className='text-white me-3 list-unstyled'>Hi, gast!</li>
                        <Link className='nav-item' to='/login'>Login</Link>
                    </>
                }
            </div>
        </nav>
    )
}
export default Navigation;