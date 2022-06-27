/* Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of. */




function titleCase(str) {

    var arr = str.split(' ');

    var newStr = '';

    for (var i = 0; i < arr.length; i++) {
        var lower = arr[i].toLowerCase();
        newStr += lower.charAt(0).toUpperCase() + lower.slice(1) + ' ';
    }

    return newStr.trim();
}

titleCase("I'm a little tea pot");