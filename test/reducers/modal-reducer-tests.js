import assert from 'assert';
import modalReducer from '../../src/reducers/modal';
import initialState from "../../src/store/initial-state";

describe('Modal reducer', function() {
    describe('#modalReducer', function() {
        it("should respond correctly to the MODAL_OPENED action", () => {
            const action = {
                type: "MODAL_OPENED",
                current: "dialog",
                data: {
                    title: "Hello",
                    message: "there",
                    list: ['a', 'b'],
                },
            };
            const actual = modalReducer(initialState.modal, action);
            const expected = {
                current: 'dialog',
                data: {
                    title: 'Hello',
                    message: 'there',
                    list: ['a', 'b'],
                }
            };

            assert.deepEqual(actual, expected);
        });

        it("should respond correctly to the MODAL_CLOSED action", () => {
            const initialState = {
                current: 'dialog',
                data: {
                    title: 'Hello',
                    message: 'there',
                    list: ['a', 'b'],
                }
            };
            const action = {
                type: "MODAL_CLOSED",
            };
            const actual = modalReducer(initialState, action);
            const expected = { current: '', data: {} };

            assert.deepEqual(actual, expected);
        });
    });
});


