// var MojaVariabla = 5;
// var 12variabla = 10;
// var mojaVariabla = 20;

// console.log(MojaVariabla);

// console.log(3 - 2 - 31);
// console.log(3 * 5 - 7 / 3);
// console.log(4 / 2 - 1.14 * 3);

// -------------------------------------------------------------------------------------------------------

// var bananasKg = 1.2;
// var bananasGramsInKg = 1000;

// console.log(bananasKg * bananasGramsInKg);

// -------------------------------------------------------------------------------------------------------

// var Anna = 5 * 60;
// var Tom = 30 * 60;

// console.log(Anna, Tom);
// -------------------------------------------------------------------------------------------------------

// var usbStick = 4000;
// var articles = 0.98;

// console.log(usbStick / articles);
// -------------------------------------------------------------------------------------------------------

// var a = 2;
// var b = 3;
// var c = 4;
// var d = 5;
// a *= 2;
// b += 3;
// c /= 5;
// d -= 7;
// console.log(a);
// -------------------------------------------------------------------------------------------------------
// var ime = "Mio";
// var prezime = "Iva";
// -------------------------------------------------------------------------------------------------------

// console.log(!!12, !!"str", !!"number", !!"", !!0, !!NaN);

// -------------------------------------------------------------------------------------------------------

// console.log(true && true);
// console.log(true && false);
// -------------------------------------------------------------------------------------------------------

// var ocena = 4;
// var godineUFirmi = 3;
// var dodatnaObuka = true;

// console.log(ocena >= 3 && ocena <= 5 && godineUFirmi >= 2 && !!dodatnaObuka);

// console.log(6 / 0);
// // -------------------------------------------------------------------------------------------------------

// *** TASK 1 *** //

// var a = 3;
// var b = -7;
// var c = 2;

// if (a + b + c < 0) {
//   console.log("The sign is - ");
// } else {
//   console.log("The sign is + ");
// }

// // -------------------------------------------------------------------------------------------------------
// *** TASK 2 *** ///

// var a = -5;
// var b = -2;
// var c = -6;
// var d = 0;
// var f = -1;

// if (a > b && a > c && a > d && a > f) {
//   console.log(a);
// } else if (b > a && b > c && b > d && b > f) {
//   console.log(b);
// } else if (c > a && c > b && c > d && c > f) {
//   console.log(c);
// } else if (d > a && d > c && d > b && d > f) {
//   console.log(d);
// } else {
//   console.log(f);
// }

// // -------------------------------------------------------------------------------------------------------
// *** TASK 3 *** ///

// var x = 0;
// var y = -1;
// var z = 4;

// if (x > y && x > z) {
//   if (y > z) {
//     console.log(`${x}, ${y}, ${z}`);
//   } else {
//     console.log(`${x}, ${z}, ${y}`);
//   }
// } else if (y > x && y > z) {
//   if (x > z) {
//     console.log(`${y}, ${x}, ${z}`);
//   } else {
//     console.log(`${y}, ${z}, ${x}`);
//   }
// } else if (z > x && z > y) {
//   if (x > y) {
//     console.log(`${z}, ${x}, ${y}`);
//   } else {
//     console.log(`${z}, ${y}, ${x}`);
//   }
// }

// // -------------------------------------------------------------------------------------------------------
// *** TASK 4 *** //

// var a = 10;
// var b = 7;

// if (isNaN(a)) {
//   console.log("X");
// } else {
//   if (a % 2 === 0) {
//     console.log(a / 2);
//   } else {
//     console.log("X");
//   }
// }

// // -------------------------------------------------------------------------------------------------------
// *** TASK 5 ***//

// var a = 3;
// var b = 2;

// if (a > b) {
//   console.log(a);
// } else {
//   if (b > a) {
//     console.log(b);
//   }
// }

// // -------------------------------------------------------------------------------------------------------
// *** TASK 6 *** //

// var temp = 60;
// var scale = "c";
// var result;

// if (scale === "C") {
//   result = (9 * temp) / 5 + 32;
// } else {
//   result = ((temp - 32) * 5) / 9;
// }
// console.log(result);