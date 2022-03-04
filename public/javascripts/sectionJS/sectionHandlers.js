const localStorage = window.localStorage;

const toggleableNodeArr = document.querySelectorAll('.toggleable');

const updateChecks = (element) => {
  element.checked = localStorage.getItem(element.id) === 'true' ? true : false;
};

const handleClick = (e) => {
  const isChecked = e.target.checked;
  // JSON format {"id": "index"}
  const id = e.target.id;
  localStorage.setItem(id, isChecked);
};

if (toggleableNodeArr) {
  toggleableNodeArr.forEach((element) => {
    updateChecks(element);
    element.addEventListener('click', (e) => handleClick(e));
  });
}

const resetLocalStorageButton = document.getElementById('resetLocalStorage');
if (resetLocalStorageButton) {
  resetLocalStorageButton.addEventListener('click', () => {
    localStorage.clear();
    toggleableNodeArr.forEach((element) => {
      updateChecks(element);
    });
  });
}
