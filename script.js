// Dark/Light mode toggle
const toggleBtn = document.getElementById("dark-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "Light Mode" : "Dark Mode";
});

// Contact Form Google Sheet Integration
const form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const scriptURL = "YOUR_GOOGLE_SHEET_WEBHOOK_URL"; // Replace with your Apps Script URL
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then(() => alert("Message sent successfully!"))
    .catch(() => alert("Error sending message"));
  form.reset();
});
