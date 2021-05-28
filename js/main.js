

function handleIntersect(entries, observer) {
    console.log(34);
    entries[0].target.classList.toggle("is-pinned", entries[0].intersectionRatio < 1)

}
function onBodyLoad() {
    var IE = /*@cc_on!@*/false;
    try {
        const el = document.getElementsByClassName("nav-wrapper")[0];
        console.log(el);
        const observer = new IntersectionObserver(handleIntersect, { threshold: [1] });
        /*([e]) => e.target.classList.toggle("is-pinned", e.intersectionRatio < 1),
        { threshold: [1] }
    );*/

        observer.observe(el);
    } catch (e) {

    }
}

function open_mobile_nav() {
    const el = document.getElementsByClassName("nav-wrapper2")[0];
    el.classList.add("is_open");
}
function close_mobile_nav() {
    const el = document.getElementsByClassName("nav-wrapper2")[0];
    el.classList.remove("is_open");
}