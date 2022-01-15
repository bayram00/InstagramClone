import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import axios from 'axios'
//Profile Componnet
import Default from './Post/Default'
import Channel from './Post/Channel'
import Tagget from './Post/Tagget'


const LoggedSection = (props) => {


    const [Data, setData] = useState()

    useEffect(() => {
        const Mypost = async () => await axios.get('http://localhost:5000/getmypost', { withCredentials: true }).then((res => setData(res.data)))
        Mypost()
    }, [])
    

    return (

        <section>

            <Route path={`/${props.data.userName}`} exact={true} >
                <Default Post={Data} />
            </Route>


            <Route path={`/${props.data.userName}/channel`} >
                <Channel Post={Data} />
            </Route>


            <Route path={`/${props.data.userName}/tagget`} >
                <Tagget Post={Data} />
            </Route>


        </section>
    )
}

export default LoggedSection
