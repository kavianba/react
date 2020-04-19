import React from 'react';
import { connect } from 'react-redux';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    if(!this.props.stream) {
      this.props.fetchStream(this.props.match.params.id);
    }
  }

  onDelete = () => {
    this.props.deleteStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui negative button" 
                onClick={this.onDelete}>Delete</button>
        <button className="ui button" 
                onClick={() => history.push('/')}>Cancel</button>
      </React.Fragment>
    );
  }

  renderContent() {
    return (
      <div>
        <p>Are you sure you want to delete the stream with title: </p>
        <h4>{this.props.stream.title}</h4>
      </div>
    );
  }
  
  render () {
    if(!this.props.stream) {
      return <div>Loading...</div>;
    }

    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
        />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);