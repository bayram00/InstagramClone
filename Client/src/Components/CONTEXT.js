import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react'
import Cookies from 'universal-cookie';



export const DataProvider = createContext()

const DataSection = (props) => {

    //cookie Contoller 
    const cookie = new Cookies();
    const cookies = cookie.get("User_")

    const [Cookie, setCookie] = useState("")

    useEffect(() => {
        cookies ? setCookie(true) : setCookie(false)
    }, [cookies])



    const [img] = useState([
        "https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg",
        "https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg"
    ])



    const CreatePost = async (title, body, photo) => {



        const formData = new FormData()
        formData.append("photos", photo)
        formData.append("title", title)
        formData.append('body', body)

        await axios.post('http://localhost:5000/createposts', formData, { withCredentials: true })
    }


    const dispatch = async (data) => {console.log(data) }


    return (
        <DataProvider.Provider value={{ img, Cookie, dispatch, CreatePost }}>
            {props.children}
        </DataProvider.Provider>

    )
}

export default DataSection
