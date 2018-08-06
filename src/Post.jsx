import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {
  static propTypes = {
    timestamp: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  };

  state = {
    likes: 0,
  };

  handleAddLikes = () => {
    this.setState(prevState => ({
      likes: prevState.likes + 1,
    }));
  };

  render() {
    const { timestamp, name, message } = this.props;
    const { likes } = this.state;
    const formattedDateString = new Date(timestamp).toString();
    return (
      <li>
        <hr />
        <h2>{name} says: </h2>
        <h3>{message}</h3>
        <p>Posted at: {formattedDateString}</p>
        <button type="button" onClick={this.handleAddLikes}>Like this comment</button>
        <p>{likes} Likes for this post</p>
      </li>
    );
  }
}

export default Post;
