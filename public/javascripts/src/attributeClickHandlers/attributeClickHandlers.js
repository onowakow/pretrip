import forComponentAreAllAttributesSelected from './forComponentAreAllAttributesSelected.js';

const getLocalStorageIdFromAttributeId = (attributeId) => {
  return `attribute: ${attributeId}`;
};

// User's localStorage. Not for important or secure info.
const localStorage = window.localStorage;

const toggleableNodeList = document.querySelectorAll('.toggleable');
const componentsNodeList = document.querySelectorAll('.component');

const clearAttributeDataFromLocalStorage = () => {
  Object.keys(localStorage).forEach((localStorageId) => {
    if (localStorageId.split(':')[0] === 'attribute') {
      localStorage.removeItem(localStorageId);
    }
  });
};

// Reset buttons
const resetLocalStorageButtonNodeList =
  document.querySelectorAll('.resetLocalStorage');

if (resetLocalStorageButtonNodeList) {
  resetLocalStorageButtonNodeList.forEach((element) => {
    element.addEventListener('click', () => {
      clearAttributeDataFromLocalStorage();
      updateAllAttributeChecksToLocalStorage();
      updateAllComponentsToLocalStorage();
    });
  });
}

// Attribute select
const handleAttributeClick = (e) => {
  const component = e.path[1];
  const isChecked = e.target.checked;
  const attributeId = e.target.id;
  // JSON format {"id": "index"}
  const id = getLocalStorageIdFromAttributeId(attributeId);
  if (!isChecked) {
    localStorage.removeItem(id);
  } else {
    localStorage.setItem(id, isChecked);
  }

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
      const attributeId = attribute.id;
      const localStorageId = getLocalStorageIdFromAttributeId(attributeId);
      attribute.checked =
        localStorage.getItem(localStorageId) === 'true' ? true : false;
      attribute.addEventListener('click', (e) => handleAttributeClick(e));
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

export default localStorage;
