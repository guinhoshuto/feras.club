import { Feras, Header, Preview } from './Team';
import axios from  'axios';
import { useEffect} from  'react';
import { useFera } from '../providers/FeraPreview';

export default function Home(){
    const {feras, setFeras} = useFera();

    function getFerasOnline(){
        axios.get("https://feras-leaderboards.herokuapp.com/team")
        .then(ferasStreamers => {
            const streamers = ferasStreamers.data.response;
            streamers.forEach(s => {
                s.preview = false
            });
            streamers.sort((a, b) => {
                if(a.viewer_count > b.viewer_count)
                    return -1;
                if(a.viewer_count < b.viewer_count)
                    return 1;
                return 0;
            });
            setFeras(streamers)
        })
        .catch((e) =>  console.log('e: ', e))
    } 

    useEffect(() => {
       getFerasOnline() 
       console.log(feras)
    }, [feras])
    // console.log(feras)
    // const preview = feras.filter(f => f.preview)

    // console.log(fera)

    return(
        <div className="team">
            {/* {console.log(feras)} */}
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
