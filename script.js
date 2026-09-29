const menuButton = document.querySelector(".hamb");
const menu = document.querySelector(".links");

if (menuButton && menu) {
  const closeMenu = () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  };

  menuButton.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(open));
  });

  menu.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) closeMenu();
  });
}
