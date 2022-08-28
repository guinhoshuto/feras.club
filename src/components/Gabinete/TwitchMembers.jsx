import TwitchMember from './TwitchMember';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Input } from '@nextui-org/react';

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
        <div className="md:w-2/3 mx-auto">
            <div className="w-full mx-auto">
                <table className="w-full">
                    <tr className="text-white"> 
                        <td>Username</td>
                        <td>Kappa</td>
                        <td></td>
                        <td>Kappa Mês</td>
                        <td></td>
                        <td>First</td>
                        <td></td>
                        <td>Dívida Ju</td>
                        <td></td>
                    </tr>
                    {activeMembers.map(member => 
                        <TwitchMember 
                        member={member} 
                        onHandleAddKappa={(att, m, n) => handleKappa('add', att, m, n)} 
                        />
                    )}
                </table>
                <div className="mt-4 overflow-y-auto h-80">
                    <h3 className="text-white text-center">Busca</h3>
                    <Input placeholder="Buscar Usuário" className="rounded w-full p-2" type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                    <table className="w-full">
                        <tr className="text-white"> 
                            <td>Username</td>
                            <td>Kappa</td>
                            <td></td>
                            <td>Kappa Mês</td>
                            <td></td>
                            <td>First</td>
                            <td></td>
                            <td>Dívida Ju</td>
                            <td></td>
                        </tr>
                        {filteredMembers.map( member =>  
                            <TwitchMember 
                            member={member} 
                            onHandleAddKappa={() => handleKappa('add', 'kappa', member.username, 1)} 
                            onHandleRemoveKappa={() => handleKappa('add', 'kappa', member.username, -1)} />
                        )}
                    </table>
                </div>
            </div>
        </div>
    );
}