import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import LogementDetail from './components/logement-detail/LogementDetail';

const path = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/logement/:id' element={<LogementDetail />} />
                    <Route path='*' element={<Error />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default path;