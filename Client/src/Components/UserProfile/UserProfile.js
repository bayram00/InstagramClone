import React, { useRef, useEffect, useState } from 'react'
import { BrowserRouter as Link, useParams } from 'react-router-dom'
import ProfileHeader from './Profileheader'
import ProfileSection from './ProfileSection'
import Header from '../header'
import axios from 'axios'

import './Profile.css'


const Profile = () => {

    const { profile } = useParams()



    const [User, setUser] = useState([])
    const [Post, setPost] = useState([])


    useEffect(() => {
        axios.get(`http://localhost:5000/User/${profile}`, { withCredentials: true }).then(response => {

            setUser(response.data.User)
            setPost(response.data.Post)
        })
    }, [])


    const ref = useRef(null)

    const scroll = (scroll) => {
        ref.current.scrollLeft += scroll
    }



    return (
        <>
            <>
                <Header />
                <div className='ProfileWrapper'>
                    <div className='profile'>
                        <div className='ProfileHead'>
                            <img className='profilePhoto' src={User.profilePicture} alt='' />
                            <div className='ProfileExplanation'>
                                <div className='ExplanationTitle'>
                                    <div className='UserTitle'><span>{User.userName}</span> <span className='Userapproved'><i class="fas fa-check-double"></i></span> </div>
                                    <Link to="/direct/t/340282366841710300949128171053416674792" >Mesaj Gönder</Link>
                                    <button className='unFollow'><i class="fas fa-user-check"></i></button>
                                    <button className='suggested'><i class="fas fa-angle-down"></i></button>
                                    <button className='UserBlock'><i class="fas fa-ellipsis-h"></i></button>
                                </div>
                                <div className='FollowerFollow'>
                                    <div className='shipment'>
                                        <span>{User.Post ? User.Post.length : "0"} gönderi</span>
                                    </div>
                                    <div className='follower'>
                                        <span>{User.followers ? User.followers.length : "0"} takipçi</span>
                                    </div>
                                    <div className='follow-up'>
                                        <span>{User.followings ? User.followings.length : "0"} takip</span>
                                    </div>

                                </div>
                                <div className='UserExplanation'>
                                    <span className='UserName' >{User.userName}</span>
                                    {User.desc ? <span>{User.desc}</span> : false}
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
                            <ProfileHeader data={User} />
                            <ProfileSection data={User} Post={Post} />
                        </div>
                    </div>
                </div>


            </>
        </>
    )
}

export default Profile
