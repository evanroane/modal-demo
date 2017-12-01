import React from 'react';
import isEmpty from 'lodash/isEmpty';

class ImageWrapper extends React.Component {
    constructor() {
        super();
        this.state = {loaded: false};
    }

    componentWillMount() {
        if (!isEmpty(this.props.imageUrl)) {
            const img = new Image();
            img.src = this.props.imageUrl;
            img.onload = () => this.setState({loaded: true});
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!isEmpty(nextProps.imageUrl) && this.props.imageUrl !== nextProps.imageUrl) {
            this.setState({loaded: false});
            const img = new Image();
            img.src = nextProps.imageUrl;
            img.onload = () => this.setState({loaded: true});
        }
    }

    render() {
        return this.state.loaded ? <img src={this.props.imageUrl} /> : this.props.children;
    }
}

export default ImageWrapper;
