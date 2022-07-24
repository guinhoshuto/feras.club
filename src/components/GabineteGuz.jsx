import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TwitchMembers, LoginGabinete } from './Gabinete'

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
        <div className="bg-zinc-900 h-screen p-4">
            <TwitchMembers />
            {console.log(users)}
        </div>
    )
}