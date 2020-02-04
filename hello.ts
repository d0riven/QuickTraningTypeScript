// seed http://www.typescriptlang.org/play/?ssl=18&ssc=2&pln=8&pc=1#code/PTAEEFQYwGwQwM4NAS2XUCAOBTKK4ZQAXAT11AHsAzUAKTgDc4BlKAJxS2KoCMArPDwDuACxRRRAWABQIVOhjC4pZBxxxiOACahGBUBiiUAdgmLsArlGKV2AOlAAVUTgQ5o8JG9ny4Nw1AYSh4YFABrD0oBIQQAGkMTXVEmDzgTVBNXTmJ0qA9zKxtLdhxfMAQUAFsUeHYSSiD0gHNLOGa3TGtRQ2QGZmAAYQBiYBZhFGpie1ly0AAJHFKAcnQMnAAPOCqsGA9YRAQALlmZA6RQADUcJLtQAG9ZUFATbZwjzAsUE2aAblPnsYzBZrLZ2AAKV5Vd6fTg-ACUDyezxI4gQ9ihHgAvC83v8ZM8AL4A0DNUo4YjgxGPAko0rEEoZABEixgwQSwhwMGM0IaoCZoAA1Ki0Bi8cjiTJJXNwBlvuY8vt0qBePtSpodHoDMRXC8cMJQJFSMI7NoEultHNSJRLNBlVBCERoTrKNo1rp-PkLlh2JRcOxiChOtRfVVUWU5GBooIbDMZLIgeZMKI-aAcSZ9Vcbto7OCmQBNDwAeRg2g8LBTWCZ8Pxicoe3swWa4IQlfsZJwFKpNdO8nzNrtGQQll45zWfBj0wWSxwq0C1EorrtAdAYgk0kjoBS6D0cE4FNIvVXXKIiECmJO8bOXmQADFF9onEVwqBNlokshrrd6jTAZY0N8MKFN8fwkomII2LmF6wiBCRQP+lQZh8wEIkitLPMO-qQm8PboSK6LwQBGZptACGAfiRIkh2XbUsizz0oy-LzCgHJcjyHi2KAC5LhBL4CsKOqipiQr8o4ADqBRLIwHj8fh9iEYhHjCgK3HaPYTIUaAkrSpuABCeBwJY7jHpk2gSBqug6po4alHqOjIJxqokCahjsK00ImMQCBzJx6gauemb3q6T7WOECROOQOBsJw3CrrURA+pQ+hlq+7C+uw3mbmINygNatqmDAh5GVESGnOBuLQkWJiFSFUAvumgUPrV4R5iwhCUNCc7gDmvCUNW+JzIMdilDYhWgFghwgZkzmNHu7k3F5cVskEFK5QOflaIYcwZga8q5CY+RULQOoeEFj7PpeCamEmvEkTtoBnc1eYACKpHOz12CgtgIEyCRMvwlgmOE-VXWY9Y4I2lDNrx7bkpS8I1kAA
class Vendor {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet() {
        return "Hello, welcome to " + this.name;
    }
}

let strs: string[]  = ['hoge', 'fuga', 'piyo'];
// let strs: string[]  = ['hoge', 'fuga', 1]; // 異なる型を入れるとエラーが出る

interface StringMap {
    [index: string]: string;
}

let obj: StringMap = {
    'hoeg' : 'ほげ',
    'foo' : 'ふう',
    'bar' : 'ばあ',
};

enum Sex {
    MALE,
    FEMALE,
    UNKNOWN,
}

let m:Sex = Sex.MALE;

let union: string | boolean;
union = 'hoge';
union = false;
// union = 1;
