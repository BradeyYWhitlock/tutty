import React, { ReactElement } from 'react';
import './styles/unity.scss'

const Unity = (): ReactElement => {
    return (
        <div className='unityPage'>
            <div className='teamUnity'>
                TEAM UNITY
            </div>
            <div className='unityMembers'>
                <div className='unityMember'>
                    <div className='unityDanPic'>
                        <div style={{ marginTop: '210px', textAlign: 'center' }}>DAN GHEESLING</div>
                    </div>
                    <div className='socials'>
                        <a className="socialLinks" href="https://twitch.tv/dangheesling"><i className="fab fa-twitch socialIcon"></i></a>
                        <a className="socialLinks" href="https://twitter.com/DanGheesling"><i className="fab fa-twitter socialIcon"></i></a>
                        <a className="socialLinks" href="https://www.youtube.com/user/DanGheesling"><i className="fab fa-youtube socialIcon"></i></a>
                    </div>
                </div>
                <div className="unityMember">
                    <div className="unityPicApallo">
                        <div style={{ marginTop: '210px', textAlign: 'center' }}>DUMBDOG</div>
                    </div>
                    <div className="socials">
                        <a className="socialLinks" href="https://twitch.tv/dumbdog"><i className="fab fa-twitch socialIcon"></i></a>
                        <a className="socialLinks" href="https://twitter.com/VeryDumbDog"><i className="fab fa-twitter socialIcon"></i></a>
                        <a className="socialLinks" href="https://www.youtube.com/user/LastGreyWoIf"><i className="fab fa-youtube socialIcon"></i></a>
                    </div>
                </div>
                <div className="unityMember">
                    <div className="unityPicMalf">
                        <div style={{ marginTop: '210px', textAlign: 'center' }}>MICHAELALFOX</div>
                    </div>
                    <div className="socials">
                        <a className="socialLinks" href="https://twitch.tv/michaelalfox"><i className="fab fa-twitch socialIcon"></i></a>
                        <a className="socialLinks" href="https://twitter.com/michaelalfox"><i className="fab fa-twitter socialIcon"></i></a>
                        <a className="socialLinks" href="https://www.youtube.com/user/michaelalfox"><i className="fab fa-youtube socialIcon"></i></a>
                    </div>
                </div>
                <div className="unityMember">
                    <div className="unityPicRyan">
                        <div style={{ marginTop: '210px', textAlign: 'center' }}>NORTHERNLION</div>
                    </div>
                    <div className="socials">
                        <a className="socialLinks" href="https://twitch.tv/northernlion"><i className="fab fa-twitch socialIcon"></i></a>
                        <a className="socialLinks" href="https://twitter.com/NorthernlionLP"><i className="fab fa-twitter socialIcon"></i></a>
                        <a className="socialLinks" href="https://www.youtube.com/user/Northernlion"><i className="fab fa-youtube socialIcon"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Unity