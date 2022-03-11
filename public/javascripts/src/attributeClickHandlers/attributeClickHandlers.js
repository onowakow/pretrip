import forComponentAreAllAttributesSelected from './forComponentAreAllAttributesSelected.js';

// User's localStorage. Not for important or secure info.
const localStorage = window.localStorage;

const toggleableNodeList = document.querySelectorAll('.toggleable');
const componentsNodeList = document.querySelectorAll('.component');

const updateChecksToReflectLocalStorage = (element) => {
  element.checked = localStorage.getItem(element.id) === 'true' ? true : false;
};

const resetLocalStorageButtonNodeList =
  document.querySelectorAll('.resetLocalStorage');

if (resetLocalStorageButtonNodeList) {
  resetLocalStorageButtonNodeList.forEach((element) => {
    element.addEventListener('click', () => {
      localStorage.clear();
      updateAllAttributeChecksToLocalStorage();
      updateAllComponentsToLocalStorage();
    });
  });
}

// Update

const handleClick = (e) => {
  const component = e.path[1];
  const isChecked = e.target.checked;
  // JSON format {"id": "index"}
  const id = e.target.id;
  localStorage.setItem(id, isChecked);

  const allSelected = forComponentAreAllAttributesSelected(component);

  if (allSelected === true) {
    component.scrollIntoView(true);
    component.classList.add('complete');
    return;
  }

  if (allSelected === false) {
    component.classList.remove('complete');
    return;
  }

  if (allSelected === undefined) {
    // Component does not have attributes.
    return;
  }
};

const updateAllAttributeChecksToLocalStorage = () => {
  // update checks to reflect local storage and add event handlers
  if (toggleableNodeList) {
    toggleableNodeList.forEach((attribute) => {
      attribute.checked =
        localStorage.getItem(attribute.id) === 'true' ? true : false;
      attribute.addEventListener('click', (e) => handleClick(e));
    });
  }
};

const updateAllComponentsToLocalStorage = () => {
  if (componentsNodeList) {
    componentsNodeList.forEach((component) => {
      const allSelected = forComponentAreAllAttributesSelected(component);
      if (allSelected === true) {
        component.classList.add('complete');
      } else {
        component.classList.remove('complete');
      }
    });
  }
};

// Must be in order: update attribute checks then update components
updateAllAttributeChecksToLocalStorage();
updateAllComponentsToLocalStorage();
