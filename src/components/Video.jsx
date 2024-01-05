import PropTypes from 'prop-types';

export default function Video(props) {
    Video.propTypes = {
        url : PropTypes.string,
        views: PropTypes.number,
    }

    return (
        <div className="item item-video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <p className="views">Просмотров: {props.views}</p>
        </div>
    )
}
