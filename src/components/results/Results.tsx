import React, { ReactElement, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux'
import * as ResultActions from '../../actions/results';
import * as ResultSelectors from '../../selectors/results'
import { getTotal, tuttyCode } from '../../common/util/resultsUtil';

import TableRow from './components/TableRow';

import bronze from '../../assets/images/bronze.png'
import silver from '../../assets/images/silver.png'
import gold from '../../assets/images/gold.png'
import './styles/results.scss'

import Firebase from '../../Services/Firebase'

const Results = (): ReactElement => {
    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState(false);
    const [editPassword, setEditPassword] = useState('');

    const danResults = useSelector(ResultSelectors.getDanResults)
    const apolloResults = useSelector(ResultSelectors.getApolloResults)
    const malfResults = useSelector(ResultSelectors.getMalfResults)
    const ryanResults = useSelector(ResultSelectors.getRyanResults)

    useEffect(() => {
        tuttyCode(document, setEditMode)
        axios.get('https://tutty-59261.firebaseio.com/tutty.json').then(res => {
            dispatch(ResultActions.setDanResults(res.data.results[0].week2.dan))
            dispatch(ResultActions.setApolloResults(res.data.results[0].week2.apollo))
            dispatch(ResultActions.setMalfResults(res.data.results[0].week2.malf))
            dispatch(ResultActions.setRyanResults(res.data.results[0].week2.ryan))
        })
    }, [])

    return (
        <div className='resultsPage'>
            {editMode &&
                <div className={`editMode ${editPassword === '$tutty69' && 'success'}`}>
                    <div>PW TO EDIT</div>
                    <input value={editPassword} onChange={(event) => setEditPassword(event.target.value)} />
                    <div onClick={() => { setEditMode(false); setEditPassword('') }}>CLOSE EDIT</div>
                </div>}
            <div className='results'>
                RESULTS
            </div>
            <div className='resultsDescription'>
                Each game played will result with three of the four members of Team Unity stepping onto the podium to receive either a gold, silver, or bronze medal. Gold = 3 points, silver = 2, and bronze = 1. After all weeks of TUTTY have taken place, points will be tallied and the winner takes the crown!
            </div>
            <div className="tableRow">
                <div className="tableCell">Week 2</div>
                <div className="tableCell">Dan</div>
                <div className="tableCell">Apollo</div>
                <div className="tableCell">Malf</div>
                <div className="tableCell">Ryan</div>
            </div>
            <TableRow
                editPassword={editPassword}
                danResults={danResults}
                apolloResults={apolloResults}
                malfResults={malfResults}
                ryanResults={ryanResults}
                game='game1' />
            <TableRow
                editPassword={editPassword}
                danResults={danResults}
                apolloResults={apolloResults}
                malfResults={malfResults}
                ryanResults={ryanResults}
                game='game2' />
            <TableRow
                editPassword={editPassword}
                danResults={danResults}
                apolloResults={apolloResults}
                malfResults={malfResults}
                ryanResults={ryanResults}
                game='game3' />
            <TableRow
                editPassword={editPassword}
                danResults={danResults}
                apolloResults={apolloResults}
                malfResults={malfResults}
                ryanResults={ryanResults}
                game='game4' />
            <div className="tableRow">
                <div className="tableCell">Total</div>
                <div className="tableCell">{getTotal(danResults)}</div>
                <div className="tableCell">{getTotal(apolloResults)}</div>
                <div className="tableCell">{getTotal(malfResults)}</div>
                <div className="tableCell">{getTotal(ryanResults)}</div>
            </div>

            <div className="tableRow marginTop">
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