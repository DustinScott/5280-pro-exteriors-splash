const switchLinks = Array.from(document.querySelectorAll(".switch-link"));
const splashes = Array.from(document.querySelectorAll(".splash"));

const setActiveSplash = (id) => {
  switchLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.target === id);
  });

  splashes.forEach((splash) => {
    splash.classList.toggle("is-active", splash.id === id);
  });
};

const initialId = window.location.hash?.replace("#", "");
if (splashes.some((splash) => splash.id === initialId)) {
  setActiveSplash(initialId);
}

switchLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActiveSplash(link.dataset.target);
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

    if (visible) {
      setActiveSplash(visible.target.id);
    }
  },
  { rootMargin: "-35% 0px -45% 0px", threshold: [0.2, 0.4, 0.6] }
);

splashes.forEach((splash) => observer.observe(splash));

document.querySelector("form")?.addEventListener("submit", (event) => {
  event.preventDefault();

  const button = event.currentTarget.querySelector("button");
  button.textContent = "Request Received";
  button.disabled = true;
});
