document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

window.setTimeout(() => {
  const target = document.querySelector("#quickquote-web-form");
  if (!target || target.children.length || target.textContent.trim()) return;

  target.innerHTML = `
    <div class="qq-fallback">
      <p class="eyebrow">QuickQuote connection pending</p>
      <h3>Instant estimate form is being connected.</h3>
      <p>The QuickQuote portal is not returning the contractor form yet. Call 720-380-7476 and 5280 Pro Exteriors can start the estimate directly.</p>
      <a href="tel:7203807476">Call 720-380-7476</a>
    </div>
  `;
}, 4500);
