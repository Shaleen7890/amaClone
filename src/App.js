import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout'
import Login from './Login'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}/>
      </Routes>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path='/checkout' element={<Header/>}/>
      </Routes>
      <Routes>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<Header/>}/>
      </Routes>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
