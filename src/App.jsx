import React from 'react';
import Post from './Post';

class App extends React.Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'Brenton',
        message: 'HI',
      },
      {
        id: 2,
        name: 'Martha',
        message: 'Whats up?',
      },
    ],
    newPost: {
      name: '',
      message: '',
    },
  };

  handleInputChange = e => {
    const keyName = e.target.name;
    const inputValue = e.target.value;

    this.setState(prevState => ({
      newPost: {
        ...prevState.newPost,
        [keyName]: inputValue,
      },
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit the form');
  };

  render() {
    return (
      <div>
        <h1>Our Chat App</h1>
        <ul>
          {this.state.posts.map(post => (
            <Post
              key={post.id}
              name={post.name}
              message={post.message}
              timestamp={Date.now()}
            />
          ))}
        </ul>
        <div style={{ background: 'beige' }}>
          <form onSubmit={this.handleSubmit}>
            <input
              name="name"
              type="text"
              placeholder="name"
              onChange={this.handleInputChange}
              value={this.state.newPost.name}
            />
            <input
              name="message"
              type="text"
              placeholder="message"
              onChange={this.handleInputChange}
              value={this.state.newPost.message}
            />
            <button type="submit">Add Post</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
