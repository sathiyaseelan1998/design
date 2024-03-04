var container=document.getElementById("container");
console.log(container);

let h=document.getElementById("h");

console.log(h.textContent);

function change(){
h.textContent="Hello";
h.style.color="red";
h.style.borderBottom="5px double blue";
h.style.width="80px";
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
    alert("click ok");
}

console.log(div1);