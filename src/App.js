import './App.css';
import Axios from './components/Axios/Axios';
import Chart from './components/Chart/Chart';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Pricing></Pricing>
      <Chart></Chart>
      <Axios></Axios>
    </div>
  );
}

export default App;
