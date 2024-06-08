console.log("work.html")
var contactMenu = document.getElementById("Menu-contact");

document.getElementById('Menu-contact').addEventListener('click', function() {
    console.log("work.mmmm")

    localStorage.setItem('setToContact', 'Contact');
    window.location.href = 'index.html';
});
