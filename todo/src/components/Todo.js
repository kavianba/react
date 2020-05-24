import React from 'react';
import { connect } from 'react-redux';

import { addItem, markAsComplete, markAsUnComplete, filterItem } from '../actions';

class Todo extends React.Component{
  status = ['ALL', 'COMPLETED', 'UNCOMPLETED'];

  constructor(){
    super();

    this.state = {
      todoItems: [],
      newTodo: '',
      selectedTab: 'ALL'
    };
  }

  onTextChange = (e) => {
    this.setState({
      newTodo: e.target.value
    });
  }

  onFormsubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.newTodo);
    this.setState({
      newTodo: ''
    });
  }

  renderList() {
    let filteredItems = [];
    if (this.state.selectedTab !== 'ALL') {
      filteredItems = [...this.props.items.filter((item) => {
        if (this.state.selectedTab === 'COMPLETED') {
          return item.completed;
        } else {
          return !item.completed;
        }
      })]
    } else {
      filteredItems = [...this.props.items];
    }

    return filteredItems.map((item) => {
      return (
        <tr key={item.id} >
          <td>{item.value}</td>
          <td>{item.completed === true ? 'COMPLETED' : 'NOT_COMPLETED'}</td>
          <td>{this.renderAction(item)}</td>
        </tr>
      )
    });
  }

  renderAction(item) {
    if (item.completed) {
      return (
        <input type="checkbox" className="form-check-input" id={item.id} onClick={this.markUnComplete}></input>
      );
    } else {
      return (
        <input type="checkbox" className="form-check-input" id={item.id} onClick={this.markComplete}></input>
      );
    }
  }

  markComplete = (e) => {
    this.props.markAsComplete(e.target.id, this.props.items);
  }

  markUnComplete = (e) => {
    this.props.markAsUnComplete(e.target.id, this.props.items);
  }

  filterStatus(e, status) {
    e.preventDefault();
    this.setState({
      selectedTab: status
    });
    this.props.filterItem(status, this.props.items);
  }

  renderStatusTab() {
    return this.status.map((s) => {
      let className = s.toUpperCase() === this.state.selectedTab.toUpperCase() ? 'nav-link active' : 'nav-link';
      return (
        <li className="nav-item" key={s}>
          <a className={className} href="#" onClick={(e) => { this.filterStatus(e, s)}}>{s}</a>
        </li>
      )
    });
  }
  
  render() {
    return (
      <div className="spacer">
        <h5>Todo Application</h5>
        <form onSubmit={this.onFormsubmit} className="spacer">
          <div className="form-row align-items-center">
            <div className="col">
              <label className="sr-only" htmlFor="addNew">New Todo</label>
              <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <div className="input-group-text">New Todo</div>
                </div>
                <input type="text" className="form-control" 
                      id="addNew" 
                      placeholder="" onChange={this.onTextChange} value={this.state.newTodo}/>
              </div>
           </div>
           <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
          </div>
          </div>
        </form>

        <ul className="nav nav-tabs">
          {this.renderStatusTab()}
        </ul>

        <div className="spacer"></div>
        <table className="table spacer">
          <tbody>
            {this.renderList()}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = function(state) {
  return { 
    items: state.items,
    filter: state.filter
  };
}

export default connect(mapStateToProps, { addItem, markAsComplete, markAsUnComplete, filterItem })(Todo);