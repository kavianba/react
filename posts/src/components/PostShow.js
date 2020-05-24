import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost, deletePost } from '../actions';

class PostShow extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    
    this.props.fetchPost(id);
  } 

  onDeleteClick = () => {
    this.props.deletePost(this.props.match.params.id, () => { this.props.history.push('/')});
  }

  render () {
    if (!this.props.post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <div className="margin-bottom">
          <Link to="/" className="btn btn-link">Back To Index</Link>
          <button onClick={this.onDeleteClick} className="btn btn-danger pull-right">Delete</button>
        </div>
        <div className="list-group">
          <dl className="list-group-item">
            <dt>Title</dt>
            <dd>{this.props.post.title}</dd>
          </dl>
          <dl className="list-group-item">
            <dt>Categories</dt>
            <dd>{this.props.post.categories}</dd>
          </dl>
          <dl className="list-group-item">
            <dt>Post Content</dt>
            <dd>{this.props.post.content}</dd>
          </dl>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  console.log(state.posts);
  return {
    post: state.posts[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);