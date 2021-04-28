// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");
// edit option
let editElement = "";
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
window.addEventListener("DOMContentLoaded", setupItems);
form.addEventListener("submit", addItem);
clearBtn.addEventListener("click", removeAll);

// ****** FUNCTIONS **********
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(() => {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 2000);
}

function createListItem(id, value) {
  const element = document.createElement("article");
  element.classList.add("grocery-item");
  const attr = document.createAttribute("data-id");
  attr.value = id;

  element.setAttributeNode(attr);
  element.innerHTML = `
        <p class="title">${value}</p>
          <div class="btn-container">
            <button class="edit-btn"><i class="fas fa-edit"></i></button>
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
          </div>`;
  const deleteBtn = element.querySelector(".delete-btn");
  const editBtn = element.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  list.firstChild && list.insertBefore(element, list.firstChild);
  // list.appendChild(element);
}

function addItem(e) {
  e.preventDefault();

  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    createListItem(id, value);

    container.classList.add("show-container");
    displayAlert("item added to the list", "success");

    addToLocalStorage(id, value);
    setBackToDefault();
  } else if (value && editFlag) {
    //edit item
    editElement.innerHTML = value; //editElement la global variable
    editLocalStorage(editID, value);
    displayAlert("Edited item successfully", "success");
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}

function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;

  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }

  displayAlert("item removed", "danger");
  setBackToDefault();
  removeFromLocalStorage(id);
}

function editItem(e) {
  // lay id element muon xoa
  const element = e.currentTarget.parentNode.parentNode;
  // lay title cua grocery muon xoa
  editElement = e.currentTarget.parentNode.previousElementSibling;
  const titleGrocery = editElement.innerHTML;
  //dua title len input
  grocery.value = titleGrocery;
  //doi nut submit thanh edit
  submitBtn.textContent = "Edit";
  //chuyen sang trang thai edit
  editFlag = true;
  editID = element.dataset.id;
  console.log(titleGrocery);
}

function removeAll() {
  //xoa khoi list html
  const items = document.querySelectorAll(".grocery-item");
  items.forEach((item) => {
    list.removeChild(item);
  });
  container.classList.remove("show-container");
  // ẩn container
  displayAlert("List empty", "danger");
  //xoa trong localStorage
  removeFromLocalStorageAll();
  setBackToDefault();
}

function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = getLocalStorage();

  items.push(grocery);

  localStorage.setItem("list", JSON.stringify(items));
}

function removeFromLocalStorageAll() {
  localStorage.removeItem("list");
}

function removeFromLocalStorage(id) {
  const items = getLocalStorage();
  let newItems = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });

  localStorage.setItem("list", JSON.stringify(newItems));
}

function editLocalStorage(id, value) {
  const items = getLocalStorage();
  items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });

  localStorage.setItem("list", JSON.stringify(items));
}
// ****** LOCAL STORAGE **********
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      createListItem(item.id, item.value);
    });
    container.classList.add("show-container");
  } else {
    container.classList.remove("show-container");
  }
}
