let counter = 0;

document.querySelector("#nothingo").addEventListener("click", () => {
    counter++;
    document.querySelector("#nothingo-texto").innerHTML = `x${counter}`
})

window.addEventListener("load", () => {
  const overlay = document.querySelector("#overlay");
  
  // Start the fade-out effect
  overlay.classList.add("fade-out");
  
  // Wait for the fade-out animation to complete before fully removing the overlay
  setTimeout(() => {
    overlay.classList.add("hidden");
  }, 1000); // Match the 1s duration of your fade-out animation
});