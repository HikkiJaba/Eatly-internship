import './App.css';
import Header from './component/Header.js';
import MainHeader from './component/MainHeader.js';
import Features from './component/Features.js';
import Mobile from './component/Mobile.js';
import TopRestaurants from './component/TopRestaurants.js';

function App() {
  return (
    <div className="App">
      <Header />
      <MainHeader />
      <Features />
      <Mobile />
      <TopRestaurants />
    </div>
  );
}

export default App;
