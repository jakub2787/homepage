{
    const button = document.querySelector(".button");
const body = document.querySelector(".body");
const themeName = document.querySelector(".name");
const onchangeBackgroundClick = () => {
    body.classList.toggle("dark");

    themeName.innerText = body.classList.contains("dark") ? "jasny" :"ciemny";
}
button.addEventListener("click", onchangeBackgroundClick);
}