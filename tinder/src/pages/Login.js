import React, { useState } from 'react'
import { Image, Platform } from 'react-native'
import { Container, StyledTextInput, StyledTouchableOpacity, StyledTextLogin } from './loginStyles'

import api from '../services/api'

import logo from '../assets/logo.png'

function Login({ navigation } ) {
    const [ user, setUser ] = useState('')

    async function handleLogin() {
        const response = await api.post('/devs', { username: user }) // getting username on api and transforming to user

        const { _id } = response.data // getting the _id on response.data (mongo always sends into data prop)

        console.log(_id)
        
        navigation.navigate('Main', { _id })
    }

    return (
        // this container is a KeyboardAvoidingView, because IOS dont get the view up for keyboard enter (to digit)
        <Container behavior="padding" enabled={Platform.OS === 'ios'}>
            <Image source={logo}/>

            <StyledTextInput 
                placeholder="Use your GitHub user" 
                autoCapitalize="none" 
                autoCorrect={false}
                value={user}
                onChangeText={setUser}/>

            <StyledTouchableOpacity onPress={handleLogin}>

                <StyledTextLogin>Enter</StyledTextLogin>

            </StyledTouchableOpacity>
        </Container>
    )
}

export default Login
