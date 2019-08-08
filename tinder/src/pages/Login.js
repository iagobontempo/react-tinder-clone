import React from 'react'
import { Image, Platform } from 'react-native'
import { Container, StyledTextInput, StyledTouchableOpacity, StyledTextLogin } from './loginStyles'

import logo from '../assets/logo.png'

function Login() {
    return (
        // this container is a KeyboardAvoidingView, because IOS dont get the view up for keyboard enter (to digit)
        <Container behavior="padding" enabled={Platform.OS === 'ios'}>
            <Image source={logo}/>

            <StyledTextInput placeholder="Use your GitHub user" autoCapitalize="none" autoCorrect={false}/>

            <StyledTouchableOpacity>

                <StyledTextLogin>Enter</StyledTextLogin>

            </StyledTouchableOpacity>
        </Container>
    )
}

export default Login
