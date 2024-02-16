// const form = document.querySelector('form');
// const firstNameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');
// const subjectInput = document.getElementById('subject');
// const messageInput = document.getElementById('message');
// const loadingDiv = document.querySelector('.loading');
// const errorMessageDiv = document.querySelector('.error-message');
// const sentMessageDiv = document.querySelector('.sent-message');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   // More thorough validation
//   if (!validateName(firstNameInput.value)) {
//     errorMessageDiv.textContent = 'Please enter your name.';
//     return;
//   }
//   if (!validateEmail(emailInput.value)) {
//     errorMessageDiv.textContent = 'Please enter a valid email address.';
//     return;
//   }
//   if (!subjectInput.value.trim()) {
//     errorMessageDiv.textContent = 'Please enter a subject.';
//     return;
//   }
//   if (!messageInput.value.trim()) {
//     errorMessageDiv.textContent = 'Please enter a message.';
//     return;
//   }

//   errorMessageDiv.textContent = '';

//   loadingDiv.style.display = 'block';

//   sendContactFormData(firstNameInput.value, emailInput.value, subjectInput.value, messageInput.value)
//     .then(() => {
//       // Success
//       loadingDiv.style.display = 'none';
//       sentMessageDiv.style.display = 'block';
//       form.reset();
//     })
//     .catch((error) => {
//       // Error handling with specific messages
//       loadingDiv.style.display = 'none';
//       if (error.response && error.response.data && error.response.data.errors) {
//         errorMessageDiv.textContent = error.response.data.errors[0].message;
//       } else {
//         errorMessageDiv.textContent = 'An error occurred. Please try again later.';
//       }
//     });
// });

// function validateName(name) {
//   // Implement validation logic, e.g., minimum length, no special characters
//   if(name.size() < 6) return false;
//   return true; // Replace with your validation logic
// }

// function validateEmail(email) {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// }

// function sendContactFormData(firstName, email, subjectLine, messageContent) {
//   // Replace with your preferred method for sending contact data
//   // Remember to store your SendGrid API key securely and not hardcode it
//   // Implement server-side validation and error handling
//   return Promise.resolve(); // Replace with actual sending logic
// }


const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Basic form validation (optional)
  if (!/^[a-zA-Z ]+$/.test(form.elements.name.value)) {
    alert('Please enter a valid name');
    return;
  }
  if (!/^\S+@\S+\.\S+$/.test(form.elements.email.value)) {
    alert('Please enter a valid email address');
    return;
  }

  // Submit the form data (replace with your actual submission logic)
  console.log('Name:', form.elements.name.value);
  console.log('Email:', form.elements.email.value);
  console.log('Message:', form.elements.message.value);

  // Show success message
  successMessage.classList.remove('hidden');
  // form.reset();
});


