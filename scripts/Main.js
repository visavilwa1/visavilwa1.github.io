const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/download.png") {
    myImage.setAttribute("src", "images/download.png");
  } else {
    myImage.setAttribute("src", "images/download.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `you are bitch, ${myName}`;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `you are a bitch, ${storedName}`;
  }
  myButton.onclick = () => {
    setUserName();
  };
  
  