import React from 'react';
import BookList from './bookList';
import BookDetail from './bookDetail';

const App = function() {
  return (
    <div className="container">
      <BookList/>
      <BookDetail/>
    </div>
  )
}

export default App;