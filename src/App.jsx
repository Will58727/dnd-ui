import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterGen from './CharacterGen';
import Character from './Character';
import Nav from './Nav';
import Home from './Home'

import './style.css';

function App() {
    return (
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}>
                <Route path='/' element={<Nav />}/>
                <Route path="/CharacterGen" element={<CharacterGen />}/>
                <Route path="/Character" element={<Character />}/>
           </Route>
          </Routes>
        </BrowserRouter>
    )
};
export default App;