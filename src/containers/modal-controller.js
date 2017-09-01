// Libraries:
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions:
import * as modalActions from '../actions/modal';

// Components:
import ModalController from '../components/modals/controller';

function mapStateToProps(state, ownProps) {
    return {
        modal: state.modal,
        registry: ownProps.registry,
        content: state.content,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(modalActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalController);
