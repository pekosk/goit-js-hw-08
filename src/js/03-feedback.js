import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const submitBtn = document.querySelector()
const FORM_KEY = "feedback-form-state";

const formInput = event => { localStorage.save(event.target.name, event.target.value);
};

const formSubmit = event => {
  event.preventDefault();
};