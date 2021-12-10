import './App.css';
import Navbar from './Components/Navbar/navbar';
import HomePage from './Components/pages/Homepage';

function App() {
  return (
    <div className="App">
      <div className="navbar-primary-wrapper">
     <Navbar />
     </div>
     <HomePage/>
    </div>
  );
}

export default App;
