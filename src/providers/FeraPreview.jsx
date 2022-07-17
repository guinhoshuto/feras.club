import { createContext, useState, useContext } from 'react'

export const FeraPreviewContext = createContext({});

export const FeraPreviewProvider = (props) => {
    const [fera, setFera] = useState({
        fera: "marcellus_v",
        game_name: "",
        is_live: false,
        language: "",
        offline_image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/dd8e0d7b-d003-40dd-b579-5040552c57ec-channel_offline_image-1920x1080.jpeg",
        profile_image_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/6356c984-9dd2-42db-bc16-c34ed4244500-profile_image-300x300.png",
        started_at: "",
        thumbnail_url: "",
        title: "",
        user_id: "",
        user_name: "Marcellus_V",
        view_count: 13237,
        viewer_count: "0"
    })

    return(
        <FeraPreviewContext.Provider value={{fera, setFera}}>
            { props.children }
        </FeraPreviewContext.Provider>
    )
}

export const useFera = () => useContext(FeraPreviewContext)