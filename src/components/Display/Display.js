import React from 'react';
import styles from './Display.module.css';
import cards from '../../service/cards';

import Button from '../Button/Button';
import Result from '../Result/Result';
import Card from '../Card/Card';

const Display = () => {
  const [slide, setSlide] = React.useState('Sortear Carta');
  // const [playerDeck, setPlayerDeck] = React.useState();
  // const [machineDeck, setMachineDeck] = React.useState();

  const [playerCard, setPlayerCard] = React.useState();
  const [machineCard, setMachineCard] = React.useState();

  function pickUpCard(deck) {
    const card = parseInt(Math.random()*(deck.length))
    return deck[card];
  }

  function showCards() {
    const playerSelection = (parseInt(Math.random()*(cards.length)));
    const playerDeck=([cards[playerSelection]]);
    const machineDeck=(cards.filter((card) => card !== cards[playerSelection]))

    setPlayerCard(pickUpCard(playerDeck))
    setMachineCard(pickUpCard(machineDeck))

    setSlide('Realizar Movimento')
  }

  function showResult() {
    const randomAction = parseInt(Math.random() * 2);
    const atack = document.getElementById(`${machineCard.name}Ataque`);
    const defense = document.getElementById(`${machineCard.name}Defesa`);
    randomAction===1 ? atack.checked=true : defense.checked=true;

    const randomAbility = parseInt(Math.random() * 2);
    const ability=document.getElementById(machineCard.name+machineCard.ability);
    randomAbility===1 && (ability.checked=true);
  }

  function handleClick() {
    if(slide==='Sortear Carta') return showCards()
    if(slide==='Realizar Movimento') return showResult()
  }

  // (document.getElementById(`${machineCard.name}`).checked=true)
  //criar a função "realizar movimento", que verifica as opções marcadas na tela e compara com as seleções aleatórias da máquina.

  return (
    <>
      <div className={styles.cards}>
        {playerCard && machineCard &&
          <>
            <Card id='Jogador' card={playerCard}/>
            <Card id='Oponente' disabled card={machineCard}/>
          </>
        }
      </div>
      <div className={styles.resulAndButton}>
        <Result/>
        <Button label={slide} onClick={handleClick}/>
      </div>
      
    </>
  )
}

export default Display;