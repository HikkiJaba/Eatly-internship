import './App.css';
import Header from './component/Header.js';
import MainHeader from './component/MainHeader.js';
import Features from './component/Features.js';
import Mobile from './component/Mobile.js';
import TopRestaurants from './component/TopRestaurants.js';
import TopDishes from './component/TopDishes.js';
import ControlPurchases from './component/ControlPurchases.js';

function App() {
  return (
    <div className="App">
      <Header />
      <MainHeader />
      <Features />
      <Mobile />
      <TopRestaurants />
      <TopDishes />
      <ControlPurchases />
    </div>
  );
}

export default App;
