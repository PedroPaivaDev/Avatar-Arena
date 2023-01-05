import React from 'react';
import styles from './Button.module.css';

const Button = ({...props}) => {
  return (
    <div className={styles.container}>
      <input type='button' className={styles.button} {...props}/>
      <label className={styles.label}>Realizar Movimento .</label>
    </div>
  )
}

export default Button;