export default function decorate(block) {
  // Replace the block inner HTML with the provided HTML template
  block.innerHTML = `
    <div class="hoarding-content">
      <p class="hoarding-title">Limited Time Only! App Exclusive!</p>
      <h1 class="hoarding-highlight">EXTRA 10% OFF</h1>
      <p class="hoarding-subtitle">on all App Orders</p>
      <div class="hoarding-code-container">
        <span class="hoarding-code-prefix">USE CODE:</span>
        <span class="hoarding-code"><span class="hoarding-code-value">RAMADAN10</span></span>
      </div>
      <button class="hoarding-button" aria-label="Shop Now">SHOP NOW</button>
    </div>
  `;
}
