import React, { useState, useEffect, useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios'
import './styles/SignScrren.css'
//DataSection 
import { DataProvider } from './CONTEXT'

function Signup() {

    const { img } = useContext(DataProvider)

    const [ApiData, setApiData] = useState("")

    //UseHistory
    const History = useHistory()

    useEffect(() => {
        document.title = "Giriş Yap · İnstagram"
    }, [])



    //İnput Value
    const [EpostOrPhone, setEpostOrPhone] = useState("")
    const [name, setname] = useState("")
    const [userName, setuserName] = useState("")
    const [password, setpassword] = useState("")

    //handleSubmit
    const HandleSubmit = async (e) => {
        e.preventDefault()
        const ClientSignRequest = {
            EpostOrPhone: EpostOrPhone,
            name: name,
            userName: userName,
            password: password
        }

        await axios.post('http://localhost:5000/accounts/signup', ClientSignRequest).then((result) => {

            setApiData(result.data)

            if (result.data.Redirect) return History.push('/accounts/login')

        }).catch((err) => {
            console.log(err)
        });



    }

    const [count, setCount] = useState(0)
    useEffect(() => {
        const İnterval = setInterval(() => {
            if (count > img.length-2) {
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
                    <h4>Arkadaşlarının fotoğraf ve videolarını görmek için kaydol.</h4>
                </div>

                <form>

                    <button className="LoginFacbook">
                        <span><i class="fab fa-facebook-square"></i></span>
                        <span>Facebbok İle Giriş Yap</span>
                    </button>

                    <div className="orSocial">
                        <span className="orScoialSolid"></span>
                        <span className="orSocialString">YA DA</span>
                        <span className="orScoialSolid"></span>
                    </div>
                    <div className="formPassowrd">
                        <input onChange={(e) => setEpostOrPhone(e.target.value)} value={EpostOrPhone} type="text" alt="" name="EpostOrPhone" placeholder="Cep Telefonu Numarası veya E-Posta" />
                        {ApiData.E_previously ? <span><i class="far fa-times-circle"></i></span> : ""}
                    </div>
                    <input onChange={(e) => setname(e.target.value)} value={name} type="text" name='name' alt='' placeholder='Adı Soyadı' />
                    <div className="formPassowrd">
                        <input onChange={(e) => setuserName(e.target.value)} value={userName} type="text" name='userName' alt='' placeholder='Kullanıcı Adı' />
                        {ApiData.U_previously ? <span><i class="far fa-times-circle"></i></span> : ""}

                    </div>
                    <div className="formPassowrd">
                        <input onChange={(e) => setpassword(e.target.value)} value={password} type="password" alt="" name="password" placeholder="password" />
                    </div>
                    {
                        EpostOrPhone.length > 0 & name.length > 0 & userName.length > 0 & password.length > 0 ? <button onClick={(e) => HandleSubmit(e)} className="SignBtn">Kaydol</button>
                            : <input type="submit" onClick={(e) => HandleSubmit(e)} disabled={true} className="SignBtn btn btn-primary-outline" value="Kaydol" />


                    }
                    <div className="newUser">
                        <span>Kaydolarak, <Link to="/koşullar"> Koşullar'ı</Link> , Veri İlkesi'ni ve Çerezler İlkesi'ni kabul etmiş olursun.</span>
                    </div>

                </form>

                <div className="LoginRedirect">
                    <span>Hesabın var mı? <Link to="/accounts/login">Giriş yap</Link></span>
                </div>


                <div className="appDowloand">
                    <span>Ugulamayı indir</span>
                    <div className="AppHref">
                        <Link>
                            <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_turkish-tr.png/30b29fd697b2.png" alt="" />
                        </Link>

                        <Link>
                            <img className="PlaySotorage" src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_turkish-tr.png/9d46177cf153.png" alt="" />
                        </Link>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default Signup
