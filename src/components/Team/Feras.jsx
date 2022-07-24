import { useFera } from '../../providers/FeraPreview';

export default function Feras(){
    const {feras, setFeras} = useFera();
    const online = feras.filter(f => f.is_live)

    function handleFera(fera){
        feras.forEach(f => {
            if(f.fera === fera.fera){
                f.preview = true
            } else {
                f.preview = false
            }
        })
        setFeras(feras)

        console.log(fera)
    }
    return(
        <aside className="w-full">
            <div className="flex justify-between w-full p-2">
                <div> <h2 className="text-white font-bold">Team Members</h2> </div>
                <div className="text-cinzinha count"> {online.length} </div>
            </div>
            <div className="bg-fundo">
                <ul>
                    {feras.map((fera) => {
                        return(
                            <li>
                                <button onClick={() => handleFera(fera)} className="flex  justify-between w-full text-white h-50px px-4 pt-2 hover:bg-hover-cinzinha">
                                    <div className="align-middle mv-auto"><img className="feras-fotinha rounded-full mr-4 align-middle" src={fera.profile_image_url} alt="" />{fera.fera} </div>
                                    <div className="text-cinzinha count align-middle">
                                        {fera.is_live && 
                                        <div> <span className="text-red-600">● </span> {fera.viewer_count}</div>} 
                                    </div>
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </aside>
    )
}
