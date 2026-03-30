let a = document.getElementById("animal");

a.addEventListener("mouseover", function() {
    a.innerHTML = "Zigzag Stripe";
});

a.addEventListener("mousedown", function() {
    a.innerHTML = "ZEBRA";
});

setTimeout(function() {
    alert("Welcome To Animal Page");
}, 2000);