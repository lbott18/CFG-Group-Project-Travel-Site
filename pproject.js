const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector(".primarynav");

hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    navMenu.classList.toggle('show');
    navMenu.classList.toggle('hide');
})

var popup = document.getElementById("myPopup");
var popbtn = document.getElementById("myBtn");
var popspan = document.getElementsByClassName("close") [0];

popbtn.onclick = function() {
    popup.style.display = "block";
}

popspan.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == popup) {
        popup.style.display = "none";
    }
}



