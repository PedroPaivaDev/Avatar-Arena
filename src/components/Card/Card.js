import Input from 'components/Input/Input';
import React from 'react';
import styles from './Card.module.css';

const Card = ({card, id, disabled, action, setAction}) => {
  // const [ability, setAbility] = React.useState();

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
      {/* <Input
        disabled={disabled}
        className={styles.ability}
        label={card.ability}
        value=''
        state={ability}
        setState={setAbility}
        type='checkbox'
        name={card.name}
      /> */}
    </div>
  )
}

export default Card;