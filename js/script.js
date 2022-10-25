let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".name");

button.addEventListener("click", () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" :"ciemny";
});