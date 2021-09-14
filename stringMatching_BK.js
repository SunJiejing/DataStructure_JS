let hashMap = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k":11,
    "l":12,
    "m":13,
    "n":14,
    "o":15,
    "p":16,
    "q":17,
    "r":18,
    "s":19,
    "t":20,
    "u":21,
    "v":22,
    "w":23,
    "x":24,
    "y":25,
    "z":26
    };


function bkStrMatching(mainStr, modelStr){
    if(!mainStr || !modelStr) return -1;
    let length1 = mainStr.length;
    let length2 = modelStr.length;
    if(length1 < length2) return -1;
    let hsCode_model = getHashCode(modelStr, hashMap);
    for(let index = 0; index < length1 - length2 + 1; index++){
        let tempStr = mainStr.slice(index, index + length2 );
        let tempHashCode = getHashCode(tempStr,hashMap);
        if(tempHashCode === hsCode_model && tempStr === modelStr) return index;
    }
}

function getHashCode(str, hashMap){
    if(!str || !str.length) return 0;
    let strArray = str.split("");
    let result = 0;
    for(let index = 0; index < strArray.length; index++){
        result += hashMap[strArray[index]];
    }
    return result;

}
