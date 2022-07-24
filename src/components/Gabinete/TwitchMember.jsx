export default function TwitchMember({member, onHandleAddKappa, onHandleRemoveKappa}){
    return(
        <div>
            <li className="flex justify-between sm:w-full md:w-64 bg-neutral-700 border border-neutral-800 m-auto mt-1 align-middle p-2 rounded">
                <div className="text-white">
                    {member.username} | {member.kappa}
                </div>
                <div>
                    <button className="statsButton text-center my-auto border border-neutral-900 rounded" onClick={() => onHandleAddKappa('add', 'kappa', member.username, 1)}>
                        +
                    </button>
                    <button className="statsButton text-center my-auto border border-neutral-900 ml-1 rounded" onClick={() => onHandleRemoveKappa('add', 'kappa', member.username, -1)}>
                        -
                    </button>
                </div>
            </li>
        </div>
    )
}