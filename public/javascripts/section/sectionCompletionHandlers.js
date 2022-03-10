/* const componentElementsArr = document.querySelectorAll('.component');
componentElementsArr.forEach((component) => {
  const attributeElementsArr = component.querySelectorAll('.attribute');
  // Make sure the elements have
  if (!attributeElementsArr) return;

  // Check if all attributes are selected/checked
  let allAreChecked = true;
  attributeElementsArr.forEach(
    (attribute) => (allAreChecked = attribute.checked)
  );

  if (allAreChecked === true) {
    console.log('all are checked');
    // All are checked.
    component.classList.add('complete');
  } else {
    // One or more attributes are unchecked
  }
});
*/

// For a component, if all attributes are checked, call callback
const ifAllComponentAttributesCheckedCallCallback = (
  componentElement,
  callback,
  negCallback
) => {
  const attributeElementsArr = componentElement.querySelectorAll('.attribute');
  // Make sure the elements have
  if (!attributeElementsArr) return;

  // Check if all attributes are selected/checked
  let allAreChecked = true;
  attributeElementsArr.forEach((attribute) => {
    if (attribute.checked === false) {
      allAreChecked = false;
    }
  });

  if (allAreChecked === true) {
    callback(componentElement);
  } else negCallback(componentElement);
};

// module.exports = ifAllComponentAttributesCheckedCallCallback;
