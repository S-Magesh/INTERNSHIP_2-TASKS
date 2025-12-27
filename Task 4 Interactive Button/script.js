// Grab the button
const colorBtn = document.getElementById("colorBtn");

// Array of fun background colors
const colors = ["#FFB6C1", "#87CEFA", "#90EE90", "#FFD700", "#FFA07A", "#DDA0DD"];

// Add event listener
colorBtn.addEventListener("click", () => {
  // Pick a random color
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});
