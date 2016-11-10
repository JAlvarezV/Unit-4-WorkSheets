/*
 9. Crea una página web que haciendo uso de eventos permita arrastrar una imagen
 haciendo uso del ratón (al pulsar sobre la imagen la voy arrastrando hasta que suelto
 el botón).
 10.Mejora el ejercicio anterior para que se pueda hacer en una página con un número
 cualquiera de imágenes.
 */

window.onload = function () {
    moving = [];
    document.addEventListener("mousemove", move);
    var d = document.getElementsByClassName('draggable');
    for(var i = 0; i < d.length; i++){
        d.item(i).addEventListener("mousedown", addImg);
        d.item(i).addEventListener("mouseup",delImg);
        d.item(i).addEventListener("mouseout",delImg);
    }

};


function addImg(event) {
    event.preventDefault();
    moving.push(event.target);
}

function delImg(event) {
   for(var i = 0;i<moving.length;i++){
       if(event.target==moving[i]){
           moving.splice(i,1);
           console.log(moving);
           break;
       }
   }
}

function move(event) {
    for(var i =0;i<moving.length;i++) {
       place(event.clientX,event.clientY,moving[i]);
    }
}




function place(xPos, yPos, element) {
    element.style.position = "absolute";
    element.style.left = xPos-(element.width/2)+'px';
    element.style.top = yPos-(element.height/2)+'px';
}