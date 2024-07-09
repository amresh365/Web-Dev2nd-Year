//DOM manupulation

let elem = document.getElementById("click"); //here getting alement by ID
//console.log(elem);
let elemclass = document.getElementsByClassName("container"); //hew Getting Alement by Class Name
//console.log(elemclass);

//elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");
elemclass[0].classList.add("text-succes");

//console.log(elem.innerHTML);
//console.log(elem.innerText);

//console.log(elemClass[0].innerText);
//console.log(elemClass[0].innerHTML);
tn = document.getElementsByTagName("div"); //here geting an alement by tagName
// console.log(tn);

createdElement = document.createElement("p");
createdElement.innerText = "This isCreated Para"; //here appending the child
tn[0].appendChild(createdElement);

createdElement2 = document.createElement("b");
createdElement2.innerText = "this is bold"; //here replacing the child
tn[0].replaceChild(createdElement2, createdElement);
//removeChild(element);

//Selecting Using Query
sel = document.querySelector(".container");
sel1 = document.querySelectorAll(".container");
console.log(sel);
console.log(sel1);

// Event in JAVAScript;

// function clicked() {
//   console.log("the button was clicked");
// }
// window.document.onload = function () {
//   console.log("docoment is loaded");
// };

// firstcontainer.addEventListener("click", function () {
//   document.querySelectorAll(".container")[1].innerHTML =
//     "<b>We are changed</b>";
//   // console.log("clicked on container");
// });
// firstcontainer.addEventListener("mouseover", function () {
//   console.log("over mouse");
// });
// firstcontainer.addEventListener("mouseout", function () {
//   console.log("mouse out container");
// });

// firstcontainer.addEventListener("mouseup", function () {
//   console.log("mouse is up");
// });
// firstcontainer.addEventListener("mousedown", function () {
//   console.log("mouse is down");
// });

//ArrowFuntion

// sum = (a,b) => {
//   a + b;
// };

logkaro = () => {
  document.querySelectorAll(".container")[1].innerHTML =
    "<b>We are changed</b>";
  console.log("I am loged");
};

//SetTimeout And Set Time Intervsl
//setTimeout(logkaro, 2000);
//clr=setInterval(logkaro, 2000);
//clearIntervel(clr)/clearTimeout(clr);

//  LocalStorage;
//localStorage.setItem("Amresh", "gupta");
//localStorage.getItem("name");

//JSON;
obj = { name: "amresh", length: 1 };
js = JSON.stringify(obj);
console.log(js);

__sudhakar__mishra;
