import logo from './logo.svg';
import './App.css';
import Home from "./components/home"
import Products from "./components/products"
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom'
import SecondPage from './components/SecondPage';

function App() {
  return (
    <Router>
          <Routes >
             <Route path='/' element={<Home />}></Route> 
             <Route path='/products' element={<SecondPage/>}></Route> 
          </Routes>
      </Router>
  );
}

export default App;
