import React from 'react';
import styles from './Result.module.css';

const Result = ({result}) => {
  return (
    <div className={`${styles.result} result`}>{result}</div>
  )
}

export default Result;