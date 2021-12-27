import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import Header from './header'
import ProfileApp from './Profile Compnent/ProfileApp'

import './styles/Profile.css'
const Profile = () => {

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
                        <img className='profilePhoto' src='https://cdn.odatv4.com/images/resimler/korayedin.jpeg' alt='' />
                        <div className='ProfileExplanation'>
                            <div className='ExplanationTitle'>
                                <div className='UserTitle'><span>Mustafa Kemal</span> <span className='Userapproved'><i class="fas fa-check-double"></i></span> </div>
                                <Link to="/direct/t/340282366841710300949128171053416674792" >Mesaj Gönder</Link>
                                <button className='unFollow'><i class="fas fa-user-check"></i></button>
                                <button className='suggested'><i class="fas fa-angle-down"></i></button>
                                <button className='UserBlock'><i class="fas fa-ellipsis-h"></i></button>
                            </div>
                            <div className='FollowerFollow'>
                                <div className='shipment'>
                                    <span>9.481 gönderi</span>
                                </div>
                                <div className='follower'>
                                    <span>1.4 miliyon takipçi</span>
                                </div>
                                <div className='follow-up'>
                                    <span>3 takip</span>
                                </div>

                            </div>
                            <div className='UserExplanation'>
                                <span className='UserName' >Mustafa Kemal Atatürk (1881-1938)</span>
                                <span>"Beni görmek demek mutlaka yüzümü görmek demek değildir. Benim fikirlerimi, benim duygularımı anlıyorsanız ve hissediyorsanız bu yeterlidir."</span>

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
                        <ProfileApp/>
                    </div>

                    
                </div>
            </div>


        </>
    )
}

export default Profile
