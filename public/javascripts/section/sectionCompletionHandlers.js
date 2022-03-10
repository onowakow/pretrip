const componentElementsArr = document.querySelectorAll('.component');

componentElementsArr.forEach((component) => {
  const attributeElementsArr = component.querySelectorAll('.attribute');
  attributeElementsArr.forEach((attribute) => {
    console.log(attribute.checked);
  });
});
