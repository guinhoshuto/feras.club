import TwitchMember from './TwitchMember';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TwitchMembers(){
    const [members, setMembers] = useState([]);
    useEffect(() => {
        handleUpdateList()
    }, [])

    function handleUpdateList(){
        axios.get('http://feras-leaderboards.herokuapp.com/guzclap/twitch/members')
        .then(response => {
            const activeMembers = response.data.filter(m => m.kappa+m.first > 0)
            setMembers(activeMembers);
        })
        .catch(e => console.log('e:', e))
    }

    function handleKappa(method, att, member, n){
        if(method === 'add')
            axios.put(`https://feras-leaderboards.herokuapp.com/guzclap/twitch/${att}/${member}/${n}`)
            .then(() => handleUpdateList())
            .catch((e) => console.log(e))
        if(method === 'update')
            return
    }

    return(
        <div>
            {members.map(member => <TwitchMember 
            member={member} 
            onHandleAddKappa={() => handleKappa('add', 'kappa', member.username, 1)} 
            onHandleRemoveKappa={() => handleKappa('add', 'kappa', member.username, -1)} />
            )}
        </div>
    );
}