var myHeading = document.getElementById("h3");
myHeading.innerHTML = 'Hello world!';
var p1 = document.getElementById("p1");
p1.onclick = function () {
    alert("Ouch! Stop poking me!");
};
var myImage = document.getElementById("img1");
myImage.onclick = function () {
    var mySrc = myImage.getAttribute("src");
    var kuwoSrc = "images/kuwo-icon.jpg";
    var headSrc = "images/head_icon.jpg";
    if (mySrc == kuwoSrc) {
        myImage.setAttribute("src", headSrc);
    }
    else {
        myImage.setAttribute("src", kuwoSrc);
    }
};
var button1 = document.getElementById("button1");
button1.onclick = function () {
    setUserName();
};
if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    var name_1 = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + name_1;
}
function setUserName() {
    var name = prompt("Please enter your name.");
    localStorage.setItem("name", name);
    myHeading.innerHTML = "Mozilla is cool, " + name;
}
//# sourceMappingURL=main.js.map