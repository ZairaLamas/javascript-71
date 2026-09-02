//* Function expression
const getTriangleArea = function (base, height) {
    return (base * height) / 2;
}
let area = getTriangleArea(20, 24);
console.log("El área del triángulo es:", area);

const serie = function (n) {
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            console.log(`El numero ${i} es par`)
        } else {
            console.log(`El numero ${i} es impar`)
        }
    }
}
serie(20);