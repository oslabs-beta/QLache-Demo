import styles from './fetchButton.module.css';
import { useState } from 'react';

function FetchButton({ handleClick }) {
  return (
    <div id="text-and-button" className={styles.container}>
      <button
        id="fetch"
        className={styles.button}
        onClick={(e) => handleClick(e)}
      >
        Fetch Data
      </button>
    </div>
  );
}

export default FetchButton;
