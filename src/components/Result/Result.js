import React from 'react';
import styles from './Result.module.css';
import scrollOpen from 'assets/scrollOpen.png';

const Result = ({result, machineAbility}) => {
  return (
    <div className={`${styles.result} result`}>
      <img src={scrollOpen} alt='ScrollOpen' />
      <p>
        {result}
        <br/><br/>
        {/* {machineAbility && 'O oponente usou o efeito especial.'} */}
      </p>
    </div>
  )
}

export default Result;