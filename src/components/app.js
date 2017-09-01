import React from 'react';
import PageContent from '../containers/page-content';
import ModalController from '../containers/modal-controller';
import Dialog from './modals/dialog/index';
import Lightbox from './modals/lightbox';


class App extends React.Component {
    render() {
        return (
            <div>
                <PageContent/>
                <ModalController
                    registry={{
                        dialog: Dialog,
                        lightbox: Lightbox,
                    }}
                />
            </div>
        );
    }
}

export default App;
