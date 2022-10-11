var arr = [{
    key: '11',
    value: '1100',
},
{
    key: '22',
    value: '2200',
}
];

var objekt = {};
for (let i = 0; i < arr.length; i++) {
    obj[arr[i].key] = arr[i].value;
}
console.log(objekt)