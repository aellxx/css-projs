const headerClassList = document.querySelector("header").classList;

window.addEventListener("scroll", () => {
    window.pageYOffset >= 100 ? headerClassList.add("shadow-box") : headerClassList.remove("shadow-box");
})