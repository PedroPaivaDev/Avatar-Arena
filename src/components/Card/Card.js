import React from 'react';
import styles from './Card.module.css';
import Input from '../Input/Input';

const Card = ({card, id, disabled}) => {
  const [action, setAction] = React.useState();
  const [ability, setAbility] = React.useState();

  return (
    <div className={styles.cardFace} id={card.name}>
      <h6 className={styles.subtitle}>{id}</h6>
      <h4 className={styles.title}>{card.name}</h4>
      <img className={styles.gif} src={card.image} alt={card.name}/>
      <div className={styles.actions}>
        <Input
          disabled={disabled}
          label='Ataque'
          value={card.attributes.attack}
          state={action}
          setState={setAction}
          type='radio'
          name={card.name}
        />
        <Input
          disabled={disabled}
          label='Defesa'
          value={card.attributes.defense}
          state={action}
          setState={setAction}
          type='radio'
          name={card.name}
        />
      </div>
      <Input
        disabled={disabled}
        className={styles.ability}
        label={card.ability}
        value=''
        state={ability}
        setState={setAbility}
        type='checkbox'
        name={card.name}
      />
    </div>
  )
}

export default Card;