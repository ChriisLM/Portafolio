document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault();
      
      const targetId = anchor.getAttribute("href");
      if (!targetId) return;

      const targetElement = document.querySelector(targetId);
      if (!targetElement) return;

      const headerOffset = 90;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    });
  });
});