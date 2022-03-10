// Object allows access to user's localStorage. Not for important or secure info.
const localStorage = window.localStorage;

const toggleableNodeList = document.querySelectorAll('.toggleable');
//const componentsNodeList = document.querySelectorAll('.component');

const updateChecksToReflectLocalStorage = (element) => {
  element.checked = localStorage.getItem(element.id) === 'true' ? true : false;
};

const resetLocalStorageButtonArr =
  document.querySelectorAll('.resetLocalStorage');

if (resetLocalStorageButtonArr) {
  resetLocalStorageButtonArr.forEach((element) => {
    element.addEventListener('click', () => {
      localStorage.clear();
      toggleableNodeList.forEach((element) => {
        updateChecksToReflectLocalStorage(element);
      });
    });
  });
}

// Update

const handleClick = (e) => {
  const isChecked = e.target.checked;
  // JSON format {"id": "index"}
  const id = e.target.id;
  localStorage.setItem(id, isChecked);

  const callback = (element) => {
    element.scrollIntoView(true);
  };

  const negCallback = (element) => {};

  // Check if all attributes are checked and call callback
  ifAllComponentAttributesCheckedCallCallback(e.path[1], callback, negCallback);
};

// update checks to reflect local storage and add event handlers
if (toggleableNodeList) {
  toggleableNodeList.forEach((element) => {
    updateChecksToReflectLocalStorage(element);
    element.addEventListener('click', (e) => handleClick(e));
  });
}

/* update components to reflect local storage
if (componentsNodeList) {
  console.log('updating components');
  const callback = (element) => {
  };

  const negCallback = (element) => {
  };
  componentsNodeList.forEach((component) => {
    ifAllComponentAttributesCheckedCallCallback(
      component,
      callback,
      negCallback
    );
  });
}
*/
