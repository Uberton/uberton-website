
function onBodyLoad() {
    const el = document.querySelector(".nav-wrapper")
    console.log(el);
    const observer = new IntersectionObserver(
        ([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
        { threshold: [1] }
    );

    observer.observe(el);
}