import React from 'react';
import styles from './Display.module.css';
import cards from '../../service/cards';

import Button from '../Button/Button';
import Result from '../Result/Result';
import Cards from '../Cards/Cards';

const Display = () => {
  const [newCards, setNewCards] = React.useState(null);

  function handleClick() {
    setNewCards(cards)
  }

  //remover estilo de hover e checked da cartaMaquina e aplicar um estilo de border só depois de invocar a função "realizar movimento". Talvez seja preciso fazer outro componente para a cartaMaquina.
  //criar a função "realizar movimento", que verifica as opções marcadas na tela e compara com as seleções aleatórias da máquina.

  return (
    <>
      <div className={styles.cards}>
        {newCards && <Cards cards={newCards}/>}
      </div>
      <div className={styles.resulAndButton}>
        <Result/>
        <Button onClick={handleClick}/>
      </div>
      
    </>
  )
}

export default Display;