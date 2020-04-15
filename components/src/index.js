import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          <span>Are you sure want to go this?</span>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today at 5:00PM" text="Nice blog post!" avatar={faker.image.avatar()}/>  
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Alex" timeAgo="Today at 1:00PM" text="Good Job!" avatar={faker.image.avatar()}/>
      </ApprovalCard> 
      <ApprovalCard> 
        <CommentDetail author="Jane" timeAgo="Yesterday at 4:00PM" text="Useful!" avatar={faker.image.avatar()}/>
      </ApprovalCard> 
    </div>
  )
};

ReactDOM.render(<App/>, document.querySelector('#root'));