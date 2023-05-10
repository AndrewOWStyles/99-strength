import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar';
import PageRoutes from './components/PageRoutes';

function App() {
  return (
    <Router>
      <div className="w-screen h-screen bg-slate-800">
        <PageRoutes />
        <div className='w-screen fixed bottom-0 left-0 right-0'>
          <NavBar />
        </div>
      </div>
    </Router>
  );
}

export default App;
