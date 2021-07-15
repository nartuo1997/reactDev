import React from 'react'
import './Login.css'

import axios from 'axios'


const Login = (props) => {

    return (
        <div>
            <form>
                <label for="fname">Username</label><br />
                <input type="text" placeholder="username" required onChange /><br />
                <label for="lname">Password</label><br />
                <input type="text" placeholder="password" required onChange></input>
            </form>
            <button onClick>Login</button>
        </div>
    )
}

export default Login
