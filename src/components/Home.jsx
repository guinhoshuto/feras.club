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

    feras.sort((a, b) => {
        if(a.viewer_count > b.viewer_count)
            return -1;
        if(a.viewer_count < b.viewer_count)
            return 1;
        return 0;
    })


    return(
        <div className="team">
            <Header />
                (งツ)ว 
            <div className="flex w-1/2 mx-auto mt-4">
                <div className="team-box mx-auto container p-20px w-1/3">
                    <Feras feras={feras} />
                </div> 
                <div className="w-2/3">
                    <Preview streamer={'marcellus_v'}/>
                </div>

            </div>
        </div>
    )

}

export default Home;