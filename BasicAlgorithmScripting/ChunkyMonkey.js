/* Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 */

function chunkArrayInGroups(arr, size) {
    var newArr = [];
    var count = 0;
    while (count < arr.length) {
        newArr.push(arr.slice(count, count + size));
        count += size;
    }
    return newArr;
}
