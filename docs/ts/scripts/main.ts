let myHeading: Element = document.querySelector("h1");
myHeading.innerHTML = 'Hello world!';

let p1: HTMLElement = document.getElementById("p1");
p1.onclick = function () {
    alert("Ouch! Stop poking me!");
}

let myImage: HTMLElement = document.getElementById("img1");
myImage.onclick = function () {
    let mySrc: string = myImage.getAttribute("src");
    let kuwoSrc: string = "images/kuwo-icon.jpg";
    let headSrc: string = "images/head_icon.jpg";
    if (mySrc == kuwoSrc) {
        myImage.setAttribute("src", headSrc);
    }
    else {
        myImage.setAttribute("src", kuwoSrc);
    }
}

let button1: HTMLElement = document.getElementById("button1");
button1.onclick = function () {
    setUserName();
}

if (!localStorage.getItem("name")) {
    setUserName();
}
else {
    let name: string = localStorage.getItem("name");
    myHeading.innerHTML = "Mozilla is cool, " + name;
}

function setUserName(): void {
    let name: string = prompt("Please enter your name.");
    localStorage.setItem("name", name);
    myHeading.innerHTML = "Mozilla is cool, " + name;
}
