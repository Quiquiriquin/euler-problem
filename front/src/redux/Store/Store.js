import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import appReducer from '../Reducers/app-reducer';


const reducer = combineReducers({
	app: appReducer,
	form: formReducer
})

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__())
export default store