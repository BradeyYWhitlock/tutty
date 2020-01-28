import React, { ReactElement, useEffect, useState } from 'react';
import './styles/results.scss'
import { useSelector, useDispatch } from 'react-redux'
import * as ResultActions from '../../actions/results';
import * as ResultSelectors from '../../selectors/results'
import axios from 'axios';
import bronze from '../../assets/images/bronze.png'
import silver from '../../assets/images/silver.png'
import gold from '../../assets/images/gold.png'

import Firebase from '../../Services/Firebase'

const Results = (): ReactElement => {

    const dispatch = useDispatch()
    const danResults = useSelector(ResultSelectors.getDanResults)
    const apolloResults = useSelector(ResultSelectors.getApolloResults)
    const malfResults = useSelector(ResultSelectors.getMalfResults)
    const ryanResults = useSelector(ResultSelectors.getRyanResults)

    useEffect(() => {
        var allowedKeys = {
            84: 't',
            85: 'u',
            89: 'y'
        };
        var tuttyCode = ['t', 'u', 't', 't', 'y'];
        var tuttyCodePosition = 0;

        document.addEventListener('keydown', function (e) {
            var key = allowedKeys[e.keyCode];
            var requiredKey = tuttyCode[tuttyCodePosition];
            if (key == requiredKey) {
                tuttyCodePosition++;
                if (tuttyCodePosition == tuttyCode.length) {
                    setEditMode(true)
                    tuttyCodePosition = 0;
                }
            } else {
                tuttyCodePosition = 0;
            }
        });

        //CREATE NEW WEEK UNTIL FUNCTIONALLITY ADDED
        // (Firebase as any).database.ref('tutty/results/0/week2/').set({
        //     "apollo": {
        //         "game1": "",
        //         "game2": "",
        //         "game3": "",
        //         "game4": ""
        //     },
        //     "dan": {
        //         "game1": "",
        //         "game2": "",
        //         "game3": "",
        //         "game4": ""
        //     },
        //     "malf": {
        //         "game1": "",
        //         "game2": "",
        //         "game3": "",
        //         "game4": ""
        //     },
        //     "ryan": {
        //         "game1": "",
        //         "game2": "",
        //         "game3": "",
        //         "game4": ""
        //     }
        // })

        axios.get('https://tutty-59261.firebaseio.com/tutty.json').then(res => {
            dispatch(ResultActions.setDanResults(res.data.results[0].week2.dan))
            dispatch(ResultActions.setApolloResults(res.data.results[0].week2.apollo))
            dispatch(ResultActions.setMalfResults(res.data.results[0].week2.malf))
            dispatch(ResultActions.setRyanResults(res.data.results[0].week2.ryan))
        })
    }, [])


    const [editMode, setEditMode] = useState(false);
    const [editPassword, setEditPassword] = useState('');

    const getMedal = (type: string) => {
        if (type === 'bronze') {
            return bronze
        } else if (type === 'silver') {
            return silver
        } else if (type === 'gold') {
            return gold
        }
    }

    const rotateMedal = (type: string) => {
        switch (type) {
            case 'bronze':
                return 'silver'
            case 'silver':
                return 'gold'
            case 'gold':
                return ''
            default:
                return 'bronze';
        }
    }

    const medalValue = (medal: string) => {
        switch (medal) {
            case 'bronze':
                return 1
            case 'silver':
                return 2
            case 'gold':
                return 3
            default:
                return 0;
        }
    }

    const getTotal = (member: any) => {
        var total = 0;
        total += medalValue(member['game1'])
        total += medalValue(member['game2'])
        total += medalValue(member['game3'])
        total += medalValue(member['game4'])
        return total
    }

    return (
        <div className='resultsPage'>
            {editMode &&
                <div className='editMode'>
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
            <div className="tableRow">
                <div className="tableCell"></div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game1', rotateMedal(danResults.game1), 'dan'))} className="tableCell">
                    {danResults && danResults.game1 && <img src={getMedal(danResults.game1)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game1', rotateMedal(apolloResults.game1), 'apollo'))} className="tableCell">
                    {apolloResults && apolloResults.game1 && <img src={getMedal(apolloResults.game1)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game1', rotateMedal(malfResults.game1), 'malf'))} className="tableCell">
                    {malfResults && malfResults.game1 && <img src={getMedal(malfResults.game1)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game1', rotateMedal(ryanResults.game1), 'ryan'))} className="tableCell">
                    {ryanResults && ryanResults.game1 && <img src={getMedal(ryanResults.game1)} height="65" width="65" />}
                </div>
            </div>
            <div className="tableRow">
                <div className="tableCell"></div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game2', rotateMedal(danResults.game2), 'dan'))} className="tableCell">
                    {danResults && danResults.game2 && <img src={getMedal(danResults.game2)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game2', rotateMedal(apolloResults.game2), 'apollo'))} className="tableCell">
                    {apolloResults && apolloResults.game2 && <img src={getMedal(apolloResults.game2)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game2', rotateMedal(malfResults.game2), 'malf'))} className="tableCell">
                    {malfResults && malfResults.game2 && <img src={getMedal(malfResults.game2)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game2', rotateMedal(ryanResults.game2), 'ryan'))} className="tableCell">
                    {ryanResults && ryanResults.game2 && <img src={getMedal(ryanResults.game2)} height="65" width="65" />}
                </div>
            </div>
            <div className="tableRow">
                <div className="tableCell"></div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game3', rotateMedal(danResults.game3), 'dan'))} className="tableCell">
                    {danResults && danResults.game3 && <img src={getMedal(danResults.game3)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game3', rotateMedal(apolloResults.game3), 'apollo'))} className="tableCell">
                    {apolloResults && apolloResults.game3 && <img src={getMedal(apolloResults.game3)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game3', rotateMedal(malfResults.game3), 'malf'))} className="tableCell">
                    {malfResults && malfResults.game3 && <img src={getMedal(malfResults.game3)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game3', rotateMedal(ryanResults.game3), 'ryan'))} className="tableCell">
                    {ryanResults && ryanResults.game3 && <img src={getMedal(ryanResults.game3)} height="65" width="65" />}
                </div>
            </div>
            <div className="tableRow">
                <div className="tableCell"></div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game4', rotateMedal(danResults.game4), 'dan'))} className="tableCell">
                    {danResults && danResults.game4 && <img src={getMedal(danResults.game4)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game4', rotateMedal(apolloResults.game4), 'apollo'))} className="tableCell">
                    {apolloResults && apolloResults.game4 && <img src={getMedal(apolloResults.game4)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game4', rotateMedal(malfResults.game4), 'malf'))} className="tableCell">
                    {malfResults && malfResults.game4 && <img src={getMedal(malfResults.game4)} height="65" width="65" />}
                </div>
                <div onClick={() => editPassword === '1234' && dispatch(ResultActions.determineResults('game4', rotateMedal(ryanResults.game4), 'ryan'))} className="tableCell">
                    {ryanResults && ryanResults.game4 && <img src={getMedal(ryanResults.game4)} height="65" width="65" />}
                </div>
            </div>
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