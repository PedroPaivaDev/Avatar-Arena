import React from 'react';

const useLocalStorage = (key, inicial) => {

  const [state, setState] = React.useState(() => {
    const local = window.localStorage.getItem(key);
    return local ? JSON.parse(local) : inicial;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorage;