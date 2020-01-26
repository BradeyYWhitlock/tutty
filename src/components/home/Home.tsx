import React, { ReactElement} from 'react';
import './styles/home.scss'
import { NavLink } from 'react-router-dom';

const Home = (): ReactElement => {
    return (
        <div className='homePage'>
            <div className='tutty'>
                TUTTY
            </div>
            <div className='homeDescription'>
                TUTTY is the premier tabletop extravaganza brought to you by Team Unity. For the next several Tuesdays, Team Unity will compete in all manner of tabletop games and keep tally of each and every win and loss. Who shall wear the crown when all is said and done?
            </div>
            <div className='homePageLinks'>
                <NavLink to='unity' className='homePageBox'>
                    team unity
                </NavLink>
                <NavLink to='unity' className='homePageBox'>
                    schedule
                </NavLink>
                <NavLink to='unity' className='homePageBox'>
                    results
                </NavLink>
            </div>
        </div>
    )
}

export default Home