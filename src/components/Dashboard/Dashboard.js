import React, { Component } from 'react';
import FormField from '../widgets/FormFields/formFields'
import style from './dashboard.module.css';

import { firebaseHospitals, firebaseArticles, firebase } from '../../firebase'

import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import UpLoader from '../widgets/FileUploader/fileUploader'

export class Dashboard extends Component {
  state = {
    EditorState: EditorState.createEmpty(),
    postError: '',
    loading: false,
    formData: {
      author: {
        element: 'input',
        value: '',
        config: {
          name: 'author_input',
          type: 'text',
          placeholder: 'Enter your name'
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
      },
      body: {
        element: 'texteditor',
        value: '',
        valid: true
      },
      image: {
        element: 'image',
        value: '',
        valid: true
      },
      hospital: {
        element: 'select',
        value: '',
        config: {
          name: 'hospitals_input',
          options: []
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
  componentDidMount() {
    this.loadHospitals()
  }
  loadHospitals = () => {
    firebaseHospitals.once('value')
      .then((snapshot) => {
        let hospital = [];

        snapshot.forEach((childSnapshot) => {
          hospital.push({
            id: childSnapshot.val().hospitalId,
            name: childSnapshot.val().city
          })
        })

        const newFormData = { ...this.state.formData }
        const newElement = { ...newFormData['hospital'] }

        newElement.config.options = hospital;
        newFormData['hospital'] = newElement;
        // console.log(newFormData);

        this.setState({
          formData: newFormData
        })

      })
  }
  updateForm = (element, content = '') => {
    const newFormData = {
      ...this.state.formData
    }
    const newElement = {
      ...newFormData[element.id] //email
    }

    if (content === '') {
      newElement.value = element.e.target.value;
    } else {
      newElement.value = content;
    }

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

    console.log(dataToSubmit);


    if (formIsValid) {
      this.setState({
        loading: true,
        postError: ''
      })

      firebaseArticles.orderByChild("id")
        .limitToLast(1).once('value')
        .then(snapshot => {
          let articleId = null;
          snapshot.forEach(childSnapshot => {
            articleId = childSnapshot.val().id
          })
          // console.log(articleId);
          dataToSubmit['date'] = firebase.database.ServerValue.TIMESTAMP
          dataToSubmit['id'] = articleId + 1;
          dataToSubmit['hospital'] = parseInt(dataToSubmit['hospital'], 10);

          // console.log(dataToSubmit);

          firebaseArticles.push(dataToSubmit)
            .then(article => {
              this.props.history.push(`/articles/${article.key}`)
            }).catch(e => {
              this.setState({
                postError: e.message
              })
            })
        })

    } else {
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
  showError = () => (
    this.state.postError !== '' ?
      <div className={style.errorLabel}>{this.state.postError}</div>
      :
      ''
  )
  onEditorStateChange = (editorState) => {
    // console.log(editorState);

    let contentState = editorState.getCurrentContent();
    //console.log(contentState);
    let rawState = convertToRaw(contentState)
    //with rawState we can save it to data base in json file but this project we are using html
    //console.log(rawState);

    let html = stateToHTML(contentState)
    // console.log(html);

    this.updateForm({ id: 'body' }, html)

    this.setState({
      editorState
    })
  }
  storeFilename = (filename) => {
    this.updateForm({ id: 'image' }, filename)
  }

  render() {
    return (

      <div className={style.postContainer}>
        <form onSubmit={this.submitForm}>
          <h2>Add post </h2>

          <UpLoader
            fileName={(filename) => this.
            storeFilename(filename)}
          />

          <FormField
            id={'author'}
            formData={this.state.formData.author}
            change={(element) => this.updateForm(element)}
          />

          <FormField
            id={'title'}
            formData={this.state.formData.title}
            change={(element) => this.updateForm(element)}
          />


          <Editor
            editorState={this.state.editorState}
            wrapperClassName="myEditor-wrapper"
            editorClassName="myEditor-editor"
            onEditorStateChange={this.onEditorStateChange}
          />
          <FormField
            id={'hospital'}
            formData={this.state.formData.hospital}
            change={(element) => this.updateForm(element)}
          />
          {this.submitButton()}
          {this.showError()}
        </form>

      </div>

    )
  }
}

export default Dashboard;
