import React from 'react';
import PropTypes from 'prop-types';
import './Square.css';

export default class Square extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
        };
    }

    render () {
        const size = `${this.props.size}px`;
        const style = {
            width: size,
            height: size,
            backgroundColor: this.props.initialColor,
        };
        return (
            <div className="SquareContainer">
                <div style={style} className="Square" />
            </div>
        );
    }
}

Square.propTypes = {
    initialColor: PropTypes.string,
    size: PropTypes.number.isRequired,
};

Square.defaultProps = {
    initialColor: 'blue',
};