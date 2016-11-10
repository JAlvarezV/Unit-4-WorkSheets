window.onload = function () {
    paintTable();
}

function paintTable() {
    table = document.createElement('table');
    table.border = "1";
    for (var i = 0; i < 5; i++){
        var tr = document.createElement('tr');
        for (var j = 0; j < 8; j++){
            var td = document.createElement('td');
            td.style.width = "100px";
            td.style.height = "100px";
            td.addEventListener("mousemove", paintCell);
            td.addEventListener("mousedown", click);
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
}

function paintCell(event) {
    if(event.ctrlKey){
        event.target.style.backgroundColor = "red";
    }else if(event.shiftKey){
        event.target.style.backgroundColor = "blue";
    }
}

function click(event) {
    switch (event.button) {
        case 0: //Left click
            deleteLine(event.target);
            break;
        case 1:
            clearTable();
            break;
    }
}


function deleteLine(td) {
    //Get a td, finds its parent(tr) and set background color of all childrens(td) to white
    var tr = td.parentNode;
    var tds = tr.childNodes;
    tds.forEach(function (element) {
        element.style.backgroundColor = "white";
    });
}

function clearTable() {
    var t = table.getElementsByTagName('tr');
    for(var i = 0;i<t.length;i++){
        var tt = t.item(i).getElementsByTagName('td');
        for(var j = 0;j<tt.length;j++){
            tt.item(j).style.backgroundColor = "white";
        }
    }
}



