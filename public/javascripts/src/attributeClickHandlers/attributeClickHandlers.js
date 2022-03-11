import forComponentAreAllAttributesSelected from './forComponentAreAllAttributesSelected.js';

// User's localStorage. Not for important or secure info.
const localStorage = window.localStorage;

const toggleableNodeList = document.querySelectorAll('.toggleable');
const componentsNodeList = document.querySelectorAll('.component');

// Reset buttons
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

// Attribute select
const handleAttributeClick = (e) => {
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
