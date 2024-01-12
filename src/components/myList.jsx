import {update , remove , marke} from '../actions/action'
import { useDispatch } from 'react-redux'
import { useState } from 'react'


const MyList = (props) => {

    let {text ,id,complete} = props.data

    let dispatch = useDispatch()

    let [ValueChange ,setValueChange] = useState(text)

    let [isEditing  ,setIsEditing] = useState(true)

    let changevalue =(e)=>{
        setValueChange(e.target.value)
    }

    let chcek = (chcek,n,value)=> {
        if (chcek) {
            setIsEditing(!isEditing)
        }else {
            dispatch(update(n,value))
            setIsEditing(!isEditing)
        }
    }

    let completeCheck = (e,id)=> {
        dispatch(marke(id,e.target.checked))
    }

    return (
        <li className='list-group-item'>
            <div className="input-group">
                <div className="input-group-text">
                    <input className="form-check-input mt-0" type="checkbox" checked={complete} onChange={(e) => completeCheck(e,id) }/>
                </div>
                <input type="text" className={`form-control ${complete  && 'text-decoration-line-through'}`}  value={!isEditing ? ValueChange : text} onChange={!isEditing ? changevalue : null} readOnly={isEditing}/>
                <button className={`btn btn-outline-secondary ${isEditing ? `text-bg-warning` : `text-bg-success`}`} type="button" onClick={()=> chcek(isEditing,id,ValueChange) }>{isEditing ? 'edit' : 'save'}</button>
                <button className="btn btn-outline-secondary text-bg-danger" type="button" onClick={()=> dispatch(remove(id))}>&#10005;</button>
            </div>
        </li>
    )
}

export default MyList
