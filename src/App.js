
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Containers/Home/Home';
import Register from './Containers/Register/Register';
import Profile from './Containers/Profile/Profile';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/> }/>
          <Route path="/register" element={<Register/> }/>
          <Route path="/profile" element={<Profile/> }/>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
