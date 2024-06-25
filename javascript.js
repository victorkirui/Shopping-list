const ul = document.querySelector("ul");
const button = document.querySelector("button");
const input = document.querySelector("input");

button.addEventListener("click", (e) => {
  let item = input.value;
  input.value = "";
  input.focus();

  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  span.textContent = item;
  button.textContent = "DELETE";

  li.appendChild(span);
  li.appendChild(button);

  ul.appendChild(li);

  button.addEventListener("click", (e) => {
    e.target.parentNode.remove();
  });
});
