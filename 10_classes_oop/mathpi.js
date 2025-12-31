const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descripter); // {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}

const tea = {
    name: 'Green Tea',
    price: 250,
    isAvailable: true,
    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(tea, 'price'));

Object.defineProperty(tea, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(tea, "name"));

for (let [key, value] of Object.entries(tea)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}