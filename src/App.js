
import './App.css';

import React from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App = () => {
  
    return (
    <div>
      <Router>

        <NavBar />
        <Routes>
          
          <Route exact path="/" element={<News key="general"pageSize={4} country="in" category="General"/>} />
          <Route exact path="/Business" element={<News key="business"pageSize={4} country="in" category="Business"/>} />
          <Route exact path="/Entertainment" element={<News key="entertainment"pageSize={4} country="in" category="Entertainment"/>} />
          <Route exact path="/General" element={<News key="general"pageSize={4} country="in" category="General"/>} />
          <Route exact path="/Health" element={<News key="health"pageSize={4} country="in" category="Health"/>} />
          <Route exact path="/Science" element={<News key="science"pageSize={4} country="in" category="Science"/>} />
          <Route exact path="/Sports" element={<News key="sports"pageSize={4} country="in" category="Sports"/>} />
          <Route exact path="/Technology" element={<News key="technology"pageSize={4} country="in" category="Technology"/>} />
        
        </Routes>
      </Router>
      
    </div>
  )

}

export default App;