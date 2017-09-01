import React from 'react';
import PropTypes from 'prop-types';


const RenderList = props => (
    <ul>
        {props.list.map((item, i) => (<li key={i}>{item}</li>))}
    </ul>
);

RenderList.propTypes = {
    list: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default RenderList;
