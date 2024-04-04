import React, { FC } from 'react';
import { NavLink, useMatch } from 'react-router-dom';
import logo from '/logo.png';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPieChart, faRocket, faListUl, faInfoCircle  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SideNavBar: FC = () => {
    return (
        <div className="sidenav hidden lg:block w-full lg:w-64 fixed top-0 left-0 h-full bg-slate-900 overflow-auto">
            <img src={logo} alt="TaskList Logo" className="block mx-auto w-auto h-40 mt-8 mb-8" />
            <hr className="border-t border-gray-600 mx-4" />
            <div className="mx-2">
                <NavLinkObject to="/dashboard" icon={faPieChart}>Overview</NavLinkObject>
                <NavLinkObject to="/goals" icon={faRocket}>Goals</NavLinkObject>
                <NavLinkObject to="/tasks" icon={faListUl}>Tasks</NavLinkObject>
                <NavLinkObject to="/about" icon={faInfoCircle}>About</NavLinkObject>
            </div>
        </div>
    );
}

const NavLinkObject: FC<{ to: string, children: React.ReactNode, icon: IconProp }> = ({ to, children, icon }) => {
    const match = useMatch(to);
    return (
        <NavLink to={to} className={`block mt-2 text-left py-2.5 px-4 w-full rounded transition duration-200 text-white ${match ? 'bg-blue-700 hover:text-white hover:bg-blue-800' : 'hover:text-white hover:bg-blue-800'}`}>
            <FontAwesomeIcon icon={icon} className='mr-2' />
            {children}
        </NavLink>
    );
}
export default SideNavBar;