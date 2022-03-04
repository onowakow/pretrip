const localStorage = window.localStorage;

const toggleableNodeArr = document.querySelectorAll('.toggleable');

const handleClick = (e) => {
  const id = e.target.id;
  const index = e.target.name;
  const json = localStorage.getItem(id);
  let obj = {};

  if (json) {
    obj = JSON.parse(json);
    obj[index] = true;
  } else {
    obj[index] = true;
  }

  const newJson = JSON.stringify(obj);

  localStorage.setItem(id, newJson);
};

if (toggleableNodeArr) {
  toggleableNodeArr.forEach((element) => {
    element.addEventListener('click', (e) => handleClick(e));
  });
}

const resetLocalStorageButton = document.getElementById('resetLocalStorage');
if (resetLocalStorageButton) {
  resetLocalStorageButton.addEventListener('click', () => {
    localStorage.clear();
  });
}
