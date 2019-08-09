import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import { Image, Platform } from 'react-native'
import { Container, StyledTextInput, StyledTouchableOpacity, StyledTextLogin } from './loginStyles'

import api from '../services/api'

import logo from '../assets/logo.png'

function Login({ navigation } ) {
    const [ user, setUser ] = useState('')

    // THIS TRACK IF USER ALREADY LOGGED , useEffect send a function when some variables change
    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if(user) {
                navigation.navigate('Main', { user })
            }
        })
    }, []) // (variable) letting the array empty, the useEffect will only execute 1 time (when the component is shown)

    async function handleLogin() {
        const response = await api.post('/devs', { username: user }) // getting username on api and transforming to user

        const { _id } = response.data // getting the _id on response.data (mongo always sends into data prop)

        await AsyncStorage.setItem('user', _id) // Make the user keep logged in

        navigation.navigate('Main', { user: _id })
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
