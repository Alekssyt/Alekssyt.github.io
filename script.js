document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");
    const loginToggle = document.getElementById("login-toggle");
    const registerToggle = document.getElementById("register-toggle");
  
    loginToggle.addEventListener("click", () => {
      loginForm.classList.remove("hidden");
      registerForm.classList.add("hidden");
      loginToggle.classList.add("active");
      registerToggle.classList.remove("active");
    });
  
    registerToggle.addEventListener("click", () => {
      registerForm.classList.remove("hidden");
      loginForm.classList.add("hidden");
      registerToggle.classList.add("active");
      loginToggle.classList.remove("active");
    });
  
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Evita que el formulario se envíe de manera predeterminada
      // Aquí puedes añadir validación si es necesario
  
      // Redirige a la página después de iniciar sesión
      window.location.href = "https://sites.google.com/view/harmonystudios/inicio?authuser=3";
    });
  });
  