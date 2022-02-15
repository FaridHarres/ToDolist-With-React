import react, { useState } from "react"

const AddToDoForm = (props) => {

    const [addTodo, setAddTodo] = useState('')


    const handleTodo = (e) => {
        e.preventDefault()
        props.addNewTodo(addTodo)



        //popur laisser l'input vide apres avoir validé
        setAddTodo('')

    }



    // console.log(addTodo)

    return (
        <form className="mt-4" onSubmit={handleTodo}>
            <div className="card card-body">
                <div className="form-group">
                    <label>Ajouter Todo</label>
                    <input className="form-control" type="text" value={addTodo} onChange={(e) => setAddTodo(e.target.value)}></input>
                    <input className="btn btn-success mt-4" type="submit"></input>
                </div>
            </div>
        </form>
    )
}

export default AddToDoForm

//onchange = a chaque fois que je tape qqchose le changement est stocké