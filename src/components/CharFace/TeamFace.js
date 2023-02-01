import React from 'react';
import styles from './TeamFace.module.css';
import CharFace from './CharFace';

const TeamFace = ({team, deck, card}) => {

  const select = Object.keys(deck)

  const card1 = deck[select[0]];
  const card2 = deck[select[1]];
  const card3 = deck[select[2]];

  return (
    <div className={styles.teamFace}>
      <p className={styles.title}>{team}</p>
      <CharFace char={card1} card={card}/>
      <CharFace char={card2} card={card}/>
      <CharFace char={card3} card={card}/>
    </div>
  )
}

export default TeamFace