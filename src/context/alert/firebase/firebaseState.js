import React, {useReducer} from 'react'
import axios from 'axios'
import { FirebaseContext } from './firebaseContext'
import { firebaseReducer } from './firebaseReducer'
import { SHOW_LOADER } from '../../types'

const url = process.env.REACT_APP_DB_URL

console.log('urlss:', url)
export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false
    }
    const [state,dispatch] = useReducer(firebaseReducer,initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const fetchNotes = async () => {
        showLoader()
        let result = axios.get(`${url}/notes.json`)

        console.log('fetchNotes', result.data)
    }

    const addNote = async (title) => {
        const note = {
            title,
            date: new Date().toJSON()
        }
    }

    return(
        <FirebaseContext.Provider value={{

        }}>
            {children}
        </FirebaseContext.Provider>
    )
}