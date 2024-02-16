const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const loadingDiv = document.querySelector('.loading');
const errorMessageDiv = document.querySelector('.error-message');
const sentMessageDiv = document.querySelector('.sent-message');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Form validation (consider more robust validation)
  if (!nameInput.value.trim()) {
    errorMessageDiv.textContent = 'Please enter your name.';
    return;
  }
  if (!emailInput.value.trim() || !validateEmail(emailInput.value)) {
    errorMessageDiv.textContent = 'Please enter a valid email address.';
    return;
  }
  if (!subjectInput.value.trim()) {
    errorMessageDiv.textContent = 'Please enter a subject.';
    return;
  }
  if (!messageInput.value.trim()) {
    errorMessageDiv.textContent = 'Please enter a message.';
    return;
  }

  errorMessageDiv.textContent = '';

  loadingDiv.style.display = 'block';

  sendContactFormData(nameInput.value, emailInput.value, subjectInput.value, messageInput.value)
    .then(() => {
      // Success
      loadingDiv.style.display = 'none';
      sentMessageDiv.style.display = 'block';
      form.reset(); // Clear form fields
    })
    .catch(error => {
      // Error
      loadingDiv.style.display = 'none';
      errorMessageDiv.textContent = `Error sending message: ${error}`;
    });
});

function sendContactFormData(name, email, subject, message) {
    const data = {
      from: "your_email@domain.com",
      to: "recipient_email@domain.com",
      subject: subject,
      text: message,
      personalizations: [{
        to: [
          {
            email: email,
            name: name
          }
        ]
      }]
    };
  
    const sg = require('sendgrid')(YOUR_SENDGRID_API_KEY);
    const request = sg.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: data
    });
  
    return sg.APIRequest(request)
      .then(() => {
        console.log("Email sent successfully!");
      })
      .catch(error => {
        console.error("Error sending email:", error);
      });
  }
  