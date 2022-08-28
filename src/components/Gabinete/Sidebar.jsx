import { Link } from 'react-router-dom'

export default function Sidebar(){
    return(
        <div class="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <ul class="space-y-2">
                <li>
                    <Link to="/gabinete" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="ml-3">Gabinete</span>
                    </Link>
                </li>
                <li>
                    <Link to="/gabinete/pontos" className="flex text-left items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="flex-1 ml-3 whitespacenowrap">Pontos</span>
                    </Link>
                </li>
                <li>
                    <Link to="/gabinete" className="flex text-left items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
                    </Link>
                </li>
                <li>
                    <Link to="/gabinete/comandos" className="flex text-left items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                    <span className="flex-1 ml-3 whitespace-nowrap">Comandos</span>
                    </Link>
                </li>
            </ul>
        </div>
    )
}