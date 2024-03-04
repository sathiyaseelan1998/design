/*var ar=["one","two","three"];
for(i=0;i<ar.length;i++){
    console.log(ar[i]);
}
ar.push("four");//add last element
console.log(ar);
ar.pop(3);//remove last element
console.log(ar);
ar.shift(1);//remove first element
console.log(ar);
ar.unshift("ONE");//add first element
console.log(ar);
ar.forEach(val =>{
    console.table(val);
})*/

let arr=[1,2,3,4,5];
/*console.table(arr);
let mul=arr.forEach(val=>{
    console.table(val*10);
});
let a=0;
arr.forEach(val=>{
    return a+=val;
});
console.log(a);*/
var add=arr.map(val=>{
   return val*2;
});
console.log(add);

let f=arr.filter(val=>{
    return val%2==0;
});
console.log(f);

let r=arr.reduce((total,val)=>{
    return total+val;
});
console.log(r);

let ob=[{id:1,name:"dhoni",age:41},
        {id:2,name:"virat",age:36},
        {id:3,name:"ram",age:25},
        {id:4,name:"sam",age:28}];

console.log(ob);

let mm=ob.map(val=>{
    return val.name;
});
console.log(mm);

let ff=ob.filter(val=>{
   id:val.id;
   name:val.name;
    return val.age>30;
});
console.log(ff);

ff.forEach(val=>{
console.log(val.name);

});