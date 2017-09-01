import isEmpty from 'lodash/isEmpty';
import React from 'react';
import PropTypes from 'prop-types';
import Modal from './modal';
import Spinner from '../common/spinner';


const Lightbox = props => (
    <Modal data={props.data} actions={props.actions} type="modal-lightbox">
        {
            props.data.message ?
                <div className="modal-message">
                    {props.data.message}
                </div>
                : null
        }
        <div className="modal-lightbox-image-wrapper">
            <Spinner loading={isEmpty(props.content.url)}/>
            <img src={props.content.url} />
        </div>
    </Modal>
);

Lightbox.propTypes = {
    data: PropTypes.shape({
        message: PropTypes.string,
    }),
    content: PropTypes.shape({
        url: PropTypes.string,
    }),
    actions: PropTypes.shape({
        openModal: PropTypes.func,
        closeModal: PropTypes.func,
    })
};

export default Lightbox;
