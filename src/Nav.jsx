import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                    <link to="/">Home</link>
                    </li>
                    <li>
                        <link to="/CharacterGen">Character Generator</link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </div>
    )
}

export default Nav;