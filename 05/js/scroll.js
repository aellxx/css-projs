const headerClassList = document.querySelector("header").classList;
const spanClassList = document.querySelector("header nav span:last-child").classList;
const span = document.querySelector("header nav span:nth-child(2)");


const onScroll = () => {
    if (window.pageYOffset >= 100) {
        headerClassList.add("shadow-box");
        spanClassList.add("hidden");
        span.innerText = "Schwartz Media";

    } else {
        headerClassList.remove("shadow-box");
        spanClassList.remove("hidden");
        span.innerText = "Schwartz";
    }
}

window.addEventListener("scroll", onScroll);