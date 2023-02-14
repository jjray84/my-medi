const btnEl = document.querySelector("#toggle");
const bootswatch = document.querySelector("#dark-mode");
const theme = JSON.parse(localStorage.getItem("theme"));
const darkModeLink = "https://bootswatch.com/5/darkly/bootstrap.min.css";
let isDark;

if (!theme) {
    isDark = false;
}
else {
    isDark = theme;
}

if (isDark) {
    bootswatch.setAttribute("href", darkModeLink);
    btnEl.setAttribute("class", "btn btn-dark");
}
else {
    bootswatch.setAttribute("href", "");
    btnEl.setAttribute("class", "btn btn-light");
}

const darkMode = () => {
    isDark = !isDark;
    if (isDark) {
        bootswatch.setAttribute("href", darkModeLink);
        btnEl.setAttribute("class", "btn btn-dark");
    }
    else {
        bootswatch.setAttribute("href", "");
        btnEl.setAttribute("class", "btn btn-light");
    }
    localStorage.setItem("theme", JSON.stringify(isDark));
}

btnEl.addEventListener("click", darkMode);