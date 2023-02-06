import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'components/Button/Button';
import ContentScroll from 'components/ContentScroll/ContentScroll';

const Home = () => {

  const navigate = useNavigate();

  function redirectToGame() {
    navigate('/game')
  }

  return (
    <>
      <ContentScroll>
        <h6>Jogo de estratégia</h6>
        <p>Escolha o seu time analisando os atributos e a habilidade especial de cada personagem.</p>
        <p>As habilidades especiais podem alterar os valores dos seus atributos e/ou do oponente, mas tome cuidado, pois o oponente por fazer o mesmo com você.</p>
      </ContentScroll>
      <div style={{marginTop: '60px', marginLeft: '60px'}}>
        <Button label={localStorage.getItem('playerDeck')?'Retomar Jogo':'Jogar'} onClick={redirectToGame}/>
      </div>
    </>
  )
}

export default Home;