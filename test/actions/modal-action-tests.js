import assert from 'assert';
import * as modalActions from '../../src/actions/modal';

describe('Modal actions', function() {
    describe('#openModal', function() {
        it('should return the correctly formatted action', function() {
            const actual = modalActions.openModal('dialog', { funny: 'movies' });
            const expected = { type: 'MODAL_OPENED', current: 'dialog', data: { funny: 'movies' } };
            assert.deepEqual(expected, actual);
        });
    });

    describe('#closeModal', function() {
        it('should return the correctly formatted action', function() {
            const actual = modalActions.closeModal();
            const expected = { type: 'MODAL_CLOSED' };
            assert.deepEqual(expected, actual);
        });
    });
});
