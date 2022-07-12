export default function Feras({feras}){
    const online = feras.filter(f => f.is_live)
    return(
        <aside>
            <div className="flex jusfify-between">
                <h3 className="text-white bold">Team Members</h3> <div className="text-cinzinha count"> {online.length} </div>
            </div>
            <div className="bg-fundo">
                <ul>
                    {feras.map((fera) => {
                        return(
                            <li>
                                <button href="" className="flex text-white justify-between h-50px p-4">
                                    <div> {fera.fera} </div>
                                    <div className="text-cinzinha count">
                                        {fera.is_live && <span><span className="text-red-600">● </span> {fera.viewer_count}</span>} 
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