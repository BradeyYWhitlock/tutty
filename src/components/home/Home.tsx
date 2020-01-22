import React, { ReactElement, useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { setIsMobile } from '../../actions/app'
import { HomeProps } from '../../types/app'

import './styles/home.scss'

import iphoneX from '../../assets/images/iphoneXBradey.png'
import twitterIcon from '../../assets/images/socialMediaIcons/twitterIcon.png'
import instagramIcon from '../../assets/images/socialMediaIcons/instagramIcon.png'
import linkedInIcon from '../../assets/images/socialMediaIcons/linkedInIcon.png'
import { NavLink } from 'react-router-dom';

function mapDispatchToProps(dispatch: Function) {
    return {
        setIsMobile: (isMobile: boolean) => dispatch(setIsMobile(isMobile))
    };
}

function mapStateToProps({ app }) {
    return {
        isMobile: app.isMobile
    };
}


const Home: React.FC<HomeProps> = (props): ReactElement => {
    useEffect(() => {
        var isMobile = window.innerWidth <= 500;
        props.setIsMobile(isMobile)
    })

    const movePageRight = () => {

    }

    return (
        <Fragment>
            <div className={`${props.isMobile ? 'homeMobile' : 'homeWeb'}`}>
                <img style={{ maxWidth: '500px' }} alt="iphoneX" src={iphoneX} />
                <div className='nameTitle'>
                    <span style={{ fontSize: '40px' }}>Bradey Whitlock</span>
                    <span className='softwareDeveloper'>Software Developer</span>
                    <div className='socialMedia'>
                        <div>@Bradeyyw</div>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <a href='https://twitter.com/Bradeyyw'><img src={twitterIcon} height={50} width={50} /></a>
                            <a href='https://www.instagram.com/bradeyyw/'><img src={instagramIcon} height={40} width={40} /></a>
                            <a href='https://www.linkedin.com/in/bradey-whitlock-8319358a/' style={{ marginLeft: '5px' }}><img src={linkedInIcon} height={40} width={40} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <NavLink to='/skills' className='rightPanel' onClick={() => movePageRight()}>
                Skills
            </NavLink>
            <NavLink to='/projects' className='bottomPanel' onClick={() => movePageRight()}>
                Projects
            </NavLink>
            <NavLink to='/contactMe' className='topPanel' onClick={() => movePageRight()}>
                Contact Me
            </NavLink>
        </Fragment>

    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)