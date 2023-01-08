import React from 'react';
import styles from './Button.module.css';
import scroll from 'assets/scrollClosed.png';

const Button = ({scrollOpen, label, ...props}) => {
  
  React.useEffect(() => {
    setTimeout (() => {
      document.querySelector('.labelBtn').classList.remove('strech')
    }, 1000);
  },[label])

  return (
    <div className={styles.container}>
      <label className={`${styles.label} strech labelBtn`}>{label}</label>
      <input type='button' className={styles.button} {...props}/>
      {!scrollOpen && <img className={styles.scrollClosed} src={scroll} alt='scrollClosed'/>}
    </div>
  )
}

export default Button;