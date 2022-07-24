import { useState } from 'react';
import axios from 'axios';

async function loginUser(credentials){
    return axios.post('http://feras-leaderboards.herokuapp.com/guzclap/gabinete/auth', credentials)
}

export default function LoginGabinete({set}){
    const [password, setPassword] = useState();

    async function handleSubmit(e){
        e.preventDefault();
        const token = await loginUser({'pwd': password})
        if(token.data.token === 'cu'){
            sessionStorage.setItem('token', token.data.token);
            set(token.data.token);
        } else {
            return;
        }
    }

    return(
        <div className="h-screen bg-zinc-900 text-center pt-64">
            <div className="w-64 mx-auto">
                <label className="text-white">ACESSO
                    <input className="m-2 rounded text-center text-black" onChange={e=> setPassword(e.target.value)} type="password"></input>
                </label>
                <button className="text-white block mx-auto bg-sky-500 px-2 py-1 rounded" type="submit" onClick={e => handleSubmit(e)}>ENVIAR</button>
            </div>
        </div>
    )
}