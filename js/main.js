function myFunc(){
let x = document.getElementById("my-menu");
if (x.className === "menu"){
x.className += " responsive";
}
else {
x.className = "menu";
}
}
function myFunc2(){
let x = document.getElementById("flying-eagle");
if (x.className === "article"){
    x.className += " text";
}
else {
    x.className = "article";
}
}