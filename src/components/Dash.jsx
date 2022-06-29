import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const Dash = () => {
    const params = useParams()
    const [users, setUsers] = useState([])

    async function getLeaderboard(channel){
        const url = `https://feras-leaderboards.herokuapp.com/dash/${channel}`; 
        const leaderboard = await axios.get(url)
        setUsers(leaderboard.data)
    }

    useEffect(() => {
        getLeaderboard(params.channel)
    }, [])
    
    return(
        <div>
            <h2>Dash</h2>
            {console.log(users)}
        </div>
    )
}

export default Dash;