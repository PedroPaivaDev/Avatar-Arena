import React from 'react';
import styles from './CharFace.module.css';
import dead from 'assets/cardsAssets/dead.png'

const CharFace = ({team, char, card}) => {

  function handleOpacity() {
    if(card && card.name === char.name) {
      return {opacity: 0.3};
    } else {
      return null;
    }
  }
  
  function handleLifePoints() {
    if(char.lifePoints < 0) {
      return 0
    } else if(Number.isInteger(char.lifePoints)) {
      return char.lifePoints
    } else {
      return char.lifePoints.toFixed(1)
    }
  }

  return (
    <div className={styles.cardFace} style={handleOpacity()}>
      {char.lifePoints <= 0 &&
        <img className={styles.dead} src={dead} alt='dead'/>
      }
      <img className={`${styles.face} ${team}`} src={char.face} alt={char.name}/>
      <p className={styles.life}>{char.name}:{handleLifePoints()}/10</p>
    </div>
  )
}

export default CharFace;