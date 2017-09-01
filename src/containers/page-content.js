// Libraries:
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions:
import * as modalActions from '../actions/modal';
import * as contentActions from '../actions/content';

// Components:
import PageContent from '../components/page-content';


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(modalActions, contentActions), dispatch)
    };
}

export default connect(
    null,
    mapDispatchToProps
)(PageContent);
