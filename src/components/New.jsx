import PropTypes from 'prop-types';

export default function New(props) {
    New.propTypes = {
        children : PropTypes.object,
    }

    return (
        <div className="wrap-item wrap-item-new">
            <span className="label">New!</span>
            {props.children}
        </div>
    )
}
