import React from 'react';
import PropTypes from 'prop-types';
import RenderList from './render-list';
import Modal from '../modal';


const Dialog = props => (
    <Modal data={props.data} actions={props.actions} type="modal-dialog">
        {
            props.data.message ?
                <div className="modal-message">
                    {props.data.message}
                </div>
                : null
        }
        {
            props.data.list ? <RenderList list={props.data.list}/> : null
        }
    </Modal>
);

Dialog.propTypes = {
    data: PropTypes.shape({
        message: PropTypes.string,
        list: PropTypes.arrayOf(PropTypes.string.isRequired)
    }),
    actions: PropTypes.shape({
        openModal: PropTypes.func,
        closeModal: PropTypes.func,
    })
};

export default Dialog;
