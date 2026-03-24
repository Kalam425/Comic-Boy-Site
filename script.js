//LOGIN//
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const rememberMe = document.getElementById('checkbox');
const submitButton = document.getElementById('submit-button');
const message = document.getElementById('message');

// Basic email check
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitButton.addEventListener('click', () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  message.style.display = 'block';

  if (!email || !password) {
    message.textContent = 'Please fill in all fields.';
    message.className = 'message error';
    return;
  }

  if (!isValidEmail(email)) {
    message.textContent = 'Please enter a valid email address.';
    message.className = 'message error';
    return;
  }

  if (password.length < 8) {
    message.textContent = 'Password must be at least 8 characters.';
    message.className = 'message error';
    return;
  }

  // Optional: "Remember Me" persistence example
  if (rememberMe.checked) {
    localStorage.setItem('savedEmail', email);
  } else {
    localStorage.removeItem('savedEmail');
  }

  message.textContent = `Welcome back, ${email}!`;
  message.className = 'message success';

  // Clear inputs
  emailInput.value = '';
  passwordInput.value = '';
});

// Auto-fill if remembered
window.addEventListener('DOMContentLoaded', () => {
  const savedEmail = localStorage.getItem('savedEmail');
  if (savedEmail) {
    emailInput.value = savedEmail;
    rememberMe.checked = true;
  }
});
 
//const //

