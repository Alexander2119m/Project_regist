// Agregar event listeners a los enlaces
document.getElementById("register-link").addEventListener("click", function(){
    document.querySelector(".login-box").style.display = "none";
    document.querySelector(".register-box").style.display = "block";
});

document.getElementById("login-link").addEventListener("click", function(){
    document.querySelector(".register-box").style.display = "none";
    document.querySelector(".login-box").style.display = "block";
});

const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const signupForm = document.getElementById("signup-form");
const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const errorMessage = document.getElementById("error-message");

// Inicio de sesión
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;
  // Comprobación de correo electrónico y contraseña
  // Aquí se puede utilizar una API o una base de datos para comprobar si el correo electrónico y la contraseña son correctos.
  if (email === "usuario@ejemplo.com" && password === "contraseña") {
    alert("Inicio de sesión exitoso.");
  } else {
    errorMessage.textContent = "Correo electrónico o contraseña incorrectos.";
  }
});

// Registro
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = signupName.value;
  const email = signupEmail.value;
  const password = signupPassword.value;
  // Comprobación de campos vacíos
  if (!name || !email || !password) {
    errorMessage.textContent = "Todos los campos son obligatorios.";
    return;
  }
  // Comprobación de formato de correo electrónico
  const emailRegex = /\S+@\S+\.\S+/;
  if (!emailRegex.test(email)) {
    errorMessage.textContent = "Correo electrónico inválido.";
    return;
  }
  // Aquí se puede utilizar una API o una base de datos para comprobar si el correo electrónico ya existe.
  // En este caso, simplemente se comprueba si el correo electrónico es igual al de ejemplo.
  if (email === "usuario@ejemplo.com") {
    errorMessage.textContent = "El correo electrónico ya existe.";
    return;
  }
  // Aquí se puede agregar código para encriptar la contraseña antes de enviarla a la base de datos.
  alert("Registro exitoso.");
});