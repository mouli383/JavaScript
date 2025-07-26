//Object is like a map/dictionary where we have key-value pairs
var details=["Mouli",38,9.74];
let obj={
    name:"Mouli",
    Roll_Call:38,
    cgpa:9.74,
};

console.log(obj);

let car={
    name:"Honda city",
    speed:150,
    price:150000,
};

console.log(car);
console.log(car.name);
console.log(car.name,car.speed,car.price);
console.log(car['speed']);
car.speed=200;
console.log(car.speed);

for(const key in car){
    console.log(key,car[key]);
}