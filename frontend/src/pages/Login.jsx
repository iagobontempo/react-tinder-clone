import React, { useState } from 'react'

import api from '../services/api'

import logo from '../assets/logo.svg'
import { Container } from './LoginStyles'

function Login({ history }) {
    const [ username, setUsername ] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const response = await api.post('/devs', {
            username: username,
        })

        const { _id } = response.data

        history.push(`/dev/${_id}`)
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