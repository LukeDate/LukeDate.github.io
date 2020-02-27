import { createStore, combineReducers, applyMiddleware } from 'redux';
import messageReducer from './Redux/reducers/message';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  messageReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk),
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
