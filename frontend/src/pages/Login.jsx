import React from 'react'

import logo from '../assets/logo.svg'
import { Container } from './LoginStyles'

function Login() {
    return (
        <Container>
            <form>
            <img src={logo} alt="logo"/>
                <input placeholder="Enter your Github user" type="text"/>
                <button type="submit" >Submit</button>
            </form>
        </Container>
    )
}

export default Login