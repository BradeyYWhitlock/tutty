import React, { ReactElement, Fragment } from 'react';
import { connect } from 'react-redux';
import { ProjectsCardProps } from '../../../types/app'
import * as AppActions from '../../../actions/app'
import '../styles/projects.scss'

function mapStateToProps({ app }) {
    return {
        projectSelected: app.projectSelected
    };
}

function mapDispatchToProps(dispatch: Function) {
    return {
        setProjectAnimationClass: (className: string) => dispatch(AppActions.setProjectAnimationClass(className))
    };
}

const ProjectsCard: React.FC<ProjectsCardProps> = (props): ReactElement => {
    return (
        <Fragment>
            <div className='floppyContainer'>
                <div
                    className={`floppyDisk ${props.project.id} ${props.project.id === props.projectSelected ? 'takeOut' : 'putBack'}`}
                    onClick={() => props.setProjectAnimationClass(props.project.id)}
                />
            </div>
        </Fragment>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsCard)