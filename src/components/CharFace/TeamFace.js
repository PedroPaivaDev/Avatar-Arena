import React from 'react';
import styles from './TeamFace.module.css';
import CharFace from './CharFace';

const TeamFace = ({team, card}) => {

  const select = Object.keys(team)

  const card1 = team[select[0]];
  const card2 = team[select[1]];
  const card3 = team[select[2]];

  return (
    <div className={styles.teamFace}>
      <CharFace char={card1} card={card}/>
      <CharFace char={card2} card={card}/>
      <CharFace char={card3} card={card}/>
    </div>
  )
}

export default TeamFace