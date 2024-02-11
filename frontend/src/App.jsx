import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Navbar} from './components/Navbar';
import Sharepage from './components/Sharepage';
import Downloadpage from './components/Downloadpage';


const App = () => {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Sharepage />} />
          <Route path="/downloadfile" element={<Downloadpage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;