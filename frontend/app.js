let name = document.getElementById("name");
let sobrenome = document.getElementById("sobrenome");
let email = document.getElementById("email");
let button = document.getElementById("button");

button.addEventListener("click", e => {
  e.preventDefault();

  const messageLocation = document.getElementById("message");

  if (name.value.length < 5) {
    messageLocation.innerHTML = `
        <h1 style="color: red"> Nome muito curto </h1>
    `;
    return;
  }

  if (email.value.length < 5) {
    messageLocation.innerHTML = `
    <h1 style="color: red"> Email muito curto </h1>
`;
    return;
  }

  fetch("http://localhost:8080/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name.value,
      sobrenome: sobrenome.value,
      email: email.value,

    }),
  });

  name.value = "";
  email.value = "";
});
