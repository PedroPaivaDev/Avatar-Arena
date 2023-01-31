import React from 'react';
import styles from './CharFace.module.css';
// import cardFrame from 'assets/cardFace.png';

const CharFace = ({char}) => {
  return (
    <div className={styles.cardFace}>
      {/* <img className={styles.cardFrame} src={cardFrame} alt='cardFrame' /> */}
      <img className={styles.face} src={char.face} alt={char.name}/>
      <p className={styles.life}>Vida: {char.lifePoints<0 ? 0 : char.lifePoints}/10</p>
    </div>
  )
}

export default CharFace;