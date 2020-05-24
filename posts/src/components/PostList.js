import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostList extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList() {
    if (!this.props.posts) {
      return <div>Loading...</div>
    };

    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            {post.title}
          </Link>
        </li>
      );
    });
  }

  render () {
    return (
      <div>
        <div className="text-right">
          <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

export default connect(mapStateToProps, { fetchPosts })(PostList);