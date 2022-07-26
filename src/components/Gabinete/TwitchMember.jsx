export default function TwitchMember({member, onHandleAddKappa}){
    return(
        <tr className="sm:w-full md:w-64 bg-neutral-700 hover:bg-neutral-700/50 border border-neutral-800 m-auto mt-1 align-middle p-4 h-10 rounded">
            <td className="text-white text-left pl-2">
                {member.username}  
            </td>
            <td className="text-white text-right">
                {member.kappa}
            </td>
            <td>
                <button className="statsButton text-center my-auto border border-neutral-900 rounded" onClick={() => onHandleAddKappa('kappa', member.username, 1)}>
                    +
                </button>
                <button className="statsButton text-center my-auto border border-neutral-900 ml-1 rounded" onClick={() => onHandleAddKappa('kappa', member.username, -1)}>
                    -
                </button>
            </td>
            <td className="text-white text-right">
                {member.kappaMes}
            </td>
            <td>
                <button className="statsButton text-center my-auto border border-neutral-900 rounded" onClick={() => onHandleAddKappa('kappaMes', member.username, 1)}>
                    +
                </button>
                <button className="statsButton text-center my-auto border border-neutral-900 ml-1 rounded" onClick={() => onHandleAddKappa('kappaMes', member.username, -1)}>
                    -
                </button>
            </td>
            <td className="text-white text-right">
                {member.first}
            </td>
            <td>
                <button className="statsButton text-center my-auto border border-neutral-900 rounded" onClick={() => onHandleAddKappa('first', member.username, 1)}>
                    +
                </button>
                <button className="statsButton text-center my-auto border border-neutral-900 ml-1 rounded" onClick={() => onHandleAddKappa('first', member.username, -1)}>
                    -
                </button>
            </td>
            <td className="text-white text-right pr-2">
                {member.dividaJu}
            </td>
            <td>
            </td>
        </tr>
    )
}