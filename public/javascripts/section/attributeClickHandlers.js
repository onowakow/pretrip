// Object allows access to user's localStorage. Not for important or secure info.
const localStorage = window.localStorage;

const toggleableNodeArr = document.querySelectorAll('.toggleable');
const resetLocalStorageButtonArr =
  document.querySelectorAll('.resetLocalStorage');

if (resetLocalStorageButtonArr) {
  resetLocalStorageButtonArr.forEach((element) => {
    element.addEventListener('click', () => {
      localStorage.clear();
      toggleableNodeArr.forEach((element) => {
        updateChecksToReflectLocalStorage(element);
      });
    });
  });
}

// Checks
const updateChecksToReflectLocalStorage = (element) => {
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
    updateChecksToReflectLocalStorage(element);
    element.addEventListener('click', (e) => handleClick(e));
  });
}
