import localStorage from '../attributeClickHandlers/attributeClickHandlers';

(function respondToJwt() {
  const adminNotice = document.getElementById('adminNotice');
  if (!adminNotice) return;

  const userJWT = localStorage.getItem('userJWT');
  if (!userJWT) return;

  const payload = userJWT.split('.')[1];
  const obj = JSON.parse(window.atob(payload));
  const expiry = obj.exp;
  const firstName = obj.name.split(' ')[0];
  const text = document.createTextNode(`Hello, ${firstName}!`);
  //console.log(expiry < Date.now());
  adminNotice.appendChild(text);
})();
