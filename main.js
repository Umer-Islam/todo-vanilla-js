let todos = [];
let data;
let todoItem = document.querySelector(`#display-todos`);

document.querySelector(`#submitButton`).onclick = (event) => {
  data = document.querySelector(`#todo`).value;
  console.log(data);
  let error = document.querySelector(`#error`);
  if (data.length < 5) {
    error.innerText = "sentence is too short";

    error.style.color = "red";
  } else {
    error.innerText = "";
    todos.push(data);
    console.log(todos);

    const li = document.createElement("li");
    li.textContent = data;
    todoItem.appendChild(li);
  }
};
