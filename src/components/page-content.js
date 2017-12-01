import React from 'react';
import PropTypes from 'prop-types';


class PageContent extends React.Component {
    constructor() {
        super();
        this.openLightbox = this.openLightbox.bind(this);
        this.openSpecDialog = this.openSpecDialog.bind(this);
    }

    openLightbox() {
        this.props.actions.openModal('lightbox', {
            title: 'Do you like doggos?',
            primaryAction: this.props.actions.fetchRemoteContent,
            primaryActionText: 'More doggos please!',
            secondaryAction: this.props.actions.closeModal,
            secondaryActionText: 'Close',
        });
        this.props.actions.fetchRemoteContent();
    }

    openSpecDialog() {
        this.props.actions.openModal('dialog', {
            title: 'Demo specifications',
            list: [
                'Built with React and Redux ✅',
                'Written in ES6 and transpiled to ES5 ✅',
                'Launches and closes modals ✅',
                'Closes with "x" button ✅ and ESC key ✅',
                'When modals are open, the page does not scroll. ✅',
                'Fetches remote content ✅',
                'Renders remote content ✅',
                'CSS animations/transitions for opening effects ✅',
                'Used eslint to analyze code style ✅',
                'Unit tested business logic ✅',
                'Image loading state is visible until loading is complete ✅',
            ],
            primaryAction: this.props.actions.closeModal,
            primaryActionText: 'Close',
        });
    }

    render() {
        return (
            <div>
                <header className="page-header">Modal Demo</header>
                <div className="content-area">
                    <div className="button-container">
                        <div
                            className="modal-trigger-button"
                            onClick={this.openLightbox}
                        >
                            Open Lightbox
                        </div>
                        <div
                            className="modal-trigger-button"
                            onClick={this.openSpecDialog}
                        >
                            Open spec dialog
                        </div>
                    </div>
                </div>
                <footer className="page-footer">Made with ❤️ by Evan Roane</footer>
            </div>
        );
    }
}

PageContent.propTypes = {
    actions: PropTypes.shape({
        fetchRemoteContent: PropTypes.func.isRequired,
        openModal: PropTypes.func.isRequired,
        closeModal: PropTypes.func.isRequired,
    }).isRequired,
};

export default PageContent;
