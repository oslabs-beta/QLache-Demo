import styles from './evictionSelect.module.css'

function EvictionSelect(props) {
  return (
    <div className={styles.outerContainer}>
      <h2 className={styles.label}>Choose an eviction method:</h2>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>LRU</button>
        <button className={styles.button}>LFU</button>
        <button className={styles.button}>MRU</button>
      </div>
    </div>
  );
}

export default EvictionSelect;