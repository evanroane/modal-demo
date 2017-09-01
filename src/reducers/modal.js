import { MODAL_OPENED, MODAL_CLOSED} from '../constants/modal';
import initialState from '../store/initial-state';

export default function modalReducer(state = {}, action = {}) {
    switch (action.type) {

        case MODAL_OPENED:
            return Object.assign({}, state, {
                current: action.current,
                data: action.data,
            });

        case MODAL_CLOSED:
            return initialState.modal;

        default:
            return state;
    }
}
