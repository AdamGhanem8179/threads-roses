// Dynamically load shared HTML (navbar + footer)
document.addEventListener("DOMContentLoaded", () => {
  const headerPlaceholder = document.getElementById("header-placeholder");
  const footerPlaceholder = document.getElementById("footer-placeholder");

  fetch("components/shared.html")
    .then(res => res.text())
    .then(data => {
      if (headerPlaceholder) {
        // Extract navbar (everything before <footer>)
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = data;
        const nav = tempDiv.querySelector("nav");
        if (nav) headerPlaceholder.appendChild(nav);
      }

      if (footerPlaceholder) {
        // Extract footer
        const tempDiv = document.createElement("div");
        tempDiv.innerHTML = data;
        const footer = tempDiv.querySelector("footer");
        if (footer) footerPlaceholder.appendChild(footer);
      }

      // Initialize features after elements load
      initNavbarBehavior();
      initSidebarHover();
      initFAQAnimations();
    })
    .catch(err => console.error("Error loading shared.html:", err));
});
function initNavbarBehavior() {
  const navBar = document.getElementById("navBar");
  if (!navBar) return;

  let lastScrollY = window.scrollY;
  let isHidden = false;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll > lastScrollY && currentScroll > 100 && !isHidden) {
      navBar.classList.add("hidden");
      navBar.classList.remove("visible");
      isHidden = true;
    } else if (currentScroll < lastScrollY && isHidden) {
      navBar.classList.add("visible");
      navBar.classList.remove("hidden");
      isHidden = false;
    }
    lastScrollY = currentScroll;
  });

  // Show nav if mouse moves near top
  document.addEventListener("mousemove", (e) => {
    if (e.clientY <= 50) {
      navBar.classList.add("visible");
      navBar.classList.remove("hidden");
    }
  });
}
function initSidebarHover() {
  const settingsBox = document.querySelector(".settingsBox");
  const sideMenu = document.querySelector(".sideMenu");
  const settingsIcon = document.querySelector(".settingsIcon");

  if (!settingsBox || !sideMenu || !settingsIcon) return;

  settingsBox.addEventListener("mouseenter", () => {
    sideMenu.classList.add("active");
  });

  settingsBox.addEventListener("mouseleave", () => {
    sideMenu.classList.remove("active");
  });
}
function initFAQAnimations() {
  const faqClouds = document.querySelectorAll(".faqCloud");
  if (!faqClouds.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("float-in");
      }
    });
  }, { threshold: 0.1 });

  faqClouds.forEach((cloud) => observer.observe(cloud));
}

const pathPrefix = window.location.pathname.includes("/pages/") ? "../" : "";
fetch(pathPrefix + "components/shared.html")

