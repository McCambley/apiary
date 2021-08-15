/* eslint-disable no-unused-expressions */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './Form.css';
import XIcon from '../../images/x-icon.svg';

function Form(props) {
  const [displayForm, setDisplayForm] = React.useState(true);
  const [isCompleted, setIsCompleted] = React.useState(false);

  const initialValues = { company: '', email: '', description: '', name: '' };
  const [inputValues, setInputValues] = React.useState(initialValues);
  const [inputErrors, setInputErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  // This will clear all values if user closes form without submitting. Lots of repeated code!! How can I improve this?
  function clearValues() {
    inputValues.company = '';
    inputValues.email = '';
    inputValues.description = '';
    inputValues.name = '';
    inputErrors.company = '';
    inputErrors.email = '';
    inputErrors.description = '';
    inputErrors.name = '';
  }

  function handleModalClick(e) {
    if (e.target.classList.contains('modal_open')) {
      props.onClose();
      clearValues();
    }
  }

  function handleEscClose(e) {
    if (e.key === 'Escape') {
      props.onClose();
      clearValues();
    }
  }
  window.addEventListener('keydown', handleEscClose);

  function handleSubmit(e) {
    e.preventDefault();
    setInputErrors(validate(inputValues));
    setIsSubmitting(true);
  }

  // form validation handler
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = 'Email address is required';
    } else if (!regex.test(values.email)) {
      errors.email = 'Invalid email format';
    }

    if (!values.company) {
      errors.company = 'Company name is required';
    }

    if (!values.description) {
      errors.description = 'Task description is required';
    }

    if (!values.name) {
      errors.name = 'Name is required';
    }

    return errors;
  };

  // If there are no errors and user is sumbitting, submit form
  React.useEffect(() => {
    if (Object.keys(inputErrors).length === 0 && isSubmitting) {
      submit();
    }
  });

  const submit = () => {
    setDisplayForm(false);
    setIsCompleted(true);
  };

  return (
    <div className={`modal ${props.isOpen ? 'modal_open' : ''}`} onClick={handleModalClick}>
      <div className="modal__content" style={{ display: displayForm ? 'block' : 'none' }}>
        <img src={XIcon} alt="close button" />
        <h2 className="modal__title">Delegate us your task! Fill in this form:</h2>
        <form className="form" onSubmit={handleSubmit} noValidate>
          <label className="form__label form__label_type_company" htmlFor="company-name">
            Your company name *
            <input
              type="text"
              id="company"
              name="company"
              className="form__input form__input_type_company"
              autoComplete="off"
              placeholder="Company Name"
              onChange={handleChange}
              value={inputValues.company}
            />
            <span className={`error ${inputErrors.company && 'error_visible'}`}>
              {inputErrors.company}
            </span>
          </label>

          <label className="form__label form__label_type_email" htmlFor="email">
            Your email *
            <input
              type="email"
              id="email"
              name="email"
              className="form__input form__input_type_email"
              autoComplete="off"
              placeholder="email@email.com"
              onChange={handleChange}
              value={inputValues.email}
            />
            <span className={`error ${inputErrors.email && 'error_visible'}`}>
              {inputErrors.email}
            </span>
          </label>

          <label className="form__label form__label_type_description" htmlFor="description">
            Describe your task *
            <textarea
              className="form__input form__input_type_description"
              id="description"
              name="description"
              autoComplete="off"
              placeholder="We want to.."
              onChange={handleChange}
              value={inputValues.description}
            />
            <span className={`error ${inputErrors.description && 'error_visible'}`}>
              {inputErrors.description}
            </span>
          </label>

          <label className="form__label form__label_type_email" htmlFor="name">
            How can we call you? *
            <input
              type="text"
              id="name"
              name="name"
              className="form__input form__input_type_company"
              autoComplete="off"
              placeholder="My name is"
              onChange={handleChange}
              value={inputValues.name}
            />
            <span className={`error ${inputErrors.name && 'error_visible'}`}>
              {inputErrors.name}
            </span>
          </label>

          <button className="form__button form__button_submit" type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* Confimation popup will replace above content after submitting the form */}

      <div
        className="modal__content modal__content_completed"
        style={{ display: isCompleted ? 'block' : 'none' }}
      >
        <p className="modal__completed-text">
          Thank you for contacting us, {inputValues.name} from {inputValues.company}! We’ll reach
          out to you in email as soon as possible. Looking forward to working together!
        </p>
        <button className="form__button form__button_done" type="button" onClick={props.onClose}>
          Done
        </button>
      </div>
    </div>
  );
}

export default Form;
