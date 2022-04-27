import {useContext, useState} from 'react'
import { AppContext } from '../App'
import { useHistory } from 'react-router-dom'
import Error from './Error'
const Registration = () => {


    const [formData, setFormData] = useState({
        fName: '',
        lName: '',
        email: '',
        password: '',
        avatar:''
    })
    const [error, setError]=useState(null)

    const history = useHistory()

    const {addUser} = useContext(AppContext)

    const changeFieldHandler=(e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const submitHandler = (e) => {
        e.preventDefault();
        setError(null)
        if (!formData.fName.trim() || !formData.email.trim() || !formData.password.trim()) return
        if(addUser(formData))
            history.push('/users')
        else {
            setError('user specified email is already exist');
            setFormData({ ...formData, email:''})
        }
}

    return (
        <div className="container">
            {error && <Error message={error}/>}
            <div className="w-50 mx-auto">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text"
                            className="form-control"
                            name="fName"
                            value={formData.fName}
                            onChange={changeFieldHandler} />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text"
                            className="form-control"
                            name="lName"
                            value={formData.lName}
                            onChange={changeFieldHandler} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={changeFieldHandler} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={changeFieldHandler} />
                    </div>
                    <div className="form-group mb-2">
                        <label>Avatar</label>
                        <input type="text"
                            className="form-control"
                            name="avatar"
                            value={formData.avatar}
                            onChange={changeFieldHandler} />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary w-100">Registartion</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Registration