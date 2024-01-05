import PropTypes from 'prop-types';

export default function Article(props) {
    Article.propTypes = {
        title : PropTypes.string,
        views: PropTypes.number,
    }

    return (
        <div className="item item-article">
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
}
