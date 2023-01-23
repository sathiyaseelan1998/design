function prime(no){
    let div=2;
    let count=0;
    while(no>div){
        if(no%div==0){
            count++;
        }
    }
    if(count==0){
        console.log(no,' is prime number');
    }
    else{
        console.log(no,' is not prime number');
    }
}

prime(13);