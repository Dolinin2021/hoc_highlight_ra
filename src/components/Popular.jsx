import PropTypes from 'prop-types';

export default function Popular(props) {
    Popular.propTypes = {
        children : PropTypes.object,
    }

    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
}
