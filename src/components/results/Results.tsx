import React, { ReactElement } from 'react';
import './styles/results.scss'
import bronze from '../../assets/images/bronze.png'
import silver from '../../assets/images/silver.png'
import gold from '../../assets/images/gold.png'

const Results = (): ReactElement => {
    return (
        <div className='resultsPage'>
            <div className='results'>
                RESULTS
            </div>
            <div className='resultsDescription'>
                Each game played will result with three of the four members of Team Unity stepping onto the podium to receive either a gold, silver, or bronze medal. Gold = 3 points, silver = 2, and bronze = 1. After all weeks of TUTTY have taken place, points will be tallied and the winner takes the crown!
            </div>
            <div className="tableRow">
                <div className="tableCell">Week 1</div>
                <div className="tableCell">Dan</div>
                <div className="tableCell">Apollo</div>
                <div className="tableCell">Malf</div>
                <div className="tableCell">Ryan</div>
            </div>
            <div className="tableRow">
                <div className="tableCell">Yahtzee</div>
                <div className="tableCell"><img src={silver} height="65" width="65" /></div>
                <div className="tableCell"></div>
                <div className="tableCell"><img src={bronze} height="65" width="65" /></div>
                <div className="tableCell"><img src={gold} height="65" width="65" /></div>
            </div>
            <div className="tableRow">
                <div className="tableCell">Candyland</div>
                <div className="tableCell"><img src={silver} height="65" width="65" /></div>
                <div className="tableCell"><img src={bronze} height="65" width="65" /></div>
                <div className="tableCell"><img src={gold} height="65" width="65" /></div>
                <div className="tableCell"></div>
            </div>
            <div className="tableRow">
                <div className="tableCell">Scrabble</div>
                <div className="tableCell"></div>
                <div className="tableCell"><img src={silver} height="65" width="65" /></div>
                <div className="tableCell"><img src={bronze} height="65" width="65" /></div>
                <div className="tableCell"><img src={gold} height="65" width="65" /></div>
            </div>
            <div className="tableRow">
                <div className="tableCell">Chutes & Ladders</div>
                <div className="tableCell"></div>
                <div className="tableCell"><img src={silver} height="65" width="65" /></div>
                <div className="tableCell"><img src={gold} height="65" width="65" /></div>
                <div className="tableCell"><img src={bronze} height="65" width="65" /></div>
            </div>
            <div className="tableRow">
                <div className="tableCell">Total</div>
                <div className="tableCell">4</div>
                <div className="tableCell">5</div>
                <div className="tableCell">8</div>
                <div className="tableCell">7</div>
            </div>
        </div>
    )
}

export default Results