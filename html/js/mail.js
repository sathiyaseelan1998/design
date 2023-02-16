
window.onload=function(){
const password=document.querySelector("#password");
const check=document.querySelector("#check");
console.log(check.value);
check.addEventListener('click',function(){
    let type=password.getAttribute("type");
    if(type==="password"){
        type="text";
    }
    else if(type==="text"){
        type="password";
    }
    password.setAttribute("type",type);
});
}