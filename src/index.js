var addNumber = function (x,y) {
    var total = x + y
    return total
}
var testAddNumbers = addNumber(4,3)
// ===; <;>;<=;>=;!==
if( testAddNumbers > 10 ) {
    console.log(testAddNumbers)
} else {
    console.log("The number is too small!")
}
