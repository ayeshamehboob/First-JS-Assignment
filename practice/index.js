// let a1 = document.getElementById("myheading");
// a1.innerText = "This text is changed with javascript";
// a1.innerHTML = "<h6>this is channged through inner html</6h>";

// a1.style.color = "red";
// a1.style.backgroundColor = "lightgreen";
// a1.style.fontSize = "30px";
// a1.style.border = "2px solid black";
// a1.style.padding = "10px";
// a1.style.margin = "10px";

// let class1 = document.getElementsByClassName("testing");

// class1[0].innerText = "change this text";
// class1[1].innerText = "second heading with same class";

                // it can be done too through loop

// let a1 = class1.length;

// for (let i = 0; i < a1; i++) {
//     class1[i].style.color = "red";
//     class1[i].style.backgroundColor = "lightgreen";
//     class1[i].style.fontSize = "30px";
//     class1[i].style.border = "2px solid black";
//     class1[i].style.padding = "10px";
//     class1[i].style.margin = "10px";
// }

let para = document.getElementsByTagName("p");
// para[0].innerHTML = "<h1> This is a new heading </h6>";

                // in above exampla, if we will right innerHTML, it can change heading but if we will right inner text it can change only text content and will give h1 too.

// Array.from(para).forEach(function(p){
//     p.style.color = "red";
//     p.style.backgroundColor = "lightgreen";
//     p.style.border = "2px solid black";
//     p.style.border = "2px solid black";
// });

// let para1 = document.querySelector(".class1");
// para1.style.color = "red";
        // the aove method can change only first element in para

let mydiv = document.querySelectorAll(".class1, h1, p, a");

mydiv.forEach(function(div) {
    // div.style.color = "red"; 

if (div.tagName === "H1"){
        div.style.backgroundColor = "lightgreen";
        div.style.color = "red";
};
if (div.tagName === "P"){
    div.style.backgroundColor = "red";
    div.style.color = "pink";
};
if (div.tagName === "A"){
    div.style.backgroundColor = "yellow";
    div.style.color = "black";
};
        
});
  

    




