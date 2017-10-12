//Write a function called squareNumber 
function squareNumber(squnum) {
    var squaredNumber = squnum * squnum;
    //console output
    console.log('The result of squaring the number ' + squnum + ' is ' + squaredNumber +".");

    //user output
    document.write("The result of squaring the number " + squnum + " is " + squaredNumber + ". <br>");  
return squaredNumber;
}
//Write a function called halfNumber 
function halfOf(halfnum) {
    var half = halfnum / 2;
    //console output
    console.log('Half of ' + halfnum + ' is ' +  half +".");

    //user output
    document.write("Half of " + halfnum + " is " +  half + ". <br>");
   return half;
}
//Write a function called percentOf, round numbers to 2 decimals 
function percentOf(num1, num2) {
    var percent = Math.round((num1/num2) * 100) ;
    //console output
    console.log(num1 + ' is ' + percent + '% of ' + num2 +".");

    //user output
    document.write(num1 + " is " + percent + "% of " + num2 + ".<br>");
   return percent;
}
//Write a function called areaOfCircle, round numbers to 2 decimals
function areaOfCircle(radius) {
    var area = Math.round(Math.PI * radius*radius *100) /100;
    //console output
    console.log('The area of circle with radius ' + radius + ' is ' + area +".");

    //user output
    document.write("The area of circle with radius " + radius + " is " + area + ".<br>");
  return area; 

}
//console
console.log("All functions ");

function all(num) {
halfOf(num);
    squareNumber(num);
  areaOfCircle(num);
   percentOf(num, num);
}