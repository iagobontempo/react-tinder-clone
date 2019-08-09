import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import { View, Text, Image, TouchableOpacity } from 'react-native';

import api from '../services/api'

import logo from '../assets/logo.png'
import like from '../assets/like.png'
import dislike from '../assets/dislike.png'

import { Container, CardContainer, Card, CardImage, CardFooter, NameText, BioText, Logo, ButtonContainer, ActionButton, NoUser } from './mainStyles';

export default function Main({ navigation }) {
  const id = navigation.getParam('user')
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: id,
        }
      })

      setUsers(response.data)
    }
    loadUsers()
  }, [id])

  async function handleLike() {
    const [user, ...rest] = users // Its getting user inside users and passing all other users to "rest"
    // user its the first array and ...rest will be other arrays
    await api.post(`/devs/${user._id}/likes`, null, { // Second param mus be null, because its used for the body of the request
      headers: { user: id },
    })

    setUsers(rest)
  }

  async function handleDislike() {
    const [user, ...rest] = users

    await api.post(`/devs/${user._id}/dislikes`, null, { // Second param mus be null, because its used for the body of the request
      headers: { user: id },
    })

    setUsers(rest)
  }

  async function handleLogout() {
    await AsyncStorage.clear() // Remove the ID logged in (made at login with AsyncStorage)
    navigation.navigate('Login')
  }

  return (
    <Container>
      <TouchableOpacity onPress={handleLogout}>
        <Logo source={logo} />
      </TouchableOpacity>
      <CardContainer>
        {users.length === 0
          ? <NoUser>Acabou :(</NoUser>
          : users.map((user, index) => (
            <Card key={user._id} style={{ zIndex: users.length - index }}>
              <CardImage source={{ uri: user.avatar }} />
              <CardFooter >
                <NameText>{user.name}</NameText>
                <BioText numberOfLines={3}>{user.bio}</BioText>
              </CardFooter>
            </Card>
          ))}
      </CardContainer>

      {users.length > 0 && (
        <ButtonContainer>
          <ActionButton onPress={handleDislike}>
            <Image source={dislike} />
          </ActionButton>
          <ActionButton onPress={handleLike}>
            <Image source={like} />
          </ActionButton>
        </ButtonContainer>
      )}
    </Container>
  );
}
