import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'


import './styles/SignScrren.css'
//Data Porvider
import { DataProvider } from './CONTEXT'




function SignScreen() {


    const { img, LoginRequest , Err } = useContext(DataProvider)

    const [count, setCount] = useState(0)
    const [PassShow, setPassShow] = useState(true)


    //input State value-------------------------
    const [EpostOrPhone, setEpostOrPhone] = useState("")
    const [password, setpassword] = useState("")


    //handle Submit-----------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();

        await LoginRequest(EpostOrPhone, password)

    }

    useEffect(() => {
        document.title = "Giriş Yap · İnstagram"
    }, [])


    //slider Counter ++ 
    useEffect(() => {
        const İnterval = setInterval(() => {
            if (count > img.length - 2) {
                setCount(0)
            } else {
                setCount(count + 1)
            }
        }, 3000);

        return () => {
            clearInterval(İnterval)
        }
    })


    return (
        <div className="SignScreen">

            <div className="mobilScreen">
                <div className="mobilSlider">
                    <img src={img[count]} alt="" />
                </div>
            </div>


            <div className="SignForm">
                <div className="brand">
                    <h1>INSTAGRAM</h1>
                </div>
                <form>
                    <div className="formPassowrd">
                        <input type="text" alt="" onChange={(e) => setEpostOrPhone(e.target.value)} value={EpostOrPhone} name="EpostOrPhone" placeholder="Telefon numarası , kullanıcı adı veya e-posta" />
                    </div>
                    <div className="formPassowrd">
                        <input type={PassShow ? "Password" : "text"} alt="" onChange={(e) => setpassword(e.target.value)} value={password} name="password" placeholder="password" />
                        <span onClick={() => setPassShow(!PassShow)}>{PassShow ? "Göster" : "Gizle"}</span>
                    </div>
                    {
                        EpostOrPhone.length > 0 & password.length > 0 ? <input type="submit" onClick={(e) => handleSubmit(e)} className="SignBtn" value="Giriş Yap" />
                            : <input type="submit" onClick={(e) => handleSubmit(e)} disabled={true} className="SignBtn btn btn-primary-outline" value="Giriş Yap" />

                    }



                    <div className="orSocial">
                        <span className="orScoialSolid"></span>
                        <span className="orSocialString">YA DA</span>
                        <span className="orScoialSolid"></span>
                    </div>

                    <button className="RedirectFacook">
                        <span><i class="fab fa-facebook-square"></i></span>
                        <span>Facebbok İle Giriş Yap</span>
                    </button>

                    <div className='notMatch'>
                        <span>{Err}</span>
                    </div>

                    <span className="passwordRepat">Şifreni mi unutun?</span>
                </form>

                <div className="newUser">
                    <span>Hesabın Yokmu ? <Link to="/accounts/signup">Kaydol </Link></span>
                </div>

                <div className="appDowloand">
                    <span>Ugulamayı indir</span>
                    <div className="AppHref">
                        <a href="#">
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png" alt="" />
                        </a>

                        <a href="#">
                            <img className="PlaySotorage" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png" alt="" />
                        </a>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default SignScreen
