const forComponentAreAllAttributesSelected = (componentElement) => {
  const attributeElementsArr = componentElement.querySelectorAll('.attribute');
  // Make sure the elements have attributes
  if (!attributeElementsArr) return undefined;

  // Check if all attributes are selected/checked
  let allAreChecked = true;
  attributeElementsArr.forEach((attribute) => {
    if (attribute.checked === false) {
      allAreChecked = false;
    }
  });

  if (allAreChecked === true) {
    return true;
  } else return false;
};

export default forComponentAreAllAttributesSelected;
