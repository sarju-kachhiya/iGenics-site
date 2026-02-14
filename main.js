// footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    if (!id || id === "#") return;

    const el = document.querySelector(id);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });

    // close mobile nav if open
    const nav = document.getElementById("navItems");
    if (nav && nav.classList.contains("show")) {
      const bsCollapse = bootstrap.Collapse.getInstance(nav) || new bootstrap.Collapse(nav);
      bsCollapse.hide();
    }
  });
});

window.addEventListener("scroll", function () {
  const header = document.querySelector(".sticky-header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});