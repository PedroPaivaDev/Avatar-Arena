import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to='game'>Jogar</Link>
        <Link className={styles.title} to='/' aria-label='Home'>Avatar-Arena</Link>
        <Link to='about'>Sobre</Link>
      </nav>      
    </header>
  )
}

export default Header;