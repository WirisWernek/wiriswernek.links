const whatsapp_button = document.getElementById("whatsapp-button");
const linkedin_button = document.getElementById("linkedin-button");
const github_button = document.getElementById("github-button");
const instagram_button = document.getElementById("instagram-button");

whatsapp_button.addEventListener("click", () => {
  openWhatsApp();
});

linkedin_button.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/wiriswernek/", "_blank");
});

github_button.addEventListener("click", () => {
  window.open("https://github.com/WirisWernek", "_blank");
});

instagram_button.addEventListener("click", () => {
  window.open("https://www.instagram.com/wiriswernek", "_blank");
});

function openWhatsApp() {
  const userAgent = window.navigator.userAgent;
  let contato = "";
  if (
    userAgent.includes("iPhone") ||
    userAgent.includes("Android") ||
    userAgent.includes("webOS") ||
    userAgent.includes("BlackBerry") ||
    userAgent.includes("iPod")
  ) {
    contato = "whatsapp://send?phone=5528999814672";
  } else {
    contato = "https://web.whatsapp.com/send?phone=5528999814672";
  }
  window.open(contato, "_blank");
}
