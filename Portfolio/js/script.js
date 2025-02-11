let typed = new Typed('#element', {
    strings: ['Web Developer',],
    typeSpeed: 50,
});

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const targetClass = this.getAttribute("data-target");
        const targetSection = document.querySelector(`.${targetClass}`);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: "smooth"
            });
        }
    });
});
