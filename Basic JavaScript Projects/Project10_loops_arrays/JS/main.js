// a while loop
/*let count = 1;
while (count <= 5) {
    console.log('Count:', count);
    count++;
}*/
//For Loop

for (let i = 0; i < 10; i++) {
    console.log("The number is:", i);
}
function displayArray() {
    var Arrays = [1, 2, 3, 4, 5];
    return Arrays;
}
function updateArrayValue() {
    var arrayParagraph = document.getElementById("Arrays");
    var array = displayArray();
    arrayParagraph.innerHTML = "Array: " + array.join(", ");
}
const myObject = {
    property1: "Value 1",
    property2: "Value 2"
};
function updateObjectValues() {
    myObject.property1 = "New Value 1";
    myObject.property3 = "Value 3";

    var constantParagraph = document.getElementById("Constant");
    constantParagraph.innerHTML = "Property 1: " + myObject.property1 + "<br>Property 2: " + myObject.property2 + "<br>Property 3: " + myObject.property3;
}
let myObject1 = {
    property1: "Value 1",
    property2: "Value 2",
    sayHello: function() {
        return "Hello from myObject!";
    }
};
function callObjectMethod() {
    var objectMethodParagraph = document.getElementById("ObjectMethodResult");
    var result = myObject1.sayHello();
    objectMethodParagraph.innerHTML = "Object Method Result: " + result;
}






