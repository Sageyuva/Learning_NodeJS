const printBacon = () => {
    console.log("Hey there this is to understand set timeout")
}
printBacon()

const printBacon2 = function() {
    console.log("This is called in setimeout with delay of 6 s")
};
setTimeout(printBacon2, 6000);