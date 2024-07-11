const calbutton = document.getElementById('calbutton');
const backbutton = document.getElementById('backbutton');
var inputpage = document.getElementById('inputpage');
var outputpage = document.getElementById('outputpage');
function showanswer() {
    inputpage.style.display = 'none';
    outputpage.style.display = 'block';
};
function hideanswer() {
    inputpage.style.display = 'block';
    outputpage.style.display = 'none';
};
calbutton.addEventListener("click", function() {
    showanswer();
});
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        showanswer();
    }
});
backbutton.addEventListener('click', function() {
    hideanswer();
});
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hideanswer();
    }
});
//---------------------------------------------------//
