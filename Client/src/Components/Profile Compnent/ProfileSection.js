import React from 'react'
import { Route } from 'react-router-dom'
import ProfileHeader from './ProfileHeader'

//Profile Componnet
import Default from './Default'
import Reels from './Reels'
import Channel from './Channel'
import Tagget from './Tagget'




const ProfileSection = () => {
    return (


        <section>
            <ProfileHeader />
            <Route path="/bayrambayraktar1" exact={true} component={Default} />
            <Route path="/bayrambayraktar1/reels" component={Reels} />
            <Route path="/bayrambayraktar1/channel"  component={Channel} />
            <Route path="/bayrambayraktar1/tagget" component={Tagget} />
        </section>
    )
}

export default ProfileSection
