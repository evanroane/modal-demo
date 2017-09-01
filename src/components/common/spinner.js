import React from 'react';
import PropTypes from 'prop-types';


const Spinner = props => {
    return props.loading ? <div className='spinner'>🐶</div> : null;
};

Spinner.propTypes = {
    loading: PropTypes.bool,
};

export default Spinner;
