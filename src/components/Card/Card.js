import React from 'react';
import styles from './Card.module.css';
import cards from '../../service/cards';
import Input from '../Input/Input';

const selectedCard = cards[0];

const Card = () => {
  const [option, setOption] = React.useState();

  return (
    <div className={styles.cardFace}>
      <h4 className={styles.title}>{selectedCard.name}</h4>
      <img className={styles.gif} src={selectedCard.image} alt={selectedCard.name}/>
      <div className={styles.actions}>
        <Input
          label='Ataque'
          value={selectedCard.attributes.attack}
          option={option}
          setOption={setOption}
          type='radio'
        />
        <Input
          label='Defesa'
          value={selectedCard.attributes.defense}
          option={option}
          setOption={setOption}
          type='radio'
        />
      </div>
      <p className={styles.ability}>{selectedCard.ability}</p>
    </div>
  )
}

export default Card;