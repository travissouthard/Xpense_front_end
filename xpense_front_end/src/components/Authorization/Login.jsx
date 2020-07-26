import React, {useState, useContext} from 'react'
import {useHistory} from "react-router-dom"
import UserContext from "../../context/UserContext"
import Axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const { setUserData } = useContext(UserContext)
    const history = useHistory()

    const submit = async (event) => {
        event.preventDefault()
        const loginUser = { email, password }
        const loginRes = await Axios.post("http://localhost:3003/user/login", loginUser
    )
    setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
    })
    localStorage.setItem("auth-token", loginRes.data.token)
    history.push('/')

}
    return (
        <div className="page">
            <h2>Login</h2>
            <form className="form" onSubmit={submit}>
            <label htmlFor="login-email">Email</label>
            <input 
            id="login-email" 
            type="email" 
            onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="login-password">Password</label>
            <input 
            id="login-password" 
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            />

            <input type="submit" value="Login" />
            </form>
        </div>
    )
}

