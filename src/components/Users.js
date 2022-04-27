import { useContext } from "react";
// import { useHistory } from "react-router-dom";
import { AppContext } from "../App";
import User from "./User";



const Users = ({history}) => {
    const { users, currentUser } = useContext(AppContext) // const cnt=useContext(AppContext)   переделали в  {users}  для того, чтобы при обращении не писать  cnt.users
    // const history= useHistory()
    return (
        <div className='container'>
            <h1 className='text-center my-5'>{users.length ? 'All our users' : 'You can be first one!'}</h1>
            <div className='row'>
                {users.map(user => <User key={user.id} user={ user}/>)}
            </div>
            
            {!currentUser ?
                <>
            <hr />
            <div className='d-grid gap-2 col-4 mx-auto'>
                <button className='btn btn-primary' onClick={()=>history.push('/registration')}>
                    Registration
                </button>
                </div></> :null}
        </div>
    )
}
export default Users;