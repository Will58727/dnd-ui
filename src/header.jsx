import * as React from 'react';


const Header = ({selectedTeam, teamMemberCount}) => {
    return(
        <header className='container'>
            <div className='row justify-content-center mt-3 mb-4'>
                <div>
                    <h1 className='mt-4 p5 bg-white text-black rounded'>Team member allocation</h1>
                    <h3>{selectedTeam} has {teamMemberCount} members</h3>
                </div>
            </div>
        </header>
    )
}
export default Header