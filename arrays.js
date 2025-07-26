let arr=[1,2,3,4];
console.log(arr);
l=arr.length;
console.log(l);
const m=["mouli",383,16,1456.89,true];
s=m.length;
console.log(m);
console.log(s);
m.push(38);
console.log(m);
m.pop();
console.log(m);
m.unshift(38);
console.log(m);
m.shift();
console.log(m);

for(let i=0;i<m.length;i++){
    console.log(m[i]);
}

const a=[1,2,3,4,5];
console.log(a);
// a=7;
// console.log(a);

const ab=[1,2,3,4,5];
console.log(a);
ab[0]=7;
console.log(a);

let array=[[1,0,0],[0,1,0],[0,0,1]];
console.log(array);

let barray=[[1,0,0],[0,1,0,1,0],[0,7,8,9,4,0,1]];
console.log(barray);

console.log(typeof(barray));

for(let ele of barray){
    console.log(ele);
}