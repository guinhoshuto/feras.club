import TwitchMember from './TwitchMember';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TwitchMembers(){
    const [members, setMembers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        handleUpdateList()
    }, [])

    function handleUpdateList(){
        axios.get('http://feras-leaderboards.herokuapp.com/guzclap/twitch/members')
        .then(response => {
            setMembers(response.data);
        })
        .catch(e => console.log('e:', e))
    }

    const activeMembers = members.filter(m => m.kappa+m.first > 0)
    const filteredMembers = members.filter(m => m.username.includes(search) & m.kappa+m.first === 0)

    function handleKappa(method, att, member, n){
        if(method === 'add')
            axios.put(`https://feras-leaderboards.herokuapp.com/guzclap/twitch/${att}/${member}/${n}`)
            .then(() => handleUpdateList())
            .catch((e) => console.log(e))
        if(method === 'update')
            return
    }

    return(
        <div className="w-64 mx-auto">
            <div>
                {activeMembers.map(member => 
                <TwitchMember 
                member={member} 
                onHandleAddKappa={() => handleKappa('add', 'kappa', member.username, 1)} 
                onHandleRemoveKappa={() => handleKappa('add', 'kappa', member.username, -1)} />
                )}
            </div>
            <div className="mt-4">
                <input className="rounded w-full" type="text" value={search} onChange={(e) => setSearch(e.target.value)}></input>
                {filteredMembers.map( member =>  
                    <TwitchMember 
                    member={member} 
                    onHandleAddKappa={() => handleKappa('add', 'kappa', member.username, 1)} 
                    onHandleRemoveKappa={() => handleKappa('add', 'kappa', member.username, -1)} />
                )}
            </div>

        </div>
    );
}