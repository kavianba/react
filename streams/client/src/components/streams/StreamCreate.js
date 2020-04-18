import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
  
  renderError({error, touched}) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      )
    }
  }

  renderInput = (formProps) => {
    const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error': ''}`

    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <input {...formProps.input} autoComplete="off"/>
        {this.renderError(formProps.meta)}
      </div>
    );
  }

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    // This method is from redux-form props
    // this.props.handleSubmit
    return (
      <div>
        <h4>Create Stream</h4>
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field name="title" 
                 component={this.renderInput}
                 label="Enter Title"/>
          <Field name="description" 
                 component={this.renderInput}
                 label="Enter description"/>
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  } 
}

const validate = (formValues) => {
  let errors = {};
  if(!formValues.title) {
    errors.title = 'Please enter title';
  }
  if(!formValues.description) {
    errors.description = 'Please enter description';
  }

  return errors;
};

export default reduxForm({ 
  form: 'streamCreate',
  validate: validate 
})(StreamCreate);