import React, { useContext, useState } from 'react'
import { Route } from 'react-router-dom'

//component
import SignScrre from './SignScreen'
import SignUp from './SignUp'
import Home from './Home/Home'
import UserProfile from './UserProfile/UserProfile'
import CommentModal from './Comment/CommentModal'
import LoggedProfile from './LoggedProfile/LoggedProfile'
//provider
import { DataProvider } from './CONTEXT'

function Section() {


    const { Cookie, LoggedUser } = useContext(DataProvider)



    return (

        <section>

            {
                Cookie ? <Route path="/"  exact component={Home} /> : <Route path="/" exact component={SignScrre} /> //Home page we check progress
            }

            <Route path="/accounts/login" component={SignScrre} />
            

            <Route path={`/${LoggedUser.userName}`}>
                <LoggedProfile data={LoggedUser} />
            </Route>


            <Route path={`/P/:id`}  >
                <CommentModal />
            </Route>


            <Route path={'/User/:profile'} exact  >
                <UserProfile />
            </Route>

            <Route path="/accounts/signup" >
                <SignUp />
            </Route>


        </section>
    )
}

export default Section
