import NavBar from '../components/navbar';
import BarChart from '../components/barChart';
import FetchButton from '../components/fetchButton';
import EvictionSelect from '../components/evictionSelect';
import { useState } from 'react';

function Demo() {
  const [data, setData] = useState([]);

  function handleClick(value) {
    const thisButton = document.getElementById('fetch');
    thisButton.style.pointerEvents = 'none';
    const container = document.getElementById('text-and-button');
    const startTime = Date.now();
    fetch('/demo-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON'
      },
      body: JSON.stringify({
        query: `{
        country(code: "US") {
          name
        }
      }`,
      }),
    })
      .then((response) => {
        const endTime = Date.now();
        const newData = [...data];
        newData.push(endTime - startTime);
        setData(newData);
        thisButton.style.pointerEvents = 'auto';
        container.style.cursor = 'revert';
      })
      .catch(() => {
        window.alert('error fetching');
        thisButton.style.pointerEvents = 'auto';
        container.style.cursor = 'revert';
      });
    container.style.cursor = 'wait';
  }
  return (
    <>
      <NavBar />
      <div id="content-demo">
        <h1>Look at how fast QLache is!</h1>
        {/* <EvictionSelect /> */}
        <div id="demo">
          <div className="column">
            <FetchButton handleClick={handleClick} />
          </div>
          <div className="column">
            <BarChart data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Demo;
