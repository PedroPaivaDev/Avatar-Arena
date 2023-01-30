import React from 'react';
import styles from './CardSelector.module.css'
import CardFrame from './CardFrame';

const CardSelector = ({cards, ...props}) => {
  return (
    <div className={styles.cardSelector}>
      {cards.map(card => <CardFrame key={card.name} card={card} {...props}/>)}
    </div>
  )
}

export default CardSelector;