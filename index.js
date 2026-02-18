// 1. HEADER ANIMATION (Transparent -> Yellow on Scroll)
const header = document.querySelector("header");

window.addEventListener("scroll", function() {
    // When you scroll down 100px, add the 'sticky' class
    header.classList.toggle("sticky", window.scrollY > 100);
});

// 2. SCROLL REVEAL (Elements fade in when scrolling)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            // Uncomment line below if you want elements to fade out again when you scroll up
            // entry.target.classList.remove('show');
        }
    });
});

