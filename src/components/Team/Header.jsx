export default function Header(){
    return(
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
    )

}