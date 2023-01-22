var ar=["one","two","three"];
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
