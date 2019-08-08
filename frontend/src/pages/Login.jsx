import React, { useState } from 'react'

import logo from '../assets/logo.svg'
import { Container } from './LoginStyles'

function Login({ history }) {
    const [ username, setUsername ] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        console.log(username)
        history.push('/main')
    }

    return (
        <Container>
            <form onSubmit={handleSubmit}>
            <img src={logo} alt="logo"/>

                <input placeholder="Enter your Github user" type="text" value={username} 
                    onChange={e => setUsername(e.target.value)}/>

                <button type="submit" >Submit</button>
            </form>
        </Container>
    )
}

export default Login