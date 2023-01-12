import React from 'react';

const useForm = () => {

  const [action, setAction] = React.useState();
  const [ability, setAbility] = React.useState();

  function onChange({target}) {
    setAction(target.value);
  }

  return {action, setAction, ability, setAbility, onChange}
}

export default useForm;