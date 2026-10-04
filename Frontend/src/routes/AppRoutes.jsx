import {BrowserRouter,Routes,Route} from "react-router-dom"
import PrivateRoutes from './PrivateRoutes.jsx'
import PublicRoutes from './PublicRoutes.jsx'

export default function AppRoutes(){

    return(
            <BrowserRouter>
                <Routes>
                    <Route path='/*' element = {<PublicRoutes />}/>
                    <Route path="/shortener/*" element = {<PrivateRoutes />} />
                </Routes>

            </BrowserRouter>
        
    )
}
