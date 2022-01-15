import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'
import Cookies from 'universal-cookie';


export const DataProvider = createContext()

const DataSection = (props) => {

    //cookie Contoller 
    const cookie = new Cookies();
    const Cookie = cookie.get("User_")

    const [Err, setErr] = useState("");

    const [LoggedUser, setLoggedUser] = useState("")



    const LoginRequest = async (EpostOrPhone, password) => {
        const LoginObj = {
            EpostOrPhone: EpostOrPhone,
            password: password
        }

        //axios post request

        await axios.post('http://localhost:5000/accounts/login', LoginObj, { withCredentials: true }).then(response => {
            try {
                if (response.data.notMatch) {
                    setErr(response.data.notMatch)
                } else {
                    return window.location.href = "http://localhost:3000"
                    
                }
            } catch (error) {
                console.log(error)
            }
        })
    }

    const [img] = useState([
        "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"
    ])

    useEffect(() => {
        axios.get("http://localhost:5000/loggedUser", { withCredentials: true }).then(response => {
            setLoggedUser(response.data)
        })
    }, [])


    const CreatePost = async (title, body, photo) => {
        const formData = new FormData()
        formData.append("photos", photo)
        formData.append("title", title)
        formData.append('body', body)

        await axios.post('http://localhost:5000/createposts', formData, { withCredentials: true })
    }

    return (
        <DataProvider.Provider value={{ img, Cookie, CreatePost, LoginRequest, Err, LoggedUser  }}>
            {props.children}
        </DataProvider.Provider>
    )
}

export default DataSection
