import { useState, useContext } from "react"
import { AppContext } from "../App"
import { useHistory } from "react-router-dom"
import Error from "./Error"
const Login = () => {
    const [currentUser, setCurrentUser] = useState({ email: '', password: '' })
    const [error, setError]=useState(null)
    
    const onChangeHandler = ({ target }) => { //const onChangeHandler = (event.target) 
        setCurrentUser({ ...currentUser, [target.name]:target.value})
    }
    const { changeCurrentUser } = useContext(AppContext)
    const history = useHistory();

    return (
        <div className='container my-5'>
            <div className='col-6 mx-auto my-5'>
                {error && <Error message={ error}/>}
            <h2 className ="text-center">Enter your data please</h2>
                <input
                    className="form-control my-3"
                    type="text"
                    name="email"
                    placeholder="Type email"
                    onChange = {onChangeHandler}
                    value = {currentUser.email}
                />
                <input
                    className="form-control my-3"
                    type="text"
                    name="password"
                    placeholder="Type password"
                    value = {currentUser.password}
                    onChange = {onChangeHandler}
                />
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary"
                        onClick={() => {
                            setError(null)
                            if(changeCurrentUser(currentUser))
                                history.push('/users')
                            else {
                                setError('login or password is wrong')
                                setCurrentUser({email:'', password:''})
                            }
                        }}>
                        login</button>
                </div>
            </div>
        </div>
    )
}
export default Login;