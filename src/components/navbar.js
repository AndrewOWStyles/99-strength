import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLinkStyle = ({ to, children }) => {
  const navLinkClasses = 'nav-link font-semibold hover:text-slate-400';

  return (
    <div className="p-2">
      <motion.div 
      whileHover={{ scale:1.2 }}
      whileTap={{ scale: 1.2 }}>
        <NavLink
          to={to}
          end
          className={({ isActive }) => (isActive ? `active ${navLinkClasses}` : navLinkClasses)}
        >
          {children}
        </NavLink>
      </motion.div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="w-full h-14 flex flex-row items-center justify-around bg-slate-600  ">
      <NavLinkStyle to="/">Home</NavLinkStyle>
      <NavLinkStyle to="History">History</NavLinkStyle>
      <NavLinkStyle to="Workouts">Workouts</NavLinkStyle>
      <NavLinkStyle to="Exercises">Exercises</NavLinkStyle>
    </div>
  );
};

export default NavBar;
