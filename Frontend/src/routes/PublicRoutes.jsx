import {BrowserRouter,Routes,Route} from "react-router-dom"
import LandingPage from '../pages/LandingPage.jsx'
import SignupLoginPage from '../pages/SignupLoinPage.jsx'

export default function PublicRoutes(){

    return(
                <Routes>
                    <Route path='/' element = {<LandingPage />}/>
                    <Route path="/login" element = {<SignupLoginPage />} />
                </Routes>

        
    )
}
