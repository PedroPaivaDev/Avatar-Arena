import React from 'react';
import styles from './Button.module.css';

const Button = ({label, ...props}) => {
  return (
    <div className={styles.container}>
      <input type='button' className={styles.button} {...props}/>
      <label className={styles.label}>{label}</label>
    </div>
  )
}

export default Button;