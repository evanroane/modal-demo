import React from 'react';
import PropTypes from 'prop-types';
import CloseModal from './close-modal';
import ModalControls from './modal-controls';


class Modal extends React.Component {
    constructor() {
        super();
        this.keyCapture = this.keyCapture.bind(this);
    }

    keyCapture(e) {
        if (e.key === 'Escape') {
            this.props.actions.closeModal();
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', this.keyCapture);
        document.querySelector('body').classList.add('modal-open');
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.keyCapture);
        document.querySelector('body').classList.remove('modal-open');
    }

    render() {
        return (
            <div className="modal-wrap">
                <div className={this.props.type}>
                    <CloseModal action={this.props.actions.closeModal}/>
                    <div className="modal-content">
                        <div className="modal-title">
                            {this.props.data.title}
                        </div>
                        {this.props.children}
                        <ModalControls data={this.props.data}/>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    data: PropTypes.shape({
        message: PropTypes.string,
        title: PropTypes.string.isRequired,
    }),
    actions: PropTypes.shape({
        openModal: PropTypes.func.isRequired,
        closeModal: PropTypes.func.isRequired,
    }),
    type: PropTypes.string.isRequired,
};

export default Modal;
