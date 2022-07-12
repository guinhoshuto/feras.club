import React, {useState, useEffect }from 'react';
import axios from 'axios';
import { Feras, Header, Preview } from './Team'

const Home = () => {
    const [feras, setFeras] = useState([]) 

    async function getFerasOnline(){
        const ferasOnline = await axios.get("https://feras-leaderboards.herokuapp.com/team")
        setFeras(ferasOnline.data.response)
    } 

    useEffect(() => {
        getFerasOnline()
    }, [])


    return(
        <div className="team">
            <Header />
                (งツ)ว 
            <div className="team-box mx-auto container flex flex-wrap p-20px">
                <Feras feras={feras} />
            </div> 
            <div>
                <Preview />
            </div>
        </div>
    )

}

export default Home;