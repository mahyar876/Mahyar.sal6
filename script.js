// script.js

// 1. Scroll Reveal Animation (برای همه بخش‌های .reveal)
const reveals = document.querySelectorAll(".reveal");

function revealElements() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 140; // فاصله‌ای که عنصر باید به دید بیاد

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", revealElements);
// اجرا در بارگذاری اولیه (برای بخش‌هایی که از اول در دید هستند)
revealElements();

// 2. Progress Bar Animation (فقط وقتی بخش Skills وارد دید شد)
const progressBars = document.querySelectorAll(".progress div");

function animateProgress() {
  progressBars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    if (width) {
      bar.style.width = width;
    }
  });
}

window.addEventListener("scroll", () => {
  const skillsSection = document.querySelector("#skills");
  if (skillsSection) {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight - 180) {
      animateProgress();
      // اگر نمی‌خوای هر بار اسکرول دوباره اجرا بشه، می‌تونی این listener رو حذف کنی:
      // window.removeEventListener("scroll", arguments.callee);
    }
  }
});

// 3. تابع باز و بسته کردن باکس About
function toggleAbout() {
  const content = document.getElementById("about-content");
  const arrow = document.getElementById("about-arrow");

  if (content && arrow) {
    // باز و بسته کردن محتوا
    content.classList.toggle("show");

    // چرخش فلش (▼ به ▲)
    arrow.classList.toggle("active");

    // اختیاری: تغییر متن فلش به جای چرخش (اگر بخوای)
    // arrow.textContent = content.classList.contains("show") ? "▲" : "▼";
  }
}

// اگر در آینده بخش‌های دیگه هم accordion داشتی، می‌تونی تابع عمومی بسازی:
function toggleAccordion(contentId, arrowId) {
  const content = document.getElementById(contentId);
  const arrow = document.getElementById(arrowId);
  if (content && arrow) {
    content.classList.toggle("show");
    arrow.classList.toggle("active");
  }
}
function toggleSection(contentId, arrowId) {
    const content = document.getElementById(contentId);
    const arrow = document.getElementById(arrowId);
    
    if (content && arrow) {
      content.classList.toggle("show");
      arrow.classList.toggle("active");
    }
  }
  function toggleMenu() {
    const nav = document.getElementById("main-nav");
    const hamburger = document.querySelector(".hamburger");
    
    if (nav && hamburger) {
      nav.classList.toggle("active");
      hamburger.classList.toggle("active");
    }
  }

  // EmailJS - فرم تماس واقعی
document.addEventListener('DOMContentLoaded', () => {
    // اول کتابخانه EmailJS رو لود می‌کنیم (اگر قبلاً در HTML نذاشتی)
    if (!window.emailjs) {
      const script = document.createElement('script');
      script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.async = true;
      document.head.appendChild(script);
  
      script.onload = () => {
        initEmailJS();
      };
    } else {
      initEmailJS();
    }
  
    function initEmailJS() {
      emailjs.init("HyeGNT0Bb6JKOptnp"); // ← اینجا Public Key خودت رو بذار
  
      const form = document.getElementById('contact-form');
      const status = document.getElementById('form-status');
  
      if (!form) return;
  
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        status.textContent = "Sending...";
        status.style.color = "#ff9a3c";
  
        emailjs.sendForm(
          'service_9f54yac',     // ← Service ID
          'template_pfxkoiw',    // ← Template ID
          form
        )
        .then(() => {
          status.textContent = "Message sent successfully.😊";
          status.style.color = "#4caf50";
          form.reset();
        })
        .catch((error) => {
          status.textContent = "Sending failed, try again.";
          status.style.color = "#ff4444";
          console.error('EmailJS Error:', error);
        });
      });
    }
  });
