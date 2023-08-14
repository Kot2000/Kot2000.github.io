import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/home';
import AppsPage from './pages/apps';
import ContactPage from './pages/contact';

interface PageControllerInterface {}

const PageController:React.FC<PageControllerInterface> = () => {
    return(
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/apps" element={<AppsPage/>} />
                    <Route path="/contact" element={<ContactPage/>} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default PageController