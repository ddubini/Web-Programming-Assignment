window.onload = function () {
    
    var image = document.querySelectorAll(".artThumb");
    for (var i = 0; i < image.length; i++) {
        image[i].onmouseover = function() {
            var newNode = document.createElement("img");
            newNode.src= this.src
            newNode.className='bigImg';
            this.parentNode.appendChild(newNode);
        }
        image[i].onmouseout = function(){
            var image = document.querySelectorAll(".bigImg");
            for (var i=0; i < image.length; i++){
                image[i].parentNode.removeChild(image[i]);
            }
        }
    }
}