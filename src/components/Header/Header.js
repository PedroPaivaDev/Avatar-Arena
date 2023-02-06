import React from 'react';
import styles from './Header.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
      return <button className={styles.game} onClick={resetGame}>Recomeçar</button>
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