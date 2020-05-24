import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostCreate extends React.Component {
  renderInput = (formProps) => {
    const className = `form-group ${formProps.meta.touched && formProps.meta.error ? 'has-error' : ''}`;
  
    return (
      <div className={className}>
        <label htmlFor={formProps.name}>{formProps.label}</label>
        <input {...formProps.input} className="form-control"/>
       <div className="text-danger">
        {formProps.meta.touched ? formProps.meta.error : ''}
       </div>
      </div>
    );
  }


  onSubmitForm(values) {
    this.props.createPost(values, () => { this.props.history.push('/')});
  }

  render () {
    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmitForm.bind(this))}>
          <Field 
            name="title"
            component={this.renderInput}
            label="Title"
          />
          <Field 
            name="categories"
            component={this.renderInput}
            label="Categories"
          />
          <Field
            name="content"
            component={this.renderInput}
            label="Post content"
          />
          <div className="text-right">
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-default">Cancel</Link>
          </div>
        </form>
      </div>
    );
  }
}

function validate(values) {
  //console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a title!';
  }
  if (!values.categories) {
    errors.categories = 'Enter some categories.';
  }
  if(!values.content) {
    errors.content = 'Enter some content.'
  }
  // Validate the inputs from 'values'
  return errors;
}



export default reduxForm({
  validate,
  form: 'PostsCreateForm'
})(
  connect(null, { createPost })
  (PostCreate)
);