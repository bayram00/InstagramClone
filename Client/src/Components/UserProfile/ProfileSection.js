import React from 'react'
import { Route } from 'react-router-dom'
//Profile Componnet
import Default from './Post/Default'
import Channel from './Post/Channel'
import Tagget from './Post/Tagget'


const ProfileSection = (props) => {

    return (

        <section>

            <Route path={`/User/${props.data.userName}`} exact={true} >
                <Default Post={props.Post} />
            </Route>


            <Route path={`/User/${props.data.userName}/channel`} >
                <Channel  />
            </Route>


            <Route path={`/User/${props.data.userName}/tagget`} >
                <Tagget/>
            </Route>


        </section>
    )
}

export default ProfileSection
