var arr=["a","b","c"];
var info={
    name:"dhoni",
    age:40,
    country:"india",
    fun:demo(),
    ar:arr
}
function demo(){
    console.log("i am cricketer");
}
console.log(info.ar[0]);
console.log(info.fun);
console.log(info.name);