const toggle = document.getElementById("toggle");
toggle.addEventListener("change", () => {
    document.body.classList.toggle("dark");
});

const btn = document.getElementById("scrolltop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
