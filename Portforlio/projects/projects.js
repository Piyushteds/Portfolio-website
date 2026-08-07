// Back to Home
document.getElementById("backhome").addEventListener("click", function () {
    window.location.href = "../index.html";
});

// Project 1
document.getElementById("demo1").addEventListener("click", function (e) {
    e.preventDefault();
    window.open("http://smartfarmer:2005", "_blank");
});

document.getElementById("github1").addEventListener("click", function (e) {
    e.preventDefault();
    window.open("https://github.com/Piyushteds/AI-smart-farmer-project", "_blank");
});

//Project 2
document.getElementById("buttons2").addEventListener("click", function (e) {
    e.preventDefault();
    window.open("https://your-demo2-link.com", "_blank");
});

document.getElementById("buttons2").addEventListener("click", function (e) {
    e.preventDefault();
    window.open("https://github.com/Piyushteds/gemchat", "_blank");
});

// Project 3
document.getElementById("buttons3").addEventListener("click", function (e) {
    e.preventDefault();
    window.open("https://your-demo3-link.com", "_blank");
});

document.getElementById("buttons3").addEventListener("click", function (e) {
    e.preventDefault();
    window.open("https://github.com/yourusername/project3", "_blank");
});