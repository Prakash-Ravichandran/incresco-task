import './App.css';
import Navbar from './Components/Navbar/navbar';
import HomePage from './Components/pages/HomePage';
import { Provider } from "react-redux";
import { createStore } from "redux";
import  Reducer from '../src/Components/Redux/Reducer';

const store = createStore(Reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <div className="navbar-primary-wrapper">
     <Navbar />
     </div>
     <HomePage/>
     </Provider>
    </div>
  );
}

export default App;
