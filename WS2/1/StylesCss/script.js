window.onload = function () {
    document.getElementById('normal').addEventListener("click",function (e) {
        e.preventDefault();
        normal();
    });
    document.getElementById('minimalista').addEventListener("click",function (e) {
        e.preventDefault();
        minimal();
    });
};

function normal() {
   changeCSS("normal.css",0);
}

function minimal() {
    changeCSS("minimal.css",0);
}


function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}