import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import DateComponent from './components/Date/DateComponent';
import BestTourPkg from './components/BestTourPck/BestTourPkg';
function App() {
  
  return (
    <div>
      <Navbar />
      <Banner />
      <BestTourPkg />
    </div>
  );
}

export default App;
