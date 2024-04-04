import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideNavBar from '../components/NavBar/navbar';
import Dashboard from '../pages/Dashboard/dashboard';
import About from '../pages/About/about';
import Tasks from '../pages/Tasks/tasks';

const AppRouter: React.FC = () => {
    return (
        <Router>
                <SideNavBar />
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/tasks" element={<Tasks />} />
                        <Route path="/about" element={<About />} />
                    </Routes>
        </Router>
    );
}

export default AppRouter;