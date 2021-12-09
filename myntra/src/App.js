import './App.css';
import Navbar from './Components/Navbar/navbar';
import HomePage from './Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <div className="navbar-primary-wrapper">
     <Navbar />
     </div>
     <HomePage />
    </div>
  );
}

export default App;
