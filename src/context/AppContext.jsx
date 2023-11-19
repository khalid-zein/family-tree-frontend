import {createContext, useState} from "react";

const EditContext = createContext()

const EditProvider = ({children}) => {
    const [editFirstName, setEditFirstName] = useState('')
    const [editParentId, setEditParentId] = useState('')

    return (
        <EditContext.Provider 
            value={{    
                editFirstName, 
                editParentId, 
                setEditFirstName, 
                setEditParentId
            }}
        >
            {children}
        </EditContext.Provider>
    )
}

export { EditContext, EditProvider};