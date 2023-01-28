import Input from 'components/Input/Input';
import React from 'react';
import styles from './Card.module.css';
import cardFrame from 'assets/cardFace.png';

const Card = ({card, id, disabled, action, setAction, ability, setAbility, className}) => {

  return (
    <div className={`${styles.cardFace} ${className}`} id={card.name}>
      <img className={styles.cardFrame} src={cardFrame} alt='cardFace' />
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
      {/* <p className={styles.life}>Vida: {lifePoints}/10</p> */}
    </div>
  )
}

export default Card;