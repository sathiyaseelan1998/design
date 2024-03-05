var container=document.getElementById("container");
console.log(container);

let h=document.getElementById("h");

console.log(h.textContent);

function change(){
h.textContent="Hello";
h.style.color="red";
h.style.borderBottom="5px double blue";
h.style.width="80px";
h.classList.add('orange');
}

let div1=document.getElementById("div1");
let div2=document.getElementById("div2");
function hi(){

    div1.style.backgroundColor="yellow";
    div1.textContent="Hi...";
    div1.style.transition=".5s";
    div1.style.width="200px";
    bye();
}
 let bye=()=>{

    div2.style.backgroundColor="lime";
    div2.textContent="Bye...";
    div2.style.transition=".5s";
    div2.style.width="200px";
}

console.log(div1);

let divs=container.querySelectorAll("div");
console.log(divs);
let div3=document.getElementById("div3");
console.log(div3.textContent);
div3.addEventListener('click',(event)=>{
    console.log(event.target);
  div3.style.backgroundColor="orange"
    div3.textContent="change color";

});
let create=document.createElement("div");
create.textContent="6";
document.body.appendChild(create);
console.log(create.textContent);
create.classList.add('box');

let boxes=document.getElementsByClassName("boxes");
console.log(boxes);
boxes.addEventListener('click',(event)=>{
    console.log(event.target);
 
});