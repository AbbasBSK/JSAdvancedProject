console.log(Array(5));
console.log(Array.of(1, 2, '3'));

console.log(Array.from([1,2,3], x => x * 2));
console.log(Array.from({length:3}, (_,i)=> i+1));

console.log([1,[2,[3,[4]]]].flat(2));
console.log([1,[2,[3,[4]]]].flat(Infinity));

console.log(['hi','bye'].flatMap(w => w.split('')));
console.log([1,2,3].flatMap(x => (x%2===0 ? [] : x)));

console.log([10,2,1].sort((a,b)=>a-b));
console.log(['b','c','a'].sort());

let a = [1,2,3,4];
a.fill(0,1,3);
console.log(a);


let arr1 = [1,2,3,4,5];
arr1.copyWithin(0,3);
console.log(arr1);

let arr2 = [1,2,3,4,5];
arr2.copyWithin(1,0,2);
console.log(arr2);
