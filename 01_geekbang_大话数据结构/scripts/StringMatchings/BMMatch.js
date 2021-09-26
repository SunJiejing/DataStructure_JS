function bm(mainStr, modelStr){
    let size1 = mainStr.length;
    let size2 = modelStr.length;
    // step1. Build the hashMap of modelStr info
    let hashMap = new Array(256);
   for(let index = 0; index < 256; index++){
       hashMap[index] = -1;
   }
    generateHashArray(modelStr, size2, hashMap);
    let suffix = new Array(size2);
    let prefix = new Array(size2);
   
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
        let move1 = j - hashMap[mainStr[i + j].charCodeAt()];
        // good suffix
        let move2 = 0;
        if(j < size2 - 1){    // means exist goog suffix
            move2 = moveByGS(j, size2, suffix, prefix);
        };
        i = i + Math.max(move1, move2);

    }
    return -1;
}

function generateHashArray(str, size, hashMap){
    for(let index = 0; index < size; index++){
        let location = str[index].charCodeAt();
        hashMap[location] = index;
    }
}

function generateGS(str, strSize, suffix, prefix){
     // Initize suffix and prefix
     for(let index = 0; index < strSize; index++){
        suffix[index] = -1;
        prefix[index] = false;
    }
    // Dealing the suffix and prefix
    for(let strIndex = 0; strIndex < strSize - 1; strIndex++){   // Get the common substr part from substr 0~size-1 with str itself
        let position = strIndex;
        let length = 0;   // the common substr part's size
        while(position >=0 && str[position] === str[strSize - 1 - length]){
            position--;
            length++;
            suffix[length] = position + 1;
        }
        if(position === -1) prefix[length] = true;
        
    }
}

function moveByGS(badStrStart, modelStrSize, suffix, prefix) {
    let goodSuffixLen = modelStrSize - 1 - badStrStart;    // the lenth of good suffix
    if(suffix[goodSuffixLen] != -1 )  return badStrStart -  suffix[goodSuffixLen] + 1;   // means we found the matched substr of good suffix
    // if didn't find the matched substr of good suffix
    for(let index = badStrStart + 2; index <= modelStrSize - 1; index++ ){
        if(prefix[modelStrSize - index] === true){     // means the modelStrSize - index length substr has the matched prefix, and need to move the same length to allign 
            return index;
        }
    }
    return modelStrSize;   // means there is no matched suffix and substr of suffix, so need to move the whole modelStr length  
}





// Testing code
let mainstr = "IFinallyCatchedThePointOfBMMethodAndFeelSoHappy";
let modelStr = "BM";
console.log(bm(mainstr, modelStr));  // Expected:25
console.log(bm(mainstr, "The"));  // Expected:15