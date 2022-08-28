import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GabineteRoutes, LoginGabinete, Sidebar, TwitchMembers } from './Gabinete';
import { NextUIProvider } from '@nextui-org/react';

export default function Dash(){
    const params = useParams()
    const [users, setUsers] = useState([])
    const [token, setToken] = useState();

    async function getLeaderboard(channel){
        const url = `https://feras-leaderboards.herokuapp.com/dash/${channel}`; 
        const leaderboard = await axios.get(url)
        setUsers(leaderboard.data)
    }

    useEffect(() => {
        getLeaderboard(params.channel)
    }, [])

    if(sessionStorage.getItem('token') != 'cu'){
        return(<LoginGabinete set={setToken}/>)
    }
    
    return(
        <NextUIProvider>
            <div className="flex flex-row bg-zinc-900 p-4">
                <TwitchMembers />
                {/* <aside className="w-1/4 h-screen">
                    <Sidebar />
                </aside> */}
                {/* <div className="grow">
                    <GabineteRoutes />
                </div> */}
                {console.log(users)}
            </div>
        </NextUIProvider>
    )
}