let fs = require('fs');
let readline = require('readline');

function readFileToArr(fReadName,callback){
    let fRead = fs.createReadStream(fReadName);
    let objReadline = readline.createInterface({
        input:fRead
    });
    let keyArr = [];
    let valueArr = [];
    objReadline.on('line',function (line) {
        let part = line.split(/\s+/);
        keyArr.push(part[0]);
        valueArr.push(part[1]);
    });
    objReadline.on('close',function () {
        callback(keyArr, valueArr);
    });
}

function arr2Json(keyArr, valueArr) {
    if (keyArr.length !== valueArr.length) {
        console.log('数目出错');
        return -1;
    }
    let res = new Map();
    for(let i = 0; i < keyArr.length; ++i) {
        res.set(keyArr[i], valueArr[i]);
    }
    // JSON.parse(JSON.stringify(res))
    let obj= Object.create(null);
    for (let[k,v] of res) {
        obj[k] = v;
    }
    //object转json
    let ans = JSON.stringify(obj);
    console.log(ans);
}

function writeJSON2File(fWriteName){
    let fWrite = fs.createWriteStream(fWriteName);
    let objWriteline = readline.createInterface({
        output: fWrite, 
    });
    objWriteline.on('line',function (line) {
    });
    objWriteline.on('close',function () {
    });
}


readFileToArr('./excel', arr2Json);
