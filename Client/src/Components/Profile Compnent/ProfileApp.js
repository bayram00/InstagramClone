import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Section from './ProfileSection'

//css path
import './Styles/App.css'

const ProfileApp = () => {
    return (
        <div>
            <Router>
                <Section />
            </Router>
        </div>
    )
}

export default ProfileApp
