import {
    FETCHING_IMAGE_URL,
    IMAGE_URL_FETCHED,
    IMAGE_URL_FETCH_FAILED,
} from '../constants/content';
import { openModal, closeModal } from './modal';

export function fetchRemoteContent() {
    return dispatch => {
        dispatch({ type: FETCHING_IMAGE_URL });
        return fetch('https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=pupper')
            .then(response => response.json())
            .then(response => dispatch({type: IMAGE_URL_FETCHED, url: response.data.image_url}))
            .catch(() => {
                dispatch({type: IMAGE_URL_FETCH_FAILED});
                dispatch(closeModal());
                dispatch(openModal('dialog', {
                    title: 'Error',
                    message: 'We couldn\'t find you a doggo right now. Check your network connection and try again.',
                    primaryAction: () => {
                        dispatch(openModal('lightbox', {
                            title: 'Do you like doggos?',
                            primaryAction: () => dispatch(fetchRemoteContent()),
                            primaryActionText: 'More doggos please!',
                            secondaryAction: () => dispatch(closeModal()),
                            secondaryActionText: 'Close',
                        }));
                        dispatch(fetchRemoteContent());
                    },
                    primaryActionText: 'Try again',
                }));
            });
    };
}
