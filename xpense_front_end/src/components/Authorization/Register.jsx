import React, {useState} from 'react'
import {useHistory} from "react-router-dom"

export default function Register() {
    const [email, setEmail] = useState()
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [passwordCheck, setPasswordCheck] = useState()

    return (
        <div className="page">
            <h2>Register</h2>
            <label htmlFor="register-email">Email</label>
            <input 
            id="register-email" 
            type="email" 
            onChange={(event) => setEmail(event.target.value)}
            />

            <label htmlFor="register-username">Username</label>
            <input 
            id="register-username" 
            type="text"
            onChange={(event) => setUsername(event.target.value)}
            />

            <label htmlFor="register-password">Password</label>
            <input 
            id="register-password" 
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            />
            <input 
            id="password" 
            placeholder="Verify password" 
            onChange={(event) => setPasswordCheck(event.target.value)}
            />

            <input type="submit" value="Register" />
        </div>
    )
}
