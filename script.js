document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  const menuButton = document.querySelector(".navTrigger");
  const menu = document.getElementById("mainListDiv");
  const downloadButton = document.getElementById("downloadButton");

  const updateNavState = () => {
    if (!nav) return;
    nav.classList.toggle("affix", window.scrollY > 60);
  };

  const closeMenu = () => {
    if (!menuButton || !menu || !nav) return;
    menuButton.classList.remove("active");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation");
    menu.classList.remove("show_list");
    nav.classList.remove("nav-open");
    document.body.classList.remove("menu-open");
  };

  if (menuButton && menu && nav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("show_list");
      menuButton.classList.toggle("active", isOpen);
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      nav.classList.toggle("nav-open", isOpen);
      document.body.classList.toggle("menu-open", isOpen);
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  if (downloadButton) {
    downloadButton.addEventListener("click", () => {
      const filePath = downloadButton.dataset.downloadPath || "assets/RmendezFlyers.pdf";
      const fileName = downloadButton.dataset.downloadName || "RmendezFlyers.pdf";
      const link = document.createElement("a");
      link.href = filePath;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  if (window.lightbox) {
    window.lightbox.option({
      albumLabel: "Image %1 of %2",
      fadeDuration: 160,
      imageFadeDuration: 160,
      resizeDuration: 180,
      wrapAround: true
    });
  }

  updateNavState();
  window.addEventListener("scroll", updateNavState, { passive: true });
});
