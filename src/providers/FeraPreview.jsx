import { createContext, useState, useContext } from 'react'

export const FeraPreviewContext = createContext({});

export const FeraPreviewProvider = (props) => {
    const [feras, setFeras] = useState([]);

    return(
        <FeraPreviewContext.Provider value={{feras, setFeras}}>
            { props.children }
        </FeraPreviewContext.Provider>
    )
}

export const useFera = () => useContext(FeraPreviewContext)