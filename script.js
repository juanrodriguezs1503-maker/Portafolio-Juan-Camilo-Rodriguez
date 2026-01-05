document.addEventListener("DOMContentLoaded", () => {
  const data = JSON.parse(localStorage.getItem("contactData"));
  if (data) {
    document.getElementById("savedMessage").textContent =
      `Último mensaje enviado por ${data.name}`;
  }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const contactData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };

  localStorage.setItem("contactData", JSON.stringify(contactData));

  document.getElementById("savedMessage").textContent =
    "Mensaje enviado correctamente ✔";

  this.reset();
});
