function bm(mainStr, modelStr){
    let size1 = mainStr.length;
    let size2 = modelStr.length;
    // step1. Build the hashMap of modelStr info
    let hashMap = new Array(256);
    hashMap.forEach(element => {
        element = -1;
    });
    generateHashArray(modelStr, size2, hashMap);
    let suffix = new Array(size2);
    let prefix = new Array(size2);
    // Initize suffix and prefix
    for(let index = 0; index < size2; index++){
        suffix[index] = -1;
        prefix[index] = false;
    }
    generateGS(modelStr, size2, suffix, prefix);

    let i = 0;
    while(i <= size1 - size2){
        let j;
        for(j = size2 - 1; j >=0; j--){
            if(mainStr[i + j] != modelStr[j]) break;  // means j is the mismatched location in model str
        }
        if(j < 0){
            return i;   // means model string matched in main string, and i is the start location in mainstr
        }
        // bad string part
        let move1 = j - hashMap[mainStr[i]];
        // good suffix

    }
}

function generateHashArray(str, size, hashMap){
    for(let index = 0; index < size; index++){
        let location = parseInt(str[index]);
        hashMap[location] = index;
    }
}

function generateGS(str, strSize, suffix, prefix){
    
}