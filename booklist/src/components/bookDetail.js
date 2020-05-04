import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>
    }

    return (
      <div className="col-sm-8">
        <h4>Title:  {this.props.book.title}</h4>
      </div>
    );
  }
}

const mapsStateToProps = (state) => {
  return { book: state.activeBook };
}

export default connect(mapsStateToProps)(BookDetail);