document.addEventListener("DOMContentLoaded", () => {
    const PASSWORD = "mahyar876"; 
    const overlay = document.getElementById("login-overlay");
    const mainSite = document.getElementById("main-site");
    const input = document.getElementById("site-password");
    const btn = document.getElementById("login-btn");
    const message = document.getElementById("login-message");
  
    // اگر رمز قبلاً وارد شده
    if (sessionStorage.getItem("site-password") === PASSWORD) {
      overlay.style.display = "none";
      mainSite.style.display = "block";
    }
  
    // وقتی دکمه Enter زده شد
    btn.addEventListener("click", () => {
      const userInput = input.value.trim();
      if (userInput === PASSWORD) {
        sessionStorage.setItem("site-password", PASSWORD);
        overlay.style.display = "none";
        mainSite.style.display = "block";
      } else {
        message.textContent = "Incorrect password! Try again.";
        input.value = "";
        input.focus();
      }
    });
  
    // امکان Enter در input
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") btn.click();
    });
  });