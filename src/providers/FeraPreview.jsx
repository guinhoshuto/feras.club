import { createContext,useContext, useState } from 'react'

export const FeraPreviewContext = createContext([]);

export const FeraPreviewProvider = (props) => {
    const [fera, setFera] = useState({})

    return(
        <FeraPreviewContext.Provider value={{fera, setFera}}>
            { props.children }
        </FeraPreviewContext.Provider>
    )
}

export const useFera = () => useContext(FeraPreviewContext)