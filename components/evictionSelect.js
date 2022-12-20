import styles from './evictionSelect.module.css'

function EvictionSelect(props) {
  return (
    <div>
      <h2>Choose an eviction method:</h2>
      <div className={styles.buttonContainer}>
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}