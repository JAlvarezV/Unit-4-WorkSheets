window.onload = function () {
  fSizeDefault = 16;
  fSize = fSizeDefault;

  document.getElementById('sizeUp').addEventListener("click",resize);
  document.getElementById('sizeDown').addEventListener("click",resize);
  document.getElementById('sizeDefault').addEventListener("click",resize);


  document.getElementById('aLeft').addEventListener("click",align);
  document.getElementById('aRight').addEventListener("click",align);
  document.getElementById('aCenter').addEventListener("click",align);
  document.getElementById('aJustify').addEventListener("click",align);
};

function resize(event) {
    var type = event.target.id;
    var t = document.getElementsByClassName("text-resizable");
    for(var i = 0; i < t.length; i++){
            switch(type){
                case 'sizeDefault':
                    var temp = t.item(i);
                    temp.style.fontSize = fSizeDefault+"px";
                    break;
                case 'sizeUp':
                    var temp = t.item(i);
                    temp.style.fontSize = ++fSize+"px";
                    break;
                case 'sizeDown':
                    var temp = t.item(i);
                    temp.style.fontSize = --fSize+"px";
                    break;
            }
        }
};

function align(event) {
    var type = event.target.id;
    var t = document.getElementsByClassName("text-alignable");
    for(var i = 0; i < t.length; i++){
        switch(type){
            case 'aLeft':
                var temp = t.item(i);
                temp.style.textAlign = "left";
                break;
            case 'aCenter':
                var temp = t.item(i);
                temp.style.textAlign = "center";
                break;
            case 'aRight':
                var temp = t.item(i);
                temp.style.textAlign = "right";
                break;
            case 'aJustify':
                var temp = t.item(i);
                temp.style.textAlign = "justify";
                break;
        }
    }
};




