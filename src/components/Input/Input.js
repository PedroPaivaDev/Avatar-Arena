import React from 'react';

const Input = ({id, className, label, value, option, setOption, ...props}) => {
  return (
    <>
      <input 
        id={label}
        value={value}
        defaultChecked={option === value}
        onChange={({target}) => setOption(target.value)}
        {...props}
      />
      <label htmlFor={label} className={className}>
        {`${label} ${value}`}
      </label>
    </>
  )
}

export default Input;