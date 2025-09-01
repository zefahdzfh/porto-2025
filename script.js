document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("loading-overlay");
    const images = document.images;
    let loaded = 0;
    const total = images.length;

    if (total === 0) {
        overlay.style.display = "none";
    }

    function checkLoaded() {
        loaded++;
        if (loaded >= total) {
            overlay.style.display = "none";
        }
    }

    for (let i = 0; i < total; i++) {
        if (images[i].complete) {
            checkLoaded();
        } else {
            images[i].addEventListener("load", checkLoaded);
            images[i].addEventListener("error", checkLoaded);
        }
    }
});