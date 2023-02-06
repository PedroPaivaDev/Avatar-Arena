import ContentScroll from 'components/ContentScroll/ContentScroll';
import React from 'react';

const About = () => {
  return (
    <ContentScroll>
      <h6></h6>
      <p>Esse é meu primeiro projeto pessoal feito com componentes da biblioteca React e estilizados com CSS puro. Também foi utilizada a biblioteca React-Router-DOM.</p>
      <p>Para conferir o código, clique no ícone do GitHub abaixo:</p>
      <a href='https://github.com/PedroPaivaDev/Avatar-Arena' target='blank'>
        <img src='https://icones.pro/wp-content/uploads/2021/06/icone-github-noir.png' alt='GitHub' width={40} style={{cursor: 'pointer'}}/>
      </a>
    </ContentScroll>    
  )
}

export default About;