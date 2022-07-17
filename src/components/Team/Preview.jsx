import { useEffect } from "react"
import { useFera } from "../../providers/FeraPreview";

export default function Preview({feras}){
    const {fera, setFera} = useFera();
    // const { fera } = useContext( FeraPreviewContext)
    

    // useEffect(() => {
    //     setFera(feras[0])
    // }, );
    return(
        <div>
            <div className="bg-fundo preview">
                <div className="flex p-4">
                    <div className="mr-2 pt-1">
                        <img className="rounded-full fera-fotinha-preview align-middle" src={fera.profile_image_url} alt="" />
                    </div>
                    <div className="pl-2">
                        <div className="text-left">
                            <span className="text-roxinho text-lg font-semibold">{fera.user_name} </span>
                        </div>
                        <div className="flex align-middle pt-1">
                            <div className="flex mr-2">
                                <div className="text-red mr-2">
                                    <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="ScIconSVG-sc-1bgeryd-1 ifdSJl"><g><path fill-rule="evenodd" d="M5 7a5 5 0 116.192 4.857A2 2 0 0013 13h1a3 3 0 013 3v2h-2v-2a1 1 0 00-1-1h-1a3.99 3.99 0 01-3-1.354A3.99 3.99 0 017 15H6a1 1 0 00-1 1v2H3v-2a3 3 0 013-3h1a2 2 0 001.808-1.143A5.002 5.002 0 015 7zm5 3a3 3 0 110-6 3 3 0 010 6z" clip-rule="evenodd"></path></g></svg>
                                </div>
                                <div>
                                    <span className="flex text-red-600 text-xs">
                                        {fera.viewer_count}
                                    </span>
                                </div>
                            </div>
                            <div className="flex align-middle">
                                <div className="mr-2 align-middle">
                                    <svg width="100%" height="100%" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" className="ScIconSVG-sc-1bgeryd-1 ifdSJl"><g><path d="M11.998 10a2 2 0 11-4 0 2 2 0 014 0z"></path><path fill-rule="evenodd" d="M16.175 7.567L18 10l-1.825 2.433a9.992 9.992 0 01-2.855 2.575l-.232.14a6 6 0 01-6.175 0 35.993 35.993 0 00-.233-.14 9.992 9.992 0 01-2.855-2.575L2 10l1.825-2.433A9.992 9.992 0 016.68 4.992l.233-.14a6 6 0 016.175 0l.232.14a9.992 9.992 0 012.855 2.575zm-1.6 3.666a7.99 7.99 0 01-2.28 2.058l-.24.144a4 4 0 01-4.11 0 38.552 38.552 0 00-.239-.144 7.994 7.994 0 01-2.28-2.058L4.5 10l.925-1.233a7.992 7.992 0 012.28-2.058 37.9 37.9 0 00.24-.144 4 4 0 014.11 0l.239.144a7.996 7.996 0 012.28 2.058L15.5 10l-.925 1.233z" clip-rule="evenodd"></path></g></svg>
                                </div>
                                <div>
                                    <span className="text-cinzinha text-xs align-top">
                                        {fera.view_count}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <iframe
                    title="preview"
                    src={`https://player.twitch.tv/?channel=${fera.fera}&parent=localhost&parent=feras.club`}
                    height="65%"
                    width="100%"
                    allowfullscreen>
                </iframe>
                <div className="p-4">
                    <div className="flex">
                        <span className="text-white text-lg font-semibold">
                            {fera.title}
                        </span>
                    </div>
                    <div className="flex">
                        <span className="text-white">
                            Category: &nbsp;
                        </span>
                        <span className="text-roxinho">
                            {fera.game_name} &nbsp;
                        </span>
                        <span className="text-cinzinha">
                        • &nbsp;
                        </span>
                        <span className="text-white">
                            Team: &nbsp;
                        </span>
                        <span className="text-roxinho">
                            Clube das Feras
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="flex p-4">
                    <div>
                        <div className="text-left">
                            <span className="text-white text-lg font-semibold">
                                Clube das Feras
                            </span>
                        </div>
                        <div className="pt-2">
                            <span className="text-white text-left">
                                As feras estão chegando
                            </span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
