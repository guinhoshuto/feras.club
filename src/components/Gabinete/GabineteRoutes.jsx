import { Route, Routes } from 'react-router-dom'
import TwitchMembers from './TwitchMembers'; 
import Comandos from './Comandos'

export default function GabineteRoutes(){
    return(
        <Routes>
            <Route path="/pontos" component={TwitchMembers} />
            <Route path="/gabinete/comandos" component={Comandos} />
        </Routes>
    )
}