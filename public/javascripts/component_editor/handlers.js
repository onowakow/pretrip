const addAttributeBtnArray = document.querySelectorAll('.addAttributeBtn');

addAttributeBtnArray.forEach((element) => {
  element.addEventListener('click', (e) => {
    e.preventDefault();
  });
});
