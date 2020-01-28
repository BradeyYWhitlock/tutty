import React, { ReactElement } from 'react';

import { useDispatch } from 'react-redux'

import { rotateMedal, getMedal } from '../../../common/util/resultsUtil';
import { determineResults } from '../../../actions/results';

interface TableRowProps {
    editPassword: string;
    danResults: Record<string, any>;
    apolloResults: Record<string, any>;
    malfResults: Record<string, any>;
    ryanResults: Record<string, any>;
    game: string;
}

const TableRow = (props: TableRowProps): ReactElement => {
    const dispatch = useDispatch()

    return (
        <div className="tableRow">
            <div className="tableCell"></div>
            <div onClick={() => props.editPassword === '$tutty69' && dispatch(determineResults(props.game, rotateMedal(props.danResults[props.game]), 'dan'))} className="tableCell">
                {props.danResults && props.danResults[props.game] && <img src={getMedal(props.danResults[props.game])} height="65" width="65" />}
            </div>
            <div onClick={() => props.editPassword === '$tutty69' && dispatch(determineResults(props.game, rotateMedal(props.apolloResults[props.game]), 'apollo'))} className="tableCell">
                {props.apolloResults && props.apolloResults[props.game] && <img src={getMedal(props.apolloResults[props.game])} height="65" width="65" />}
            </div>
            <div onClick={() => props.editPassword === '$tutty69' && dispatch(determineResults(props.game, rotateMedal(props.malfResults[props.game]), 'malf'))} className="tableCell">
                {props.malfResults && props.malfResults[props.game] && <img src={getMedal(props.malfResults[props.game])} height="65" width="65" />}
            </div>
            <div onClick={() => props.editPassword === '$tutty69' && dispatch(determineResults(props.game, rotateMedal(props.ryanResults[props.game]), 'ryan'))} className="tableCell">
                {props.ryanResults && props.ryanResults[props.game] && <img src={getMedal(props.ryanResults[props.game])} height="65" width="65" />}
            </div>
        </div>
    )
}

export default TableRow