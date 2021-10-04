function kmp(mainStr, subStr){
    if(!mainStr || !mainStr.length) return -1;
    if(!subStr || !subStr.length) return -1;
    let mainLen = mainStr.length;
    let subLen = subStr.length;
    let next = getNext(subStr);
    let subIndex = 0;
    for(let index = 0; index < mainLen; index++){
        while(subIndex > 0 && mainStr[index] != subStr[subIndex]){
            subIndex = next[subIndex - 1] + 1;      // Update the bad matched char index by next array
        }
        if(mainStr[index] === subStr[subIndex]){
            subIndex++;
        }
        if(subIndex === subLen){
            return index-subLen + 1;     //Meaning totally matched
        }
    }

    return -1;    //Means cannot matched.
}

function getNext(str){
    let len = str.length;
    let next = new Array(len);
    next[0] = -1;
    let k = -1;
    for(let index = 1; index < len; index++){
        while(k != -1 && str[k + 1] != str[index]){
            k = next[k];   // Here is the most diffult part
        }
        if(str[k + 1] === str[index] ){
            k++;
        }
        next[index] = k;
    }
    return next;
}




// Testing code
let mainStr = "bcbcbcbcbea";
let subStr = "bcbcbea";
console.log(kmp(mainStr, subStr));
