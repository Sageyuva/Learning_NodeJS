// This Keyword in node js
// This is just a referece t0 what ever the thing or object is calling it
var bucky = {
    printFirstName: function() {
        console.log("My name is bucky");
        console.log(this === bucky)

    }
};
bucky.printFirstName();

//the default calling contect is global
function doSomething() {
    console.log("Something");
    console.log(this === global)

}
doSomething()