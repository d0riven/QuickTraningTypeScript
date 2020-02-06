"use strict";
// seed http://www.typescriptlang.org/play/?ssl=18&ssc=2&pln=8&pc=1#code/PTAEEFQYwGwQwM4NAS2XUCAOBTKK4ZQAXAT11AHsAzUAKTgDc4BlKAJxS2KoCMArPDwDuACxRRRAWABQIVOhjC4pZBxxxiOACahGBUBiiUAdgmLsArlGKV2AOlAAVUTgQ5o8JG9ny4Nw1AYSh4YFABrD0oBIQQAGkMTXVEmDzgTVBNXTmJ0qA9zKxtLdhxfMAQUAFsUeHYSSiD0gHNLOGa3TGtRQ2QGZmAAYQBiYBZhFGpie1ly0AAJHFKAcnQMnAAPOCqsGA9YRAQALlmZA6RQADUcJLtQAG9ZUFATbZwjzAsUE2aAblPnsYzBZrLZ2AAKV5Vd6fTg-ACUDyezxI4gQ9ihHgAvC83v8ZM8AL4A0DNUo4YjgxGPAko0rEEoZABEixgwQSwhwMGM0IaoCZoAA1Ki0Bi8cjiTJJXNwBlvuY8vt0qBePtSpodHoDMRXC8cMJQJFSMI7NoEultHNSJRLNBlVBCERoTrKNo1rp-PkLlh2JRcOxiChOtRfVVUWU5GBooIbDMZLIgeZMKI-aAcSZ9Vcbto7OCmQBNDwAeRg2g8LBTWCZ8Pxicoe3swWa4IQlfsZJwFKpNdO8nzNrtGQQll45zWfBj0wWSxwq0C1EorrtAdAYgk0kjoBS6D0cE4FNIvVXXKIiECmJO8bOXmQADFF9onEVwqBNlokshrrd6jTAZY0N8MKFN8fwkomII2LmF6wiBCRQP+lQZh8wEIkitLPMO-qQm8PboSK6LwQBGZptACGAfiRIkh2XbUsizz0oy-LzCgHJcjyHi2KAC5LhBL4CsKOqipiQr8o4ADqBRLIwHj8fh9iEYhHjCgK3HaPYTIUaAkrSpuABCeBwJY7jHpk2gSBqug6po4alHqOjIJxqokCahjsK00ImMQCBzJx6gauemb3q6T7WOECROOQOBsJw3CrrURA+pQ+hlq+7C+uw3mbmINygNatqmDAh5GVESGnOBuLQkWJiFSFUAvumgUPrV4R5iwhCUNCc7gDmvCUNW+JzIMdilDYhWgFghwgZkzmNHu7k3F5cVskEFK5QOflaIYcwZga8q5CY+RULQOoeEFj7PpeCamEmvEkTtoBnc1eYACKpHOz12CgtgIEyCRMvwlgmOE-VXWY9Y4I2lDNrx7bkpS8I1kAA
class Vendor {
    constructor(name) {
        this.name = name;
    }
    greet() {
        return "Hello, welcome to " + this.name;
    }
}
let strs = ['hoge', 'fuga', 'piyo'];
let obj = {
    'hoeg': 'ほげ',
    'foo': 'ふう',
    'bar': 'ばあ',
};
var Sex;
(function (Sex) {
    Sex[Sex["MALE"] = 0] = "MALE";
    Sex[Sex["FEMALE"] = 1] = "FEMALE";
    Sex[Sex["UNKNOWN"] = 2] = "UNKNOWN";
})(Sex || (Sex = {}));
let m = Sex.MALE;
let union;
union = 'hoge';
union = false;
let fooType = ['abc', 1, false];
let f = () => {
    $('.hoge').css('background-color', 'Red');
};
$(f);
class Person {
    constructor(_age) {
        this._age = _age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
let p = new Person(5);
p.age;
p.age = 10;
function merge(obj1, obj2) {
    let result = {};
    for (let key in obj1) {
        result[key] = obj1[key];
    }
    for (let key in obj2) {
        result[key] = obj2[key];
    }
    return result;
}
class Book {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    toString() {
        return this.title + ' ' + this.price;
    }
}
class Logger {
    debug() {
        console.log(this.toString());
    }
}
let merged = merge(new Book('Javascript本格入門', 2980), new Logger());
