import Input from 'components/Input/Input';
import React from 'react';
import styles from './Card.module.css';

const Card = ({card, id, disabled, action, setAction, ability, setAbility}) => {

  return (
    <div className={styles.cardFace} id={card.name}>
      <h6 className={styles.subtitle}>{id}</h6>
      <h4 className={styles.title}>{card.name}</h4>
      <img className={styles.gif} src={card.image} alt={card.name}/>
      <div className={styles.actions}>
        <Input
          options={card.attributes}
          state={action}
          setState={setAction}
          type='radio'
          disabled={disabled}
          name={card.name}
        />
      </div>
      <input
        id={`${card.name}Ability`}
        disabled={disabled}
        value={true}
        checked={ability===true}
        onChange={({target}) => target.checked ? setAbility(Boolean(target.value)) : setAbility(false)}
        type='checkbox'
      />
      <label htmlFor={`${card.name}Ability`} className={styles.ability}>{card.ability}</label>
    </div>
  )
}

export default Card;