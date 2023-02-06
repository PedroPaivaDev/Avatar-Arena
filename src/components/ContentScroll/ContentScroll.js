import React from 'react';
import styles from './ContentScroll.module.css';
import scrollOpen from 'assets/scrollOpen.png';

const ContentScroll = ({className, children}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <img className={styles.scroll} src={scrollOpen} alt={'scroll'}/>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default ContentScroll;