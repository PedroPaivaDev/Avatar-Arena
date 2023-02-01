import React from 'react';
import styles from './CharFace.module.css';
import dead from 'assets/cardsAssets/dead.png'

const CharFace = ({char, card}) => {

  function handleOpacity() {
    if(card && (card.name === char.name || card.lifePoints < 0)) {
      return {opacity: 0.5};
    } else {
      return null;
    }
  }

  return (
    <div className={styles.cardFace} style={handleOpacity()}>
      {char.lifePoints < 0 &&
        <img className={styles.dead} src={dead} alt='dead'/>
      }
      <img className={styles.face} src={char.face} alt={char.name}/>
      <p className={styles.life}>Vida: {char.lifePoints<0 ? 0 : char.lifePoints}/10</p>
    </div>
  )
}

export default CharFace;