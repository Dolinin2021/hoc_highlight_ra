import React from "react";
import New from './New';
import Popular from './Popular';
import Video from "./Video";
import Article from "./Article";
import PropTypes from 'prop-types';

const fineLook = (newPost, popularPost) => Component => class extends React.Component {
  static propTypes = {
    views: PropTypes.number,
  }

  static get displayName() {
    const name = Component.displayName || Component.name || 'Component';
    return `WithData(${name})`;
  }
  
  render() {
    return this.props.views > popularPost ? <Popular><Component {...this.props} /></Popular> :
    this.props.views < newPost ? <New><Component {...this.props} /></New> : <Component {...this.props} />
  }
}

export const AddFineVideo = fineLook(100, 1000)(Video);
export const AddFineArticle = fineLook(100, 1000)(Article);
