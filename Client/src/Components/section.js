import React, { useContext } from 'react'
import { Route } from 'react-router'

//component
import SignScrre from './SignScreen'
import SignUp from './SignUp'
import Home from './Home'
import Profil from './Profile'
//provider
import { DataProvider } from './CONTEXT'



function Section() {
    const { Cookie } = useContext(DataProvider)


    return (
        <section>


            {
                Cookie ? <Route path="/" exact component={Home} /> : <Route path="/" exact component={SignScrre} /> //Home page we check progress
            }


            <Route path="/accounts/login" exact component={SignScrre} /> 


            <Route path="/bayrambayraktar1" exact component={Profil} />

            <Route path="/accounts/signup">
                <SignUp />
            </Route>


        </section>
    )
}

export default Section
