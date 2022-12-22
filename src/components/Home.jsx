import { Feras, Header, Preview } from './Team';
import axios from  'axios';
import { useEffect, useState} from  'react';
import { useFera } from '../providers/FeraPreview';

export default function Home(){
    const [feras, setFeras] = useState([]);
    const {fera, setFera} = useFera();


    function getFerasOnline(){
        axios.get("https://api.feras.club/team/live")
        .then(ferasStreamers => {
            const streamers = ferasStreamers.data;
            console.log('streamers:', streamers)
            streamers.forEach(s => {
                s.preview = true
            });
            streamers.sort((a, b) => {
                if(a.viewer_count > b.viewer_count)
                    return -1;
                if(a.viewer_count < b.viewer_count)
                    return 1;
                return 0;
            });
            setFeras(streamers)
            setFera(streamers[0])
        })
        .catch((e) =>  console.log('e: ', e))
    } 

    useEffect(() => {
       getFerasOnline() 
       console.log(feras)
    }, [])
    // console.log(feras)
    // const preview = feras.filter(f => f.preview)

    // console.log(fera)

    return(
        <div className="team h-screen">
            {/* {console.log(feras)} */}
            <Header />
                (งツ)ว 
            <div className="flex flex-row team-box sm:w-940 md:w-940 lg:w-940 mx-auto mt-4">
                <div className="mx-auto container p-20px basis-1/3">
                    {/* <div className="mb-4">
                        <img src={require('../feras.jpg')} alt="Clube das Feras" />
                    </div> */}
                    <div>
                        <Feras feras={feras} />
                    </div>
                </div> 
                <div className="basis-2/3 pr-4 py-4">
                    <Preview fera={fera}/>
                </div>
            </div>
        </div>
    );

}
