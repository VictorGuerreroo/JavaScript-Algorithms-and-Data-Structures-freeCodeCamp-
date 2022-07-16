/* Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */


function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };
    return str.split("").map(item => htmlEntities[item] || item).join("");
}


convertHTML("Dolce & Gabbana");