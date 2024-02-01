
document.addEventListener("DOMContentLoaded", function() {
    fetch("assets/Includes/header.html")
        .then(response => response.text())
        .then(header => {
            document.querySelector("header").innerHTML = header;
        });

    fetch("assets/Includes/footer.html")
        .then(response => response.text())
        .then(footer => {
            document.querySelector("footer").innerHTML = footer;
        });
});