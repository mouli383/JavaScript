let arr=[1,3,5,7,9];
console.log(arr);

// let brr=[];
// for(const ele of arr){
//     brr.push(ele*2);
// }

function twice(ele){
    return ele+10;
}

let brr=arr.map(twice);
console.log(brr);