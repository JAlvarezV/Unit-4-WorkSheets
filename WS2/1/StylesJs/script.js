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
    removeStyles(document.body);
}

function removeStyles(el) {
    el.removeAttribute('style');

    if(el.childNodes.length > 0) {
        for(var child in el.childNodes) {
            if(el.childNodes[child].nodeType == 1)
                removeStyles(el.childNodes[child]);
        }
    }
}




function minimal() {
    var container = document.getElementsByClassName('container')[0];
    container.style.width = "100%";
    container.style.height = "768px";

    var lat = document.getElementById('lateral');
    lat.style.float = "left";
    lat.style.width = "10%";
    lat.style.height = "100%";
    lat.style.backgroundColor = "aqua";

    var central = document.getElementById('central');
    central.style.float = "left";
    central.style.width = "90%";
    central.style.height = "100%";
    central.style.backgroundColor = "beige";

    var menu = document.getElementById('menu');
    var mul = menu.getElementsByTagName('ul')[0];
    var mli = mul.getElementsByTagName('li');

    for(var i = 0; i< mli.length; i++){
        mli.item(i).style.listStyle = "none";
        mli.item(i).style.display = "inline-block";
    }

    var footer = document.getElementsByTagName('footer')[0];
    footer.style.border = "1px solid black";
    footer.style.backgroundColor = "yellow";

    var ps = document.getElementsByTagName('p');
    for(var i = 0; i< ps.length; i++) {
        ps.item(i).style.margin = "15px";
    }
}
