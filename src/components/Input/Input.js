import React from 'react';

const Input = ({className, label, value, state, setState, disabled, name, ...props}) => {
  return (
    <>
      <input 
        disabled={disabled}
        id={`${name + label}`}
        value={value}
        // defaultChecked={state === value}
        onChange={({target}) => setState(target.value)}
        name={name}
        {...props}
      />
      <label htmlFor={`${name + label}`} className={className}>
        {`${label} ${value}`}
      </label>
    </>
  )
}

export default Input;