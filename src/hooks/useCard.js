import React from 'react';

const useCard = () => {

  const [action, setAction] = React.useState(null);
  const [ability, setAbility] = React.useState(null);
  const [lifePoints, setLifePoints] = React.useState(10);

  // function onChangeAction({target}) {
  //   setAction(target.value);
  // }

  // function onChangeAbility() {
  //   if(target.checked) {
  //     setAbility(Boolean(target.value))
  //   } else {
  //     setAbility(false)
  //   }
  // }

  return {action, setAction, ability, setAbility, lifePoints, setLifePoints}
}

export default useCard;