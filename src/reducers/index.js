import { combineReducers } from 'redux';
import modal from './modal';
import content from './content';

const rootReducer = combineReducers({
    modal,
    content,
});

export default rootReducer;
