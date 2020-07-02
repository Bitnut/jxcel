let errors = {
    // object content
};

function objectfilter() {
    let temp = Object.keys(originObject);
    for(key of temp) {
        console.log(key);
    }
    console.log('>>>>>>>>>>>>>>>>>>>>');
    for(key of temp) {
        console.log(originObject[key]);
    }
}

objectfilter();