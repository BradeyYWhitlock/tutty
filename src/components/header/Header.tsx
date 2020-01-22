import React, { ReactElement } from 'react';
import './styles/header.scss'
import { NavLink } from 'react-router-dom';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = (): ReactElement => {
    return (
        <div className='header'>
            <NavLink to='/projects' className='headerItem'>
                Projects
            </NavLink>
            <NavLink to='/skills' className='headerItem'>
                Skills
            </NavLink>
        </div>
    )
}

export default Header