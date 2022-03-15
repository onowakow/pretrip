import localStorage from '../attributeClickHandlers/attributeClickHandlers';
import 'regenerator-runtime/runtime';

const form = document.getElementById('loginForm');

const removeUserJwt = () => {
  localStorage.removeItem('userJwt');
};

const sendUserHome = () => {
  const origin = window.location.origin;
  window.location.replace(`${origin}/sections`);
};

(function ifFormHandleFormSubmissionData() {
  if (!form) return;

  const serverUrl = form.getAttribute('data-server');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObj = Object.fromEntries(formData);

    fetch(`${serverUrl}/api/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formObj),
    })
      .then((response) => response.json())
      .then((data) => handleData(data))
      .catch((err) => console.log('error', err));

    const handleData = (data) => {
      if (data.message) {
        const message = data.message;
        if (message === 'Incorrect email') {
          const warning = document.getElementById('formErrorText-loginEmail');
          warning.removeAttribute('hidden');
        }
        if (message === 'Incorrect password') {
          const warning = document.getElementById(
            'formErrorText-loginPassword'
          );
          warning.removeAttribute('hidden');
        }
      } else if (data.token) {
        const token = data.token;
        localStorage.setItem('userJwt', token);
        window.location.replace(`${serverUrl}/sections`);
      }
    };
  });

  const logOutButton = document.getElementById('logOutButton');
  logOutButton.addEventListener('click', () => {
    removeUserJwt();
    sendUserHome();
  });
})();

export default { removeUserJwt, sendUserHome };
