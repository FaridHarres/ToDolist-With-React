import React, { useState } from 'react'
import { v1 as uuid } from "uuid"
import AddToDoForm from './AddToDoForm';

const ToDo = () => {

    const [todos, setTodos] = useState([
        { id: 1, todo: 'Acheter du lait' },
        { id: 2, todo: 'Acheter du pain' },
        { id: 3, todo: 'Acheter du nutella' }
    ])

    const [warning, setWarning] = useState(false)

    const myTodo = todos.map((todo) => {
        return (
            <li className='list-group-item' key={todo.id}>{todo.todo}</li>
        )
    })

    const addNewTodo = (newTodo) => {

        if (newTodo !== '') {

            warning && setWarning(false)
            setTodos([
                //mettre un spred operateur afin de prendre lintegralité des todos
                ...todos, {
                    id: uuid(),
                    todo: newTodo

                }])

        } else {
            setWarning(true)
        }

    }

    const warningMsg = warning && <div className='alert alert-danger' role='alert'> veuillez indiquer un Todo</div>
    return (
        <div>

            {warningMsg}
            <h1 className='text-center'>{todos.length} To-Do</h1>

            <ul className='list-group'>
                {myTodo}
            </ul>
            <AddToDoForm addNewTodo={addNewTodo} />

        </div>

    )
}

export default ToDo