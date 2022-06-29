import React from 'react';
import Adsense from './Adsense';

const Home = () => {
    return(
        <div className="team">
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