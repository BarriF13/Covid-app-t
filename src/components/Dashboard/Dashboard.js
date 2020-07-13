import React, { Component } from 'react';
import FormField from '../widgets/FormFields/formFields'
import style from './dashboard.module.css'
export class Dashboard extends Component {
  state = {
    postError: '',
    loading: false,
    formData: {
      author: {
        element: 'input',
        value: '',
        config: {
          name: 'author_input',
          type: 'text',
          placeholder: 'Enter the Post'
        },
        validation: {
          required: true

        },
        valid: false,
        touched: false,
        validationMessage: ''
      },
      title: {
        element: 'input',
        value: '',
        config: {
          name: 'title_input',
          type: 'text',
          placeholder: 'Enter the title'
        },
        validation: {
          required: true

        },
        valid: false,
        touched: false,
        validationMessage: ''
      }
    }
  }
  updateForm = (element) => {
    const newFormData = {
      ...this.state.formData
    }
    const newElement = {
      ...newFormData[element.id] //email
    }
    newElement.value = element.e.target.value;
    if (element.blur) {
      let validData = this.validate(newElement);
      // console.log(validData);

      newElement.valid = validData[0];
      newElement.validationMessage = validData[1];
    }
    newElement.touched = element.blur;
    newFormData[element.id] = newElement;
    console.log();

    this.setState({
      formData: newFormData
    })
  }

  validate = (element) => {
    let error = [true, ''];

    if (element.validation.required) {
      const valid = element.value.trim() !== '';
      const message = `${!valid ? 'This field is required' : ''}`;
      error = !valid ? [valid, message] : error;
    }
    return error;
  }
  submitForm = (e) => {

    e.preventDefault();
    let dataToSubmit = {};
    let formIsValid = true;

    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
    }
    for (let key in this.state.formData) {
      formIsValid = this.state.formData[key].valid && formIsValid;
    }
    

    if(formIsValid){
      console.log('Submit post');
    }else {
      this.setState({
        postError: 'Something went wrong '
      })
    }
  }
  submitButton = () => (
    this.state.loading ?
      'loading...' :
      <div>

        <button type='submit'> Add post </button>
      </div>
  )
  showError=()=>(
    this.state.postError !== ''? 
  <div className={style.errorLabel}>{this.state.postError}</div>
    :
    ''
  )
  render() {
    return (
      <div>
        <div className={style.postContainer}>
          <form onSubmit={this.submitForm}>
            <h2>Add post </h2>
            <FormField
              id={'title'}
              formData={this.state.formData.title}
              change={(element) => this.updateForm(element)}
            />
             <FormField
              id={'author'}
              formData={this.state.formData.author}
              change={(element) => this.updateForm(element)}
            />
            {this.submitButton()}
            { this.showError() }
          </form>

        </div>
      </div>
    )
  }
}

export default Dashboard;
