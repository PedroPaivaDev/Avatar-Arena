import React from 'react';
import styles from 'components/CardSelector/CardFace.module.css';
import cardFrame from 'assets/cardFace.png';

const CardFace = ({cards, card, playerDeck, setPlayerDeck}) => {

  function handleChange({target}) {
    if (target.checked) {
      setPlayerDeck([...playerDeck, target.value])
    } else {
      setPlayerDeck(playerDeck.filter(char => char !== target.value))
    }
  }

  // function handleChange({target}) {
  //   if (target.checked) {
  //     setPlayerDeck([...playerDeck, ...cards.filter(card => 
  //       card.name === [target.value]
  //     )])
  //   } else {
  //     setPlayerDeck(playerDeck.filter(card => 
  //       card !== cards.map(char => char.name === [target.value]
  //     )))
  //   }
  // }

  return (
    <label htmlFor={`selector${card.name}`} className={styles.cardFace}>
      <input id={`selector${card.name}`} type='checkbox'
        value={card.name}
        checked={playerDeck.includes(card.name)}
        onChange={handleChange}
      />
      <h4 className={styles.name}>{card.name}</h4>
      <img className={styles.cardFrame} src={cardFrame} alt='cardFace' />
      <img className={styles.cardGif} src={card.image} alt={card.name} />
    </label>
  )
}

export default CardFace;