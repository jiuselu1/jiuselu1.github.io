let myImage =document.querySelector("img");

myImage.onclick = function(){
    let mysrc = myImage.getAttribute("src");
    if (mysrc === "imges/images.jpeg"){
        myImage.setAttribute("src","imges/images2.jpeg");
    }else {
        myImage.setAttribute("src","imges/images.jpeg");
    }
}
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
        setUserName();
    }else{
    localStorage.setItem("name",myName);
    myHeading.textContent = "Mozilla 酷毙了，"+myName;
    }
    
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，"+storedName;
}
myButton.onclick = function(){
    setUserName();
}
