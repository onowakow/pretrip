import localStorage from '../attributeClickHandlers/attributeClickHandlers';
import logUserOut from './loginAndOut';

const ifExpiredCallback = (exp, callback) => {
  const now = Date.now();
  console.log(exp, now, exp < now);
  if (exp < now) {
    callback();
  }
};
// REPLACE ifExpiredCallBack with isJWTExpired and more

const isJWTExpired = (exp) => {
  const now = Date.now();
  if (exp < now) return true;
  return false;
};

const isUserLoggedIn = () => {
  const userJWT = localStorage.getItem('userJWT');
  if (!userJWT) return false;
};

(function respondToJwt() {
  const adminNotice = document.getElementById('adminNotice');
  if (!adminNotice) return;

  const userJWT = localStorage.getItem('userJWT');
  if (!userJWT) return;

  const payload = userJWT.split('.')[1];
  const obj = JSON.parse(window.atob(payload));
  const expiry = obj.exp;

  ifExpiredCallback(expiry, logUserOut);

  const firstName = obj.name.split(' ')[0];
  const text = document.createTextNode(`Hello, ${firstName}!`);
  adminNotice.appendChild(text);
})();
