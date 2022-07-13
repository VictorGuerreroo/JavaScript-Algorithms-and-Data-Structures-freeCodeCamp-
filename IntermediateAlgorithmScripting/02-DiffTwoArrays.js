/* Diff Two Arrays
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.In other words, return the symmetric difference of the two arrays.

    Note: You can return the array with its elements in any order. */



function diffArray(arr1, arr2) {
    let newArr = [];
    let arr1Copy = arr1.slice();
    let arr2Copy = arr2.slice();
    for (let i = 0; i < arr1Copy.length; i++) {
        if (arr2Copy.indexOf(arr1Copy[i]) === -1) {
            newArr.push(arr1Copy[i]);
        }
    }
    for (let i = 0; i < arr2Copy.length; i++) {
        if (arr1Copy.indexOf(arr2Copy[i]) === -1) {
            newArr.push(arr2Copy[i]);
        }
    }
    return newArr;
}

