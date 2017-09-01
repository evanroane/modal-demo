import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function enhancer(){
    return composeEnhancers(applyMiddleware(thunk));
}

export default function configureStore(initialState={}) {
    return createStore(reducer, initialState, enhancer());
}
