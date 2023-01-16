import React from 'react';
import styles from 'components/CardSelector/CardFace.module.css';
import Card from 'components/Card/Card';

const CardFace = ({card, playerDeck, setPlayerDeck}) => {

  function handleChange({target}) {
    if (target.checked) {
      setPlayerDeck([...playerDeck, target.value])
    } else {
      setPlayerDeck(playerDeck.filter(char => char !== target.value))
    }
  }

  return (
    <div className={styles.cardFace}>
      <input id={`selector${card.name}`} type='checkbox'
        value={card.name}
        checked={playerDeck.includes(card.name)}
        onChange={handleChange}
      />
      <label htmlFor={`selector${card.name}`} className={styles.label} >
        <Card card={card} disabled={true} className={styles.card}/>        
      </label>
    </div>
  )
}

export default CardFace;