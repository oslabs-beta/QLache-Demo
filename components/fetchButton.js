import styles from './fetchButton.module.css';
import { useState } from 'react';

const useInput = init => {
  const [value, setValue] = useState(init);
  const onChange = e => {
    setValue(e.target.value ? e.target.value : init);
  };
  const reset = () => {
    setValue(init);
  };
  // return the value with the onChange function instead of setValue function
  return [value, onChange, reset];
};

function FetchButton({ handleClick }) {
  const [value, onChange, reset] = useInput('');
  return (
    <div className={styles.container}>
      <textarea onChange={onChange} value={value} className={styles.query} placeholder='Input query here...'></textarea>
      <button className={styles.button} onClick={() => handleClick(value)}>Fetch Data</button>
    </div>
  );
}

export default FetchButton;