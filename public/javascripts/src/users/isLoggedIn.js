import localStorage from '../attributeClickHandlers/attributeClickHandlers';
import { removeUserJwt, sendUserHome } from './loginAndOut';

const getUserJwt = () => {
  return localStorage.getItem('userJwt');
};

const dateIsExpired = (exp) => {
  const now = Date.now();
  if (exp < now) return true;
  return false;
};

const getJwtPayloadObj = (jwt) => {
  const payload = jwt.split('.')[1];
  return JSON.parse(window.atob(payload));
};

function ifAdminNotice(callback) {
  const adminNotice = document.getElementById('adminNotice');
  if (!adminNotice) return;
  if (adminNotice) callback();
}

function ifEditIconLinks(callback) {
  const editIconLinkNodeList = document.querySelectorAll('.editIconLink');
  if (!editIconLinkNodeList) return;
  if (editIconLinkNodeList) callback(editIconLinkNodeList);
}

ifAdminNotice(function ifCurrentJwtAppendGreeting() {
  const userJwt = getUserJwt();
  if (!userJwt) return;

  const jwtPayloadObj = getJwtPayloadObj(userJwt);
  const expiry = jwtPayloadObj.exp;

  if (dateIsExpired(expiry)) logUserOut();

  const firstName = jwtPayloadObj.name.split(' ')[0];
  const text = document.createTextNode(`Hello, ${firstName}!`);
  adminNotice.appendChild(text);
});

ifEditIconLinks(function makeLinksVisibleToAdmin(editIconLinkNodeList) {
  const userJwt = getUserJwt();
  if (!userJwt) return;

  const jwtPayloadObj = getJwtPayloadObj(userJwt);
  const expiry = jwtPayloadObj.exp;

  if (dateIsExpired(expiry)) return;

  editIconLinkNodeList.forEach((element) => {
    element.removeAttribute('hidden');
  });
});
