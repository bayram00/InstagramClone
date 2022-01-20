import React, { useRef, useState } from 'react'
import Header from '../header'
import {BrowserRouter as  Router } from 'react-router-dom'
import LoggedSection from './LoggedSection'
import LoggedHeader from './LoggedHeader'

import './Profile.css'
const Profile = (props) => {

    const [LoggedUser] = useState(props.data)
    const ref = useRef(null)

    const scroll = (scroll) => {
        ref.current.scrollLeft += scroll
    }

    return (
        <>
            <Header />
            <div className='ProfileWrapper'>
                <div className='profile'>
                    <div className='ProfileHead'>
                        <img className='profilePhoto' src={LoggedUser.profilePicture} alt='' />
                        <div className='ProfileExplanation'>
                            <div className='ExplanationTitle'>
                                <div className='UserTitle'><span>{LoggedUser.userName}</span> <span className='Userapproved'><i class="fas fa-check-double"></i></span> </div>

                                <button className='UserBlock'><i class="fas fa-ellipsis-h"></i></button>
                            </div>
                            <div className='FollowerFollow'>
                                <div className='shipment'>
                                    <span>{LoggedUser.Post.length} gönderi</span>
                                </div>
                                <div className='follower'>
                                    <span>{LoggedUser.followers ? LoggedUser.followers.length : "0"} takipçi</span>
                                </div>
                                <div className='follow-up'>
                                    <span>{LoggedUser.followings ? LoggedUser.followings.length : "0"} takip</span>
                                </div>

                            </div>
                            <div className='UserExplanation'>
                                <span className='UserName' >{LoggedUser.userName}</span>
                                {LoggedUser.desc ? <span>{LoggedUser.desc}</span> : false}
                            </div>
                        </div>
                    </div>

                    <div className="StorySlider">
                        <div className="sliderContent" ref={ref}>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>
                            <div className="Store">
                                <img alt="" src="https://i.pinimg.com/originals/89/90/48/899048ab0cc455154006fdb9676964b3.jpg" />
                                <span>Kemal şili</span>
                            </div>

                        </div>
                        <div className="StoryBtns">
                            <div className="btns">
                                <span onClick={() => scroll(-135)} className="btnSlider"><i class="fas fa-arrow-left"></i></span>
                                <span onClick={() => scroll(135)} className="btnSlider"><i class="fas fa-arrow-right"></i></span>
                            </div>
                        </div>
                    </div>
                    <div className='ProfileMenu'>
                        <Router>
                            <LoggedHeader />
                            <LoggedSection data={LoggedUser} />
                        </Router>
                    </div>


                </div>
            </div>


        </>

    )
}

export default Profile
