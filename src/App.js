import './App.css';
import Header from './Header'
import Checkout from './Checkout'
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"


function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
    </Router>
    
  );
}

export default App;
