import React from 'react';

const Input = ({options, state, setState, disabled, name, className, ...props}) => {
  return (
    <>
      {Object.keys(options).map(option => 
        <React.Fragment key={`${name + option}`}>
          <input 
            id={`${name + option}`}
            value={option}
            checked={state === option}
            onChange={({target}) => setState(target.value)}
            disabled={disabled}
            {...props}
          />
          <label htmlFor={`${name + option}`} className={className}>
            {`${option} ${options[option]}`}
          </label>
        </React.Fragment>
      )}
    </>
  )
}

export default Input;