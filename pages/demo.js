import NavBar from '../components/navbar';
import BarChart from '../components/barChart';
import FetchButton from '../components/fetchButton';
import EvictionSelect from '../components/evictionSelect';
import { useState } from 'react';
import Head from 'next/head';

function Demo() {
  const [data, setData] = useState([]);
  const [used, setUsed] = useState(false);

  function handleClick() {
    const thisButton = document.getElementById('fetch');
    thisButton.style.pointerEvents = 'none';
    const container = document.getElementById('text-and-button');
    fetch('/api/demo-request', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
      },
      body: JSON.stringify({
        used,
      }),
    })
      .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        const newData = [...data];
        newData.push(response.time);
        setData(newData);
        setUsed(true);
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
      <Head>
        <title>QLache Demo</title>
        <link rel="icon" href="/pink-logo.svg"></link>
      </Head>
      <NavBar />
      <div id="content-demo">
        <h1>QLache Caching Demo</h1>
        <div id="demo">
          <div className="column">
            <h2>
              Click the button below to simulate sending a request to a GraphQL
              API using the QLache package.
            </h2>
            <h2>
              See how further requests have significantly quicker response times
              due to query caching.
            </h2>
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
