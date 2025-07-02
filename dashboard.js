document.addEventListener("DOMContentLoaded", () => {
  // Sidebar navigation functionality
  const sidebarLinks = document.querySelectorAll(".sidebar ul li");

  sidebarLinks.forEach(item => {
    item.style.cursor = "pointer"; // Optional: make it feel clickable
    item.addEventListener("click", () => {
      const page = item.getAttribute("data-page");
      if (page) {
        window.location.href = page;
      }
    });
  });

  // Optional: Card buttons still work
  const buttons = document.querySelectorAll(".card button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const section = button.parentElement.querySelector("h3").innerText;
      alert(`You clicked on: ${section}`);
    });
  });
});
