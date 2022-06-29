import React, {useState, useEffect }from 'react';
import axios from 'axios';
import Adsense from './Adsense';

const Home = () => {
    const [feras, setFeras] = useState([]) 

    async function getFerasOnline(){
        const ferasOnline = await axios.get("https://feras-leaderboards.herokuapp.com/team")
        setFeras(ferasOnline.data)
    } 

    useEffect(() => {
        getFerasOnline()
    }, [])

    return(
        <div className="team">
            {console.log(feras)}
            <nav className="team-header">
                <div className="twitch-icon"></div>
                <ul>
                    <li><a href="https://www.twitch.tv/directory/following">Following</a></li>
                    <li><a href="https://www.twitch.tv/directory">Browse</a></li>
                </ul>
              (งツ)ว 
            </nav>
            <div className="team-box">
            </div> 

            <Adsense />
        </div>
    )

}

export default Home;