const removeFromArray = function(array, ...data) {
    let output = [];
    if (data.length < 2) {
        if (data in array) {
            for (let i = 0; i < array.length; i++) {
                if (array[i] != data) {
                    output.push(array[i]);
                }
            }
            return output;
        } else {
            return array;
        }
    } else {
        for (let i = 0; i < array.length; i++) {
            if (!(data.includes(array[i]))) {
                output.push(array[i]);
            }
        }
        console.log(array[3] in data);
        console.log("data " + data);
        console.log("array " + array);
        console.log("output " + output);
        return output;
    }
    
    
};

// Do not edit below this line
module.exports = removeFromArray;
