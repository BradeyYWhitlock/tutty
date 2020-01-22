import React, { ReactElement, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { SkillsProps } from '../../types/app'
import './styles/skills.scss'

const Skills: React.FC<SkillsProps> = (props): ReactElement => {
    return (
        <Fragment>
            <div className='skillsPage'>
                <div className='frontend'>
                    <div className='header'>Frontend</div>
                    <div>React</div>
                    <div>Redux</div>
                    <div>Mobx</div>
                    <div>Javascript</div>
                    <div>Typescript</div>
                    <div>Webpack</div>
                    <div>NPM</div>
                    <div className='favorite'>
                        <i className="fas fa-arrow-up"></i>
                        My Favorite
                </div>
                </div>
                <div className='backend'>
                    <div className='header'>Backend</div>
                    <div>Node.js</div>
                    <div>Kotlin</div>
                    <div>Java</div>
                    <div>Groovy</div>
                    <div>Jenkins</div>
                    <div>Serverless</div>
                    <div>Firebase</div>
                    <div>Gradle</div>
                </div>
                <div className='cloud'>
                    <div className='header'>AWS</div>
                    <div>S3</div>
                    <div>Lambda</div>
                    <div>Step Functions</div>
                    <div>SQS</div>
                    <div>CloudWatch</div>
                </div>
                <div className='mobile'>
                    <div className='header'>Mobile</div>
                    <div>React Native</div>
                    <div>Swift</div>
                    <div>Android Studio (Native Android)</div>
                </div>

            </div>
            <NavLink to='/home' className='leftPanel'>
                Home
            </NavLink>
        </Fragment>
    )
}

export default Skills