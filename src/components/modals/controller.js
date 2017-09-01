import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const ModalController = props => {
    let item = null;

    if (props.registry[props.modal.current]) {
        const CurrentModal = props.registry[props.modal.current];
        item = (
            <CurrentModal
                key={'current-modal'}
                data={props.modal.data}
                content={props.content}
                actions={props.actions}
            />
        );
    }

    return (
        <ReactCSSTransitionGroup
            transitionName="modal"
            transitionEnterTimeout={700}
            transitionLeaveTimeout={300}
        >
            {item}
        </ReactCSSTransitionGroup>
    );
};

ModalController.propTypes = {
    current: PropTypes.string,
    data: PropTypes.shape({
        title: PropTypes.string,
        message: PropTypes.string,
        imageUrl: PropTypes.string,
    }),
    registry: PropTypes.object.isRequired,
};

export default ModalController;
