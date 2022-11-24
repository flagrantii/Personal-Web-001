function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 30;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
function slideFunction(){
    var front = document.getElementById("certfront");
    var back = document.getElementById("certback");
    var but = document.getElementById("certclick");

    console.log(back.style.display);
    console.log("Luv U");

    if(back.style.display === "none" || back.style.display == 0){
        back.style.display="grid";
        but.innerText="See Less";
        but.style.color="white";
        but.style.backgroundColor="#333"
        for (var i = 0; i < back.length; i++){
            back[i].classList.add("active");
        }
    }else{
        back.style.display="none";
        but.innerText="See More";
        but.style.color="Black";
        but.style.backgroundColor="orange"
    }
}
window.onscroll = function(){
    reveal();
}    
