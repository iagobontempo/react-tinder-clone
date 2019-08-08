import React from 'react';

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

import { Container } from './MainStyles';

export default function Main({ match }) {
  return (
    <Container>
       <img src={logo} alt="logo"/>
       <ul>
         <li>
           <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="avatar"/>
           <footer>
             <strong>Filipe Deschamps</strong>
             <p>Progamador e cantor sertanejo nos tempos livres</p>
           </footer>
           <div>
             <button type="button">
               <img src={dislike} alt="dislike"/>
             </button>
             <button type="button">
               <img src={like} alt="like"/>
             </button>
           </div>
          </li>

          <li>
           <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="avatar"/>
           <footer>
             <strong>Filipe Deschamps</strong>
             <p>Progamador e cantor sertanejo nos tempos livres</p>
           </footer>
           <div>
             <button type="button">
               <img src={dislike} alt="dislike"/>
             </button>
             <button type="button">
               <img src={like} alt="like"/>
             </button>
           </div>
          </li>

          <li>
           <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="avatar"/>
           <footer>
             <strong>Filipe Deschamps</strong>
             <p>Progamador e cantor sertanejo nos tempos livres</p>
           </footer>
           <div>
             <button type="button">
               <img src={dislike} alt="dislike"/>
             </button>
             <button type="button">
               <img src={like} alt="like"/>
             </button>
           </div>
          </li>

          <li>
           <img src="https://avatars0.githubusercontent.com/u/4248081?v=4" alt="avatar"/>
           <footer>
             <strong>Filipe Deschamps</strong>
             <p>Progamador e cantor sertanejo nos tempos livres</p>
           </footer>
           <div>
             <button type="button">
               <img src={dislike} alt="dislike"/>
             </button>
             <button type="button">
               <img src={like} alt="like"/>
             </button>
           </div>
          </li>
       </ul>
        <h1>{match.params.id}</h1>
    </Container>
  );
}
