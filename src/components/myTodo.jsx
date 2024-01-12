import { useSelector , useDispatch } from 'react-redux'
import { add } from '../actions/action'
import MyList from './myList'

const MyTodo = () => {

    let data = useSelector(state => state.todo)
    let dispatch = useDispatch()


    let textValue = (e)=> {
        e.preventDefault();
        if (e.target[0].value !== '') {
            dispatch(add(e.target[0].value))
            e.target[0].value = ''
        }
    }

    return (
        <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-10">
                        <h2 className="text-center mb-4">To-Do List</h2>
                        <form onSubmit={textValue}>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Enter a new task" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="submit">Add</button>
                                </div>
                            </div>
                        </form>
                            <ul className="list-group" id="taskList">{data.map((e,i) => <MyList key={i} data={e} />)}</ul>
                    </div>
                </div>
        </div>
    )
}

export default MyTodo