import React, { useRef, useEffect , useContext} from 'react'
//import Provider
import {DataProvider} from './CONTEXT'
import { Link } from 'react-router-dom'
import Header from './header'


//stylce path
import './styles/home.css'

function Home() {

    const {Posts} = useContext(DataProvider)

    useEffect(() => {
       document.title =  "İntagram"
    }, [])

 
   
    const ref = useRef(null)

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset
    }

    return (

        <>


            <Header />
            <div className="HomeWrapper">
                <div className="Wrapper">
                    <div className="HomeContent">
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
                                    <span onClick={() => scroll(-50)} className="btnSlider"><i class="fas fa-arrow-left"></i></span>
                                    <span onClick={() => scroll(50)} className="btnSlider"><i class="fas fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="ClientPost">
                            <div className="PostTop">
                                <div className="Avatar">
                                    <Link to="/avatar"> <img src="https://www.w3schools.com/w3images/avatar6.png" alt="" /> </Link>
                                    <Link to="/avatar">Melter</Link>
                                </div>

                                <div className="postMore">
                                    <svg aria-label="Seçenekler" class="_8-yf5 " color="#262626" fill="#262626" height="32" role="img" viewBox="0 0 24 24" width="32"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6.5" cy="12" r="1.5"></circle><circle cx="17.5" cy="12" r="1.5"></circle></svg>
                                </div>
                            </div>
                            <div className="PostContent">
                                <img src="https://wallpapercave.com/wp/wp5896351.png" alt="" />
                            </div>
                            <div className="PostFotter">
                                <div className="PostRes">
                                    <div className="Postİcon">
                                        <button> <svg aria-label="Beğen" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg></button>
                                        <button> <svg aria-label="Yorum Yap" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path clip-rule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fill-rule="evenodd"></path></svg></button>
                                        <button> <svg aria-label="Gönderi Paylaş" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg></button>
                                    </div>
                                    <button> <svg aria-label="Kaydet" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg> </button>
                                </div>
                                <div className="LikeComment">
                                    <span>17 beğenme</span>
                                    <Link to="/id">User id</Link>
                                    <span> 18 Yorumun Tümünü Gör</span>
                                    <Link to="/id">4 saat önce</Link>
                                </div>
                                <div className="Commentİnp">
                                    <input type="text" alt="" placeholder="Yorum ekle..." />
                                    <button>Paylaş</button>
                                </div>

                            </div>

                        </div>

                    
                    </div>
                    <div className="HomeFooter">
                        <div className="FotterContent">
                            <div className="UserRedirect">
                                <div className="AvatarRedirect">
                                    <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" alt="" />
                                    <Link to="/userİd" >
                                        <div className="Userİd">
                                            <span>demirCan1</span>
                                            <span>Demir Can</span>
                                        </div>
                                    </Link>
                                </div>

                                <Link to="Userİd">
                                    Geçiş Yap
                                </Link>
                            </div>
                            <div className="Suggestion ">
                                <div className="PeopleSuggestion">
                                    <span>Senin için Önerilen</span>
                                    <Link to="explore/people">Tümünü Gör</Link>
                                </div>

                                <div className="UserSuggestion AvatarRedirect">
                                    <div>
                                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" alt="" />
                                        <Link to="/userİd" >
                                            <div className="Userİd">
                                                <span>demirCan1</span>
                                                <small>Senin için Öneriliyor</small>
                                            </div>
                                        </Link>
                                    </div>

                                    <Link to="Userİd">
                                        Takip Et
                                    </Link>

                                </div>
                                <div className="UserSuggestion AvatarRedirect">
                                    <div>
                                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" alt="" />
                                        <Link to="/userİd" >
                                            <div className="Userİd">
                                                <span>demirCan1</span>
                                                <small>Senin için Öneriliyor</small>
                                            </div>
                                        </Link>
                                    </div>

                                    <Link to="Userİd">
                                        Takip Et
                                    </Link>

                                </div>
                                <div className="UserSuggestion AvatarRedirect">
                                    <div>
                                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" alt="" />
                                        <Link to="/userİd" >
                                            <div className="Userİd">
                                                <span>demirCan1</span>
                                                <small>Senin için Öneriliyor</small>
                                            </div>
                                        </Link>
                                    </div>

                                    <Link to="Userİd">
                                        Takip Et
                                    </Link>

                                </div>
                                <div className="UserSuggestion AvatarRedirect">
                                    <div>
                                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" alt="" />
                                        <Link to="/userİd" >
                                            <div className="Userİd">
                                                <span>demirCan1</span>
                                                <small>Senin için Öneriliyor</small>
                                            </div>
                                        </Link>
                                    </div>

                                    <Link to="Userİd">
                                        Takip Et
                                    </Link>

                                </div>
                                <div className="UserSuggestion AvatarRedirect">
                                    <div>
                                        <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" alt="" />
                                        <Link to="/userİd" >
                                            <div className="Userİd">
                                                <span>demirCan1</span>
                                                <small>Senin için Öneriliyor</small>
                                            </div>
                                        </Link>
                                    </div>

                                    <Link to="Userİd">
                                        Takip Et
                                    </Link>

                                </div>
                            </div>
                            <div className="Fotter">
                                <div>
                                    <Link to="hakkında">Hakkında</Link> ·
                                    <Link to="hakkında">Yardım</Link> ·
                                    <Link to="hakkında">Basın</Link> ·
                                    <Link to="hakkında">Api</Link> ·
                                    <Link to="hakkında">İf Fırsatları</Link> ·
                                    <Link to="hakkında">Gizlilik</Link> ·
                                    <Link to="hakkında">Koşullar</Link> ·
                                    <Link to="hakkında">Konumlar</Link> ·
                                    <Link to="hakkında">Başlıca Hesaplar</Link> ·
                                    <Link to="hakkında">Konu etiketleri</Link> ·
                                    <Link to="hakkında">Dil</Link>
                                </div>

                                <span className="meta">© 2021 INSTAGRAM FROM META</span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Home
