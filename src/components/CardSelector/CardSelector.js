import React from 'react';
import styles from './CardSelector.module.css'
import CardFace from './CardFace';

const CardSelector = ({cards, ...props}) => {
  return (
    <div className={styles.cardSelector}>
      {cards.map(card => <CardFace key={card.name} card={card} cards={cards} {...props}/>)}
    </div>
  )
}

export default CardSelector;