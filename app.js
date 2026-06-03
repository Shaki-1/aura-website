const downloadButtons = document.querySelectorAll(".disabled-download");

downloadButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.preventDefault();
    alert("AURA for Windows will be available here after the desktop app is ready.");
  });
});

