const divWide = document.querySelector("header div:nth-child(2)");
const divNarrow = document.querySelector("header div:last-child");

function responsiveScreen() {
    if (window.innerWidth < 700) {
        divWide.classList.add("hidden");
        divNarrow.classList.remove("hidden");
    } else {
        divWide.classList.remove("hidden");
        divNarrow.classList.add("hidden");
    }
}

responsiveScreen();
window.addEventListener('resize', responsiveScreen);