'use strict';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const textArea = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';
let formData = {
  email: '',
  message: ''
};

populateForm();

form.addEventListener('input', handleInput);

function handleInput(event) {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
   event.preventDefault();
  if (!emailInput.value.trim() || !textArea.value.trim()) {
    alert('Fill please all fields');
    return;
  }
  console.log('Form Data:', formData);
  localStorage.removeItem(STORAGE_KEY);
  formData = { email: '', message: '' };
  form.reset();
}

function populateForm() {
  const saveData = localStorage.getItem(STORAGE_KEY);
  if (saveData) {
    formData = JSON.parse(saveData);
    if (formData.email) emailInput.value = formData.email;
    if (formData.message) textArea.value = formData.message;
  }
}

