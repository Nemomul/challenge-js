const escapeStr = "\`, \\, \/, \", \'";

let arr = [4,2]

var object = {

    str : "string",
    num : 42069,
    bool : true,
    undef : undefined,
}

var nested = {
    arr : [4,undefined,'2'],

    obj : {
        str : "string",
        num : 69420,
        bool : true,
    },
}

Object.freeze(nested);
Object.freeze(arr);
Object.freeze(nested.obj);
