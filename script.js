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
    }// --- LOGIC SCROLL ANIMATION (REVEAL) ---
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150; // Jarak trigger animasi dari bawah layar

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    // Panggil saat scroll
    window.addEventListener("scroll", reveal);
    
    // Panggil sekali pas loading kelar biar section paling atas langsung muncul
    reveal();
});