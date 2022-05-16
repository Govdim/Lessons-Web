let getData = function(keys, values){
    let objects = [];

    for(let i = 0; i < values.length; i++){
        let object = {};
        for(let index = 0; index < values[i].length; index++){
            if(keys.length <= index){
                break;
            }

            object[keys[index]] = values[i][index];
        }
        objects.push(object);
    }

    return objects;
}

let keys = ['имя', 'любимый цвет', 'любимое блюдо'];
let values = [
    ['Василий', 'красный', 'борщ'],
    ['Мария'],
    ['Иннокентий', 'жёлтый', 'пельмени', '18', 'Азовское']
];

console.log(getData(keys, values));
