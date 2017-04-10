var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];
var b_Bands = document.getElementById('boy-bands');
var veg = document.getElementById('vegetables');
function printArray(array, id) {
    var p = document.createElement("p")
    id.appendChild(p);
    for (var i = 0; i < array.length; i++) {
        id.childNodes[1].innerHTML += array[i] + ", ";
    }
}
printArray(bands, b_Bands);
printArray(vegetables, veg);
