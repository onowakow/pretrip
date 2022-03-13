import localStorage from '../attributeClickHandlers/attributeClickHandlers';
const adminNotice = document.getElementById('adminNotice');

if (adminNotice) {
  const userJWT = localStorage.getItem('userJWT');
  console.log(userJWT);
  if (userJWT) adminNotice.removeAttribute('hidden');
  const payload = userJWT.split('.')[1];
  console.log(atob(payload));
}
