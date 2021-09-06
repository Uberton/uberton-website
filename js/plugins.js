
function onDownloadClick() {
    let el = document.getElementById("the-download-wrapper");
    if (el.style.display == "block") {
        el.style.display = "none";
    } else {
        el.style.display = "block";
    }
}

function openInstallation(type) {
    let wrapper = document.getElementById("install");
    let win = document.getElementById("win-install");
    let mac = document.getElementById("mac-install");
    (type == "Win" ? win : mac).style.display = "block";
    (type == "Win" ? mac : win).style.display = "none";
    wrapper.style.display = "block";
}