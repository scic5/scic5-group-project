import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import DateComponent from './components/Date/DateComponent';
import BestTourPkg from './components/BestTourPck/BestTourPkg';
import TravelWithUs from './components/WhyTravelWithUs/TravelWithUs';
import Reviews from './components/Reviews/Reviews';
function App() {
  
  return (
    <div>
      <Navbar />
      <Banner />
      <BestTourPkg />
      <TravelWithUs />
      <Reviews />
    </div>
  );
}

export default App;
