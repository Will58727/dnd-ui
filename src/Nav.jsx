import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className='navBar'>
            <nav>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/CharacterGen">Character Generator</Link>
            </nav>
            <Outlet/>
        </div>
    )
}

export default Nav;