import React from 'react';

const Input = ({label, value, option, setOption, ...props}) => {
  return (
    <label>
      <input
        value={value}
        checked={value === option}
        onChange={({target}) => console.log(target.value)}
        {...props}
      />
      <span>{`${label} ${value}`}</span>
    </label>
  )
}

export default Input;