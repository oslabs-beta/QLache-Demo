import NavBar from '../components/navbar';
import BarChart from '../components/barChart';
import FetchButton from '../components/fetchButton';
import {useState} from 'react';

function Demo() {
  const [data, setData] = useState([]);

  function handleClick(value) {
    const startTime = Date.now();
    fetch('https://swapi.dev/api/people/1')
      .then((response) => {
        const endTime = Date.now();
        const newData = [...data];
        newData.push(endTime - startTime);
        setData(newData);
      })
      .catch(()=> {
        window.alert('error fetching');
      });
    console.log(value);
  }
  return (
    <>
      <NavBar />
      <div id="content">
        <h1>Look at how fast QLache is!</h1>
        <div id="demo">
          <FetchButton handleClick={handleClick}/>
          <BarChart data={data}/>
        </div>
      </div>
    </>
  );
}

export default Demo;
