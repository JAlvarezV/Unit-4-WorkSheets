window.onload = function () {
    document.getElementById('csession').addEventListener("click", function () {
       delete_cookie("username");
    });

    var cuser = checkCookie("username");
    console.log("c: "+cuser);
    //Not username cookie, ask for username
    if(!cuser){
        do {
            var u = window.prompt("Enter an username: ");
        }while(u=="");
        setCookie("username",u,5);
        var h1 = document.createElement("h1");
        h1.innerHTML = "Hello "+u;
        document.body.appendChild(h1);
    }else{
        var c = getCookie("username");
        var h1 = document.createElement("h1");
        h1.innerHTML = "Hello "+c;
        document.body.appendChild(h1);
    }

};

function delete_cookie( name ) {
    document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function setCookie(cname, cvalue, exminutes) {
    var d = new Date();
    d.setTime(d.getTime() + (exminutes*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    console.log(document.cookie);
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var cook=getCookie(cname);
    if (cook!="") {
        return cook;
    } else {
        return false;
    }
}