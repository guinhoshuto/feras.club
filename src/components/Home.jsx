import React, {useState, useEffect }from 'react';
import axios from 'axios';

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
            {console.log(feras)}
            <nav className="team-header">
                <div className="container flex flex-wrap items-center">
                    <div className="twitch-icon"></div>
                    <div className="hidden w-full md:block md:w-auto">
                        <ul className="flex flex-col pl-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li><a className="block" href="https://www.twitch.tv/directory/following">Following</a></li>
                            <li><a className="block" href="https://www.twitch.tv/directory">Browse</a></li>
                        </ul>

                    </div>
                </div>
            </nav>
                (งツ)ว 
            <div className="team-box mx-auto container flex flex-wrap">
                <div>
                    <ul>
                        {feras.map((fera) => {
                            return(
                                <li>
                                    <a href="" className="block justify-between">
                                        <span>
                                            {fera.fera}
                                        </span>
                                        <span>
                                            {fera.is_live && <span><span className="text-red-600">● </span> {fera.viewer_count}</span>} 
                                        </span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div> 
        </div>
    )

}

export default Home;