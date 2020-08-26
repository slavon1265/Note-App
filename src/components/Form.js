import React, {useState,useContext} from 'react'

export const Form = () => {
    const [value,setValue] = useState('')

    const submitHandler = event => {
        event.preventDefault()

        alert.show(value, 'succes')
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