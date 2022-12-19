import NavBar from '../components/navbar';
import BarChart from '../components/barChart';

function Demo() {
  function click() {
    console.log('spaghetti');
    fetch('/demo-request')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  return (
    <>
      <NavBar />
      <div id="content">
        <h1>Look at how fast QLache is!</h1>
        <BarChart />
        <button onClick={click}>click me</button>
      </div>
    </>
  );
}

export default Demo;
