window.onload = function(){
    var node = document.body.getElementsByTagName("*")
    
    
    for (var i=1; i < node.length; i = i + 1) {
        var current = node[i]
          
        if (current.nodeName == 'DIV' ){
            current.innerHTML = current.innerHTML + "<div class = 'hoverNode'>"+current.nodeName +"</div>"
            current.addEventListener("click", clickCheck)
            break;
        }
    } 

    for (var i=1; i < node.length; i = i + 1) {
        var current = node[i];
          
        if (node[i].nodeType != 3 && current.nodeName != 'DIV' ){
            alert(current.nodeName)
            current.innerHTML = current.innerHTML + "<div class = 'hoverNode'>"+ current.nodeName +"</div>"
            current.addEventListener("click", clickCheck)
        }
    }  
    function clickCheck() {
        alert(current.id + current.parentNode.nodeName)
    }
 }