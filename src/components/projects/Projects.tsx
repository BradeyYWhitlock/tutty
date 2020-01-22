import React, { ReactElement, Fragment, useState } from 'react';
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { ProjectsProps } from '../../types/app'
import './styles/projects.scss'
import ProjectsCard from './components/ProjectCard';
import { setProjectAnimationClass } from '../../actions/app'

const projects = [
    { id: 'hiitTracker' },
    { id: 'hiitTracker3' },
    { id: 'hiitTracker4' }
]

const Projects: React.FC<ProjectsProps> = (props): ReactElement => {
    const [showWip, setShowWip] = useState(false)
    const dispatch = useDispatch()

    return (
        <Fragment>
            {showWip &&
                <div className='projectsPage'>
                    {projects.map(it => { return <ProjectsCard project={it} /> })}
                </div>
            }
            <div
                style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}
                className='projectsPage'
                onClick={() => setShowWip(true)}
            >
                <div>WIP</div>
                <div>Click anywhere to see current progress</div>
            </div>
            <NavLink onClick={() => dispatch(setProjectAnimationClass(''))} to='/home' className='topPanel'>
                Home
            </NavLink>
        </Fragment>
    )
}

export default Projects