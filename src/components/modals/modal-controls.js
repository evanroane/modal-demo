import React from 'react';
import PropTypes from 'prop-types';
import Button from '../common/button';


const ModalControls = props => {
    return (
        <div className="modal-controls">
            {
                props.data.primaryAction && props.data.primaryActionText?
                    <Button
                        primary={true}
                        text={props.data.primaryActionText}
                        action={props.data.primaryAction}
                    />
                    : null
            }
            {
                props.data.secondaryAction && props.data.secondaryActionText?
                    <Button
                        primary={false}
                        text={props.data.secondaryActionText}
                        action={props.data.secondaryAction}
                    />
                    : null
            }
        </div>
    );
};

ModalControls.propTypes = {
    data: PropTypes.shape({
        primaryAction: PropTypes.func.isRequired,
        primaryActionText: PropTypes.string.isRequired,
        secondaryAction: PropTypes.func,
        secondaryActionText: PropTypes.string,
    }),
};

export default ModalControls;
