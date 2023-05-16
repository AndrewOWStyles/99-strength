import { Route, Routes } from 'react-router-dom';
import HomeScreen from './pages/HomeScreen';
import History from './pages/History';
import Workouts from './pages/Workouts';
import Exercises from './pages/Exercises';

function PageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/History" element={<History />} />
      <Route path="/Workouts" element={<Workouts />} />
      <Route path="/Exercises" element={<Exercises />} />
    </Routes>
  );
}

export default PageRoutes;

