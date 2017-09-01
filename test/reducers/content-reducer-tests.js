import assert from 'assert';
import contentReducer from '../../src/reducers/content';
import initialState from "../../src/store/initial-state";

describe('Content reducer', function() {
    describe('#modalReducer', function() {
        it("should respond correctly to the IMAGE_URL_FETCHED action", () => {
            const action = {
                type: "IMAGE_URL_FETCHED",
                url: "https://www.doggo-gifs.net/cool-pic.gif"
            };
            const actual = contentReducer(initialState.content, action);
            const expected = {
                url: "https://www.doggo-gifs.net/cool-pic.gif"
            };

            assert.deepEqual(actual, expected);
        });

        it("should respond correctly to the IMAGE_URL_FETCH_FAILED action", () => {
            const initialState = {
                url: "https://www.doggo-gifs.net/cool-pic.gif"
            };
            const action = {
                type: "IMAGE_URL_FETCH_FAILED",
            };
            const actual = contentReducer(initialState, action);
            const expected = { url: '' };

            assert.deepEqual(actual, expected);
        });

        it("should respond correctly to the FETCHING_IMAGE_URL action", () => {
            const initialState = {
                url: "https://www.doggo-gifs.net/cool-pic.gif"
            };
            const action = {
                type: "FETCHING_IMAGE_URL",
            };
            const actual = contentReducer(initialState, action);
            const expected = { url: '' };

            assert.deepEqual(actual, expected);
        });

        it("should respond correctly to the MODAL_CLOSED action", () => {
            const initialState = {
                url: "https://www.doggo-gifs.net/cool-pic.gif"
            };
            const action = {
                type: "MODAL_CLOSED",
            };
            const actual = contentReducer(initialState, action);
            const expected = { url: '' };

            assert.deepEqual(actual, expected);
        });
    });
});


