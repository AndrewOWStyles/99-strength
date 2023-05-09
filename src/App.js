import React from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="w-screen h-screen bg-slate-800">
      <HomeScreen />
      <div className='w-screen fixed bottom-0 left-0 right-0'>
        <NavBar />
      </div>
    </div>
  );
}

export default App;
