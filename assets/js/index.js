function clickOpen(){
    document.getElementById('subcribe').style.display = "flex";
}
function clickClose(){
    var element = document.getElementById("subcribe");
    element.style.display= "none";
}

document.getElementById("myBtn").click();
function myFunction(id) {
    var x = document.getElementById(id);
    if (x.className.indexOf("show") == -1) {
    x.className += " show";
    } else { 
    x.className = x.className.replace(" show", "");
    }
}

function likeFunction(x) {
    x.style.fontWeight = "bold";
    x.innerHTML = "&#10003; Liked";
}



