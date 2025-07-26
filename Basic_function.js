function OnetoN(n){ //function declaration
   //let n=10;
    for(let i=1;i<=n;i++){
        console.log(i);
    }
}

OnetoN(10);//function calling
OnetoN(20);

function Sum(a,b){
    console.log(a+b);
}

Sum(5,6);
Sum(16,38);

let a=-6;
let b=8;
console.log(Math.abs(a*a*a) + Math.abs(b*b*b));