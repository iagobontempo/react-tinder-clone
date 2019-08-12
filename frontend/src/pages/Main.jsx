import React, { useEffect, useState } from 'react'; //useEffect calls api when the component is showed on screen
import { Link } from 'react-router-dom'
import io from 'socket.io-client'

import api from '../services/api'

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

import { Container, NoUsers, MatchAvatar, MatchContainer } from './MainStyles';

export default function Main({ match }) {
  const [users, setUsers] = useState([])
  const [matchDev, setMatchDev] = useState(null) ;

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
      })

      setUsers(response.data)
    }
    loadUsers()
  }, [match.params.id])

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: match.params.id }
    });

    socket.on('match', dev => {
      setMatchDev(dev); //after doing this. matchDev its avalible to use his params
    })
  
  }, [match.params.id])

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, { // Second param mus be null, because its used for the body of the request
      headers: { user: match.params.id },
    })

    setUsers(users.filter(user => user._id !== id))
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, { // Second param mus be null, because its used for the body of the request
      headers: { user: match.params.id },
    })

    setUsers(users.filter(user => user._id !== id))
  }

  return (
    <Container>
      <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <img src={user.avatar} alt={user.name} />
              <footer>
                <strong>{user.name}</strong>
                <p>{user.bio}</p>
              </footer>
              <div>
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="dislike" />
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="like" />
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
          <NoUsers>Acabou :(</NoUsers>
        )}

        { matchDev && (
          <MatchContainer>
            <h1>Its a match!</h1>
            <MatchAvatar src={matchDev.avatar} alt=""/>
            <strong>{matchDev.name}</strong>
            <p>{matchDev.bio}</p>
            <button onClick={() => setMatchDev(null)}>Close</button>
          </MatchContainer>
        )}
    </Container>
  );
}
