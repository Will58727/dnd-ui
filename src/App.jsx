import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharacterGen from './CharacterGen';
import Character from './Character'
import './style.css';

function App() {
    return (
      <div className="wrapper">
        <h1>DnD.ui</h1>
            <nav>
                <ul>
                    <li><a href="/CharacterGen">Character generator</a></li>
                    <li><a href="/Logic">Logic</a></li>
                    <li><a href="/Character">Character</a></li>
                </ul>
            </nav>
        <BrowserRouter>
          <Routes>
            <Route path="/CharacterGen">
              <CharacterGen />
            </Route>

            <Route path="/Character">
              <Character />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    )
};
export default App;