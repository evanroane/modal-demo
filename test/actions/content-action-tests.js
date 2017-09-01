import assert from 'assert';
import { spy } from 'sinon';
import fetchMock from 'fetch-mock';
import * as contentActions from '../../src/actions/content';

describe('Content actions', function() {
    describe('#fetchRemoteContent', function() {
        it('should return the correctly formatted actions for a 200', function() {
            fetchMock.mock('*', url => ({
                status: 200,
                body: {
                    data: {image_url: 'http://www.image.com/image_url' }
                },
            }));

            const thunk = contentActions.fetchRemoteContent();
            const dispatch = spy();

            thunk(dispatch)
                .then(() => {
                    assert.equal(dispatch.callCount, 2);
                    assert.deepEqual(dispatch.getCall(0).args[0], { type: 'FETCHING_IMAGE_URL' });
                    assert.deepEqual(dispatch.getCall(1).args[0], { type: 'IMAGE_URL_FETCHED', url: 'http://www.image.com/image_url' });
                }).catch(error => console.log(error));
            fetchMock.restore();
        });
    });

    describe('#fetchRemoteContent', function() {
        it('should return the correctly formatted actions for a 500', function() {
            fetchMock.mock('*', url => ({
                status: 500,
                body: { error: 500 }
            }));

            const thunk = contentActions.fetchRemoteContent();
            const dispatch = spy();

            thunk(dispatch)
                .then(() => {
                    assert.equal(dispatch.callCount, 4);
                    assert.deepEqual(dispatch.getCall(0).args[0], { type: 'FETCHING_IMAGE_URL' });
                    assert.deepEqual(dispatch.getCall(1).args[0], { type: 'IMAGE_URL_FETCH_FAILED' });
                    assert.deepEqual(dispatch.getCall(2).args[0], { type: 'MODAL_CLOSED' });
                    const fourthDispatch = dispatch.getCall(3).args[0];
                    assert.equal(fourthDispatch.type, 'MODAL_OPENED');
                    assert.equal(fourthDispatch.current, 'dialog');
                    assert.equal(fourthDispatch.data.title, 'Error');
                    assert.equal(fourthDispatch.data.message, 'We couldn\'t find you a doggo right now. Check your network connection and try again.')
                    assert.equal(fourthDispatch.data.primaryActionText, 'Try again')
                    assert.equal(typeof fourthDispatch.data.primaryAction, 'function')

                }).catch(error => console.log(error));
            fetchMock.restore();
        });
    });
});
