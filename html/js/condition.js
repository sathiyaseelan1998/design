
function compare(a){
if(a=="10"){ //compare value only
    console.log("i am 10");
}
else{
    console.log("i am not 10");
}
}
function compare1(a){
    if(a==="10"){ //compare value & data-types
        console.log("i am 10");
    }
    else{
        console.log("i am not 10");
    }
    }
compare(10);
compare1("10");

var x=12;
switch(x){
    case 10:
        console.log("TEN");
        break;
    case 20:
        console.log("TWENTY");
        break;
    default:
        console.log("NONE");
}