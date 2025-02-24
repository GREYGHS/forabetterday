const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/website-drawing-scan.png") {
    myImage.setAttribute("src", "images/firefox.png");
  } else {
    myImage.setAttribute("src", "images/website-drawing-scan.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
// 个性化欢迎信息函数
function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    if (!myName) {
        setUserName();
      } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
      }
  }
// 初始代码块
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
//  onclick 事件处理器
  myButton.onclick = function () {
    setUserName();
  };
  
  