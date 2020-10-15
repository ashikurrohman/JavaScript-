

// Assign Object Property usign Object.assign Method 



let obj1 = {
a:1,
b:2,
c:3
}
let obj3 = {
g:7,
h:8
}

let obj2 = Object.assign({d:4,e:5},obj1);
console.log(obj2)


Result :

a: 1
b: 2
c: 3
d: 4
e: 5
