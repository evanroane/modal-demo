import React from 'react';
import PropTypes from 'prop-types';


const CloseModal = props => (
    <div className="modal-x">
        <span
            className="modal-x-icon"
            onClick={props.action}
        >
            &times;
        </span>
    </div>
);

CloseModal.propTypes = {
    action: PropTypes.func.isRequired,
};

export default CloseModal;
