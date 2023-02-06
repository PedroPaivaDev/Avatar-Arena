import React from 'react';
import styles from './Header.module.css';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {

  const {pathname} = useLocation();
  const navigate = useNavigate();

  function resetGame() {
    if(window.confirm('Tem certeza que deseja perder todo o jogo?')){
      localStorage.clear();
      navigate('/');
    } else return
  }

  function handleGameButton() {
    if(pathname==='/game') {
      return <button className={styles.game} onClick={resetGame}>Reset</button>
    } else {
      return <NavLink className={styles.game} activeClassName={styles.activePage} to='game'>{localStorage.getItem('playerDeck')?'Retomar':'Jogar'}</NavLink>
    }
  }

  return (
    <header>
      <nav>
        {handleGameButton()}
        <NavLink className={styles.title} activeClassName={styles.activePage} to='/' end aria-label='Home'>
          Avatar-Arena
        </NavLink>
        <NavLink className={styles.about} activeClassName={styles.activePage} to='about'>
          Sobre
        </NavLink>
      </nav>      
    </header>
  )
}

export default Header;