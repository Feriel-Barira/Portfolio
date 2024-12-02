/**
 * Light and dark mode
 */
const /** {NodeElement} */ $themeBtn =
    document.querySelector("[data-theme-btn]");
const /** {NodeElement} */ $HTML = document.documentElement;
let /** {Boolean | String} */ isDark = window.matchMedia(
    "(prefers-color-scheme:dark)"
  ).matches;
if (sessionStorage.getItem("theme")) {
  $HTML.dataset.theme = sessionStorage.getItem("theme");
} else {
  $HTML.dataset.theme = isDark ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
}
const changeTheme = () => {
  $HTML.dataset.theme =
    sessionStorage.getItem("theme") === "light" ? "dark" : "light";
  sessionStorage.setItem("theme", $HTML.dataset.theme);
};
$themeBtn.addEventListener("click", changeTheme);
/**
 * TAB
 */
const /** {NodeList} */ $tabBtn = document.querySelectorAll("[data-tab-btn]");
let /** {NodeElement} */ [lastActiveTab] =
    document.querySelectorAll("[data-tab-content]");
let /** {NodeElement} */ [lastActiveTabBtn] = $tabBtn;
$tabBtn.forEach((item) => {
  item.addEventListener("click", function () {
    lastActiveTab.classList.remove("active");
    lastActiveTabBtn.classList.remove("active");

    const /** {NodeElement} */ $tabContent = document.querySelector(
        `[data-tab-content="${item.dataset.tabBtn}"]`
      );
    $tabContent.classList.add("active");
    this.classList.add("active");

    lastActiveTab = $tabContent;
    lastActiveTabBtn = this;
  });
});

emailjs.init("VOvpcWwnwuNxrYkgg");
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const responseMessage = document.getElementById("response-message");

    emailjs.sendForm("service_1uv0ess", "template_2gexsor", this).then(
      function (response) {
        console.log("Email sent successfully:", response);
        responseMessage.textContent = "Message sent successfully!";
        responseMessage.style.color = "green";
        document.getElementById("contact-form").reset();
      },
      function (error) {
        console.error("Email sending failed:", error);
        responseMessage.textContent = "An error occurred. Please try again.";
        responseMessage.style.color = "red";
      }
    );
  });
