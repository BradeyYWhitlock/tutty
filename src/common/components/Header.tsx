import React, { ReactElement} from 'react';
import '../styles/main.scss'
import { NavLink } from 'react-router-dom';

const Header = (): ReactElement => {
    return (
        <>
        <div className='header'>
            <NavLink className='navItem' to='/'>HOME</NavLink>
            <NavLink className='navItem' to='/unity'>TEAM UNITY</NavLink>
            <NavLink className='navItem' to='/schedule'>SCHEDULE</NavLink>
            <NavLink className='navItem' to='/results'>RESULTS</NavLink>
        </div>
        <div className='underConstruction'>Website is currently under construction and the designer is stuck in traffic. Please watch your step!</div>
        </>
    )
}

export default Header