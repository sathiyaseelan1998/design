var str="amma";
var rev="";
for(i=str.length-1;i>=0;i++){
    rev+=str.charAt(i);
}
if(str==rev){
    console.log(str," is palindrome")
}
else{
    console.log(str," is not palindrome")
}
