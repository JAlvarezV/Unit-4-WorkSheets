window.onload = function () {
   document.addEventListener("mousemove",function (event) {
     document.getElementById('x').innerHTML = "X: "+event.clientX;
      document.getElementById('y').innerHTML = "Y: "+event.clientY;
   });
}

