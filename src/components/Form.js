import React, {useState,useContext} from 'react'
import { AlertContext } from '../context/alert/alertContext'

export const Form = () => {
    const [value,setValue] = useState('')
    const alert = useContext(AlertContext)

    const submitHandler = event => {
        event.preventDefault()
        if(value.trim()){
            alert.show(`"${value}" -Добавлено в спиок дел`,'success')
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