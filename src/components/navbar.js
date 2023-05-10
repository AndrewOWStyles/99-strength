import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const navLinkClasses = 'nav-link font-semibold hover:text-slate-400';

    return (
        <div className="w-full h-14 flex flex-row items-center justify-around bg-slate-600  ">
            <div className='p-2'>
                <NavLink
                    to="/"
                    end
                    className={({ isActive }) => (isActive ? `active ${navLinkClasses}` : navLinkClasses)}
                >
                Home
                </NavLink>
            </div>
            <div className='p-2'>
                <NavLink 
                to="History"
                end
                className={({ isActive }) => (isActive ? `active ${navLinkClasses}` : navLinkClasses)}
                >
                History
                </NavLink>
            </div>
            <div className='p-2'>
                <NavLink 
                to="Workouts"
                end
                className={({ isActive }) => (isActive ? `active ${navLinkClasses}` : navLinkClasses)}
                >
                Workouts
                </NavLink>
            </div>
            <div className='p-2 rounded-md'>
            <NavLink 
                to="Exercises"
                end
                className={({ isActive }) => (isActive ? `active ${navLinkClasses}` : navLinkClasses)}
                >
                Exercises
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;