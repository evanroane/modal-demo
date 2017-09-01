import {
    FETCHING_IMAGE_URL,
    IMAGE_URL_FETCHED,
    IMAGE_URL_FETCH_FAILED
} from '../constants/content';
import { MODAL_CLOSED } from '../constants/modal';
import initialState from '../store/initial-state';

export default function contentReducer(state=initialState.content, action = {}) {
    switch (action.type) {

        case IMAGE_URL_FETCHED:
            return { url: action.url };

        case FETCHING_IMAGE_URL:
        case IMAGE_URL_FETCH_FAILED:
        case MODAL_CLOSED:
            return { url: '' };

        default:
            return state;
    }
}
