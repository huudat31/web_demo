
// khai bao
let carName1 = "Volce";
let carName2 = 'BMV';
document.getElementById("demo").innerHTML = carName1 +" " + carName2;

// cach 2
let fdf = `his fullname's "dffd"`;
document.getElementById("demo2").innerHTML = fdf;

// length string

let text1 ="                 Hello World";
document.getElementById("demo3").innerHTML = text1.length;

//chatAt

let text3 = "dfdfjdfdfdfdfdf";
document.getElementById("demo4").innerHTML = text3.charAt(4);

// slice 

let text4 = "co cai con cac";
document.getElementById("demo5").innerHTML = text4.slice(4,10);
document.getElementById("demo6").innerHTML = text4.slice(4);

// substring

let text5 = "dfdfd jfdkfi dkfgdgj";
document.getElementById("demo7").innerHTML = text5.substring(3);
document.getElementById("demo8").innerHTML = text5.substr(3,5);
 
// toUpperCase & toLowerCase

document.getElementById("demo9").innerHTML = text5.toLowerCase() + "   "+text5.toUpperCase();

// concat

document.getElementById("demo10").innerHTML = text1.concat("   ",text4);
//  trim
document.getElementById("demo11").innerHTML = text1.trim();

// padStart
let text = "5";
document.getElementById("demo13").innerHTML = text.padStart(4,"x");