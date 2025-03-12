let todos = [];
let data;
let todoItem = document.querySelector(`#display-todos`);

document.querySelector(`#submitButton`).onclick = (event) => {
  data = document.querySelector(`#todo`).value;
  console.log(data);
  let error = document.querySelector(`#error`);

  if (data.length <= 3) {
    error.innerText = "please add some more text";

    error.style.color = "red";
  } else {
    // error.innerText = "";
    error.style.color = "green";
    error.innerText = "todo added";
    todos.push(data);
    console.log(todos);

    const li = document.createElement("li");
    li.textContent = data;
    todoItem.appendChild(li);
    setTimeout(() => {
      error.innerText = "";
    }, 300);
    document.querySelector(`input`).value = "";
  }
};
