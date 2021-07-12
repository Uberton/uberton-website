

/*
 *  observe when the nav-wrapper goes sticky
 */

function handleIntersect(entries, observer) {
    entries[0].target.classList.toggle("is-pinned", entries[0].intersectionRatio < 1)
}

function onBodyLoad() {
    var IE = /*@cc_on!@*/false;
    try {
        const el = document.getElementsByClassName("nav-wrapper")[0];
        const observer = new IntersectionObserver(handleIntersect, { threshold: [1] });
        observer.observe(el);
    } catch (e) {

    }
}

/*
 * open/close navigation for mobile view
 */

function open_mobile_nav() {
    const el = document.getElementsByClassName("nav-inner-wrapper")[0];
    el.classList.add("nav-is-open");
}

function close_mobile_nav() {
    const el = document.getElementsByClassName("nav-inner-wrapper")[0];
    el.classList.remove("nav-is-open");
}