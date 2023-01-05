import React from 'react';
import styles from './Card.module.css';
import Input from '../Input/Input';

const Card = ({card}) => {
  const [action, setAction] = React.useState();
  const [ability, setAbility] = React.useState();

  return (
    <div className={styles.cardFace}>
      <h4 className={styles.title}>{card.name}</h4>
      <img className={styles.gif} src={card.image} alt={card.name}/>
      <div className={styles.actions}>
        <Input
          label='Ataque'
          value={card.attributes.attack}
          option={action}
          setOption={setAction}
          type='radio'
          name='actions'
        />
        <Input
          label='Defesa'
          value={card.attributes.defense}
          option={action}
          setOption={setAction}
          type='radio'
          name='actions'
        />
      </div>
      <Input
        className={styles.ability}
        label={card.ability}
        value=''
        option={ability}
        setOption={setAbility}
        type='checkbox'
      />
    </div>
  )
}

export default Card;