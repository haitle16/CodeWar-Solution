var gimme = function (inputArray) {
    const newArray = [].concat(inputArray);
    newArray.sort((a, b) => a - b);
    const middleNum = newArray[1];
    return inputArray.indexOf(middleNum);
};