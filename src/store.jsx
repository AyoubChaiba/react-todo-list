import { createStore, combineReducers } from 'redux';
import ReducerTodo from './redux/reducer'

let RootRedducer = combineReducers({
    todo : ReducerTodo
})

let store = createStore(RootRedducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store