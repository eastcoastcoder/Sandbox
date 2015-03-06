document.write(Number.MAX_VALUE + "<br />");
document.write(Number.MIN_VALUE + "<br />");
  		
var samp_str = "Here are some escaped characters: \" \' \\ \t \n";
document.write(samp_str);
  		
var first_str = "First String ";
var second_str = "Second String ";
  			
var combined = first_str + second_str;
document.write(combined + "<br />");
document.write("Length of string: " + combined.length + "<br />");
document.write("Substring " + combined.substring(6,12) + "<br />");
document.write("Last Character " + combined.charAt(combined.length-1));
document.write("Index of T is: " + combined.indexOf('t') + "<br />");

var str_var = "5";
var num_var = 10;

//concatenates 10 + 5 = 105
var total = num_var + str_var;
var mult_total = num_var * str_var;

document.write("5 + 10 = " + total + "<br />")
document.write("5 + 10 = " + mult_total + "<br />")

//forced data conversion
total = num_var + Number(str_var);
document.write("5 + 10 = " + total + "<br />")

var num_var2 = String(num_var);
document.write(num_var + num_var + "<br />");
document.write(num_var + num_var2 + "<br />");