let todoState = []

let ReducerTodo = (state = todoState , action)=>{
    switch (action.type) {
        case 'add' : return [
            ...state , {
                id : ++state.length ,
                text : action.text ,
                complete : false
            }
        ]
        case 'remove' : return state.filter( f => f.id !== action.id)
        case 'update' : return state.map( e => e.id === action.id ?  {
            ...e ,
            text : action.text
        } : e )
        case 'marke' : return state.map( e => e.id === action.id ?  {
            ...e ,
            complete : action.complete
        } : e )
        default : return state
    }
}

export default ReducerTodo