// let fb = document.getElementById("fb");
// let tw = document.getElementById("tw");
// let ld = document.getElementById("ld");

    // to change the link of website following commands    

// fb.href = "http://www.google.com";
// tw.href = "http://www.pintrest.com";
// ld.href = "http://www.wikipedia.com";


// let all_images = document.getElementsByTagName("img");

// all_images[0].src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";
// all_images[1].scr = "https://source.unsplash.com/random/200x200";
// all_images[2].scr = "https://source.unsplash.com/random/203x200";


// all_images[0].alt = "Google Logo";

// all_images[0].width = 200;
// all_images[1].height = 200;

// all_images[0].setAttribute("id", "first_image");
// let first_image = document.getElementById("first_image");

// first_image.src = "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png";

    // Events

// let btn1 = document.getElementById("btn");
// btn1.addEventListener("click", function(){

// document.body.style.backgroundColor = "blue";
// });

// btn1.addEventListener("mouseover", function(){

//     document.write("Hello World");
//     document.body.style.backgroundColor = "blue";
// });

// btn1.addEventListener("mouseout", function(){

//     document.write("Hello World");
//     document.body.style.backgroundColor = "blue";
// });

// btn1.addEventListener("mouseup", function(){

//     document.body.style.backgroundColor = "blue";
// });

// btn1.addEventListener("mouseover", function(){
    
//     btn1.style.backgroundColor = "skyblue";
// });


// btn1.addEventListener("mouseover", function(){
    
//     btn1.style.backgroundColor = "skyblue";
//     btn1.style.color = "red";
// });

    // create elements through jaascript

let new_div = document.createElement("div");
new_div.innerHTML = "<h1> This is my new little div </h1>";
new_div.style.backgroundColor = "pink";
new_div.style.width = "200px";
new_div.style.height = "200px";

document.body.appendChild(new_div);


let new_para = document.createElement("p");
new_para.innerHTML = "this is a new paragraph";
new_para.style.color = "red";
let btn1 = document.createElement("button");
btn1.innerHTML = "button";
document.body.appendChild(btn1);

btn1.addEventListener("click", function(){

    new_div.appendChild(new_para);

});



