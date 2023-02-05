import React from 'react';
import styles from './Header.module.css';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {

  const {pathname} = useLocation();

  function handleGameButton() {
    if(pathname==='/game') {
      return <button className={styles.game}>Reset</button>
    } else {
      return <Link className={styles.game} to='game'>Jogar</Link>
    }
  }

  return (
    <header>
      <nav>
        {handleGameButton()}
        <Link className={styles.title} to='/' aria-label='Home'>Avatar-Arena</Link>
        <Link className={styles.about} to='about'>Sobre</Link>
      </nav>      
    </header>
  )
}

export default Header;