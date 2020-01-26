import React, { ReactElement } from 'react';
import './styles/schedule.scss'

const Schedule = (): ReactElement => {
    return (
        <div className='schedulePage'>
            <div className='schedule'>
                SCHEDULE
            </div>
            <div className='scheduleDescription'>
                Every Tuesday starting at 4:30 PM PST / 7:30 PM EST, TUTTY will commence the ceremonies by cracking open a cold one and dousing the eternal flame. Be there to cheer and chant as Team Unity competes against each other!
            </div>
            <div className="tableRowSchedule">
                <div className="tableCellSchedule topLeft removeTop"></div>
                <div className="tableCellSchedule removeTop">Game 1</div>
                <div className="tableCellSchedule removeTop">Game 2</div>
                <div className="tableCellSchedule removeTop">Game 3</div>
                <div className="tableCellSchedule removeTop">Date</div>
                <div className="tableCellSchedule topRight removeTop"></div>
            </div>
            <div className="tableRowSchedule">
                <div className="tableCellSchedule removeLeft">Week 1</div>
                <div className="tableCellSchedule">Yahtzee</div>
                <div className="tableCellSchedule">Candyland</div>
                <div className="tableCellSchedule">Scrabble</div>
                <div className="tableCellSchedule">01.21.2020</div>
                <div className="tableCellSchedule removeRight"></div>
            </div>
            <div className="tableRowSchedule">
                <div className="tableCellSchedule removeLeft">Week 2</div>
                <div className="tableCellSchedule">TBD</div>
                <div className="tableCellSchedule">TBD</div>
                <div className="tableCellSchedule">TBD</div>
                <div className="tableCellSchedule">01.28.2020</div>
                <div className="tableCellSchedule removeRight"></div>
            </div>
            <div className="tableRowSchedule">
                <div className="tableCellSchedule removeLeft">Week 3</div>
                <div className="tableCellSchedule">TBD</div>
                <div className="tableCellSchedule">TBD</div>
                <div className="tableCellSchedule">TBD</div>
                <div className="tableCellSchedule">02.04.2020</div>
                <div className="tableCellSchedule removeRight"></div>
            </div>
            <div className="tableRowSchedule">
                <div className="tableCellSchedule removeLeft">Week 4</div>
                <div className="tableCellSchedule">TBD</div>
                <div className="tableCellSchedule">TBD</div>
                <div className="tableCellSchedule">TBD</div>
                <div className="tableCellSchedule">02.11.2020</div>
                <div className="tableCellSchedule removeRight"></div>
            </div>
        </div>
    )
}

export default Schedule