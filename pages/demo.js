import NavBar from '../components/navbar';
import BarChart from '../components/barChart';

function Demo() {
  return (
    <>
      <NavBar />
      <div id="content">
        <h1>Look at how fast QLache is!</h1>
        <BarChart />
      </div>
    </>
  );
}

export default Demo;
