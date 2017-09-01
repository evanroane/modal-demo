import { MODAL_OPENED, MODAL_CLOSED } from '../constants/modal';

export function openModal(current, data) {
    return { type: MODAL_OPENED, current, data};
}

export function closeModal() {
    return { type: MODAL_CLOSED };
}
