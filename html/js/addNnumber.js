function add(no){
    var count=1;
    var sum=0;
    while(count<=no){
        sum+=count;
        count++;
    }
    console.log(sum);
}
add(30);