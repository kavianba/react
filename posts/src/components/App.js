import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostList from './PostList';
import PostCreate from './PostCreate';
import PostShow from './PostShow';
import '../styles/styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/posts/new" component={PostCreate}/>
              <Route path="/posts/:id" component={PostShow}/>
              <Route path="/" component={PostList}/>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;