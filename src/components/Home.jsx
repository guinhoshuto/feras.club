import React, {useState, useEffect }from 'react';
import axios from 'axios';
import { Feras, Header, Preview } from './Team';
import { useFera } from '../providers/FeraPreview';

const Home = () => {
    const [feras, setFeras] = useState([]);
    const { setFera } = useFera();

    function getFerasOnline(){
        axios.get("https://feras-leaderboards.herokuapp.com/team")
        .then(ferasOnline => {
            setFeras(ferasOnline.data.response); 
            setFera(feras[0]);
        })
        .catch((e) => console.log('e: ', e))
    } 

    useEffect(() => {
        getFerasOnline()
    },)

    feras.sort((a, b) => {
        if(a.viewer_count > b.viewer_count)
            return -1;
        if(a.viewer_count < b.viewer_count)
            return 1;
        return 0;
    });

    return(
        <div className="team">
            {console.log(feras)}
            <Header />
                (งツ)ว 
            <div className="flex flex-row team-box sm:w-full md:w-full lg:w-1/2 mx-auto mt-4">
                <div className="mx-auto container p-20px basis-1/3">
                    <Feras feras={feras} />
                </div> 
                <div className="basis-2/3 pr-4 py-4">
                    <Preview />
                </div>
            </div>
        </div>
    );

}

export default Home;