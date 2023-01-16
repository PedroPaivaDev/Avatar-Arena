import React from 'react';
import styles from 'components/CardSelector/CardFace.module.css';
import cardFrame from 'assets/cardFace.png';
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
        <h4 className={styles.name}>{card.name}</h4>
        <img className={styles.cardFrame} src={cardFrame} alt='cardFace' />
        <Card card={card} disabled={true}/>        
      </label>
    </div>
  )
}

export default CardFace;