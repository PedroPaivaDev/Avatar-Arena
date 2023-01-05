import React from 'react';
import Card from '../Card/Card';

const Cards = ({cards}) => {

  function pickUpCard(deck) {
    const card = parseInt(Math.random()*(deck.length))
    return deck[card];
  }
  
  let playerSelection = (parseInt(Math.random()*(cards.length)));

  let playerDeck = [cards[playerSelection]];
  let machineDeck = cards.filter((card) => card !== cards[playerSelection]);

  return (
    <>
      <Card card={pickUpCard(playerDeck)}/>
      <Card card={pickUpCard(machineDeck)}/>
    </>
  )
}

export default Cards;