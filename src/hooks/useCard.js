import React from 'react';
import useLocalStorage from './useLocalStorage';

const useCard = (user) => {

  const [card, setCard] = useLocalStorage(`card${user}`, null);
  const [action, setAction] = React.useState(null);
  const [ability, setAbility] = React.useState(null);

  return {card, setCard, action, setAction, ability, setAbility}
}

export default useCard;