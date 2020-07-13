import React from 'react'
import style from './formFields.module.css'




const FormField = ({ formData, change, id }) => {


  const renderTemplate = () => {

    let formTemplate = null;
    //match whatever type of input we have and render something
    switch (formData.element) {
      case ('input'):
        formTemplate = (
          <div>
           <input
           {...formData.config}
           value={formData.value}
           onBlur={(e)=>change({e , id, blur:true})}
           onChange={(e)=>change({e , id, blur:false})}
           
           />
          </div>
        )
        break;
      default:
        formTemplate= null;
    }
    return formTemplate;
  }


  return (
    <div>
      {renderTemplate()}
    </div>
  )
}

export default FormField;
