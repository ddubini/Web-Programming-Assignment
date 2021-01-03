function checkValidate(){
    var titleValue = document.getElementById('titleText').value
    var desValue = document.getElementById('descText').value
    var checkBit = 0

    if(!titleValue){
        document.getElementById("titleBox").style.background = "firebrick"
        document.getElementById("titleText").style.background = "firebrick"
        document.getElementById("titleText").style.borderColor = "white"
        document.getElementById("titleLabel").style.color = "white"

        checkBit = 1
    }

    if(!desValue){
        document.getElementById("descBox").style.background = "firebrick"
        document.getElementById("descText").style.background = "firebrick"
        document.getElementById("descText").style.borderColor = "white"
        document.getElementById("descLabel").style.color = "white"
        
        checkBit = 1
    }

    if(!document.getElementById("checkboxID").checked){
        document.getElementById("actText").style.color = "white"
        document.getElementById("actBox").style.background = "firebrick"

        checkBit = 1
    }

    if(checkBit == 1) return false
    else return true
}

function titleEvent(){
    document.getElementById("titleBox").style.background = "#FAFCFF"
    document.getElementById("titleText").style.background = "white"
    document.getElementById("titleText").style.borderColor = "black"
    document.getElementById("titleLabel").style.color = "black"
}

function descEvent(){
    document.getElementById("descBox").style.background = "#FAFCFF"
    document.getElementById("descText").style.background = "white"
    document.getElementById("descText").style.borderColor = "black"
    document.getElementById("descLabel").style.color = "black"
}

function checkAcpt(){
    if(document.getElementById("checkboxID").checked){
        document.getElementById("actText").style.color = "black"
        document.getElementById("actBox").style.background = "#EBF4FB"
    }
}