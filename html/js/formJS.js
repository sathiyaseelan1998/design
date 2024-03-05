let div=document.createElement("div");
function save(){
    let name=document.querySelector("#name").value;
    let pass=document.querySelector("#password").value;
    let conPass=document.querySelector("#conPassword").value;
   
    if(pass==="" || conPass==="" || name===""){
        
        div.textContent="empty";
        document.body.appendChild(div);
        div.style.color="red";
    }
   else if(pass===conPass){
      
    div.textContent="successful";
    document.body.appendChild(div);
    div.id='success';
    div.style.color="green";
    }
    else{
      
        div.textContent="password not same";
        document.body.appendChild(div);
        div.style.color="red";
    }
}
        

