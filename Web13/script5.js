let getSortedArray = function(array, key){
    return array.sort((a, b) => a[key] > b[key] ? 1 : -1);
}

let array = [
    {
        name: 'Петя',
        age: 5
    },
    {
        name: 'Лёля',
        age: 2
    },
    {
        name: 'Сима',
        age: 3
    }
];

console.log(getSortedArray(array, "age"));
console.log(getSortedArray(array, "name"));
