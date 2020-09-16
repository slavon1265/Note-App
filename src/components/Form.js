import React, {useState,useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'
import { FirebaseContext } from '../context/alert/firebase/firebaseContext';

export const Form = () => {
    const [value,setValue] = useState('')
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext)

    const submitHandler = event => {
        event.preventDefault()
        if(value.trim()){
            firebase.addNote(value.trim()).then(()=>{
                alert.show(`"${value}" -Добавлено в спиок дел`,'success')
            }).catch(()=>{
                alert.show('Что-то пошло не так', 'danger')
            })
            
        }else{
            alert.show('Введите текст!')
        }
        
    }

    return (
        <form onSubmit={submitHandler}>
            <div classname="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Введите новую заметку"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </div>
        </form>
    )
}