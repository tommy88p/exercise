/*function Triangle(b,h){
	this.b = b;
	this.h = h;
}
Triangle.prototype.getArea = function () {
	return (this.b*this.h)/2;
};
var myTriangle = new Triangle(5,3);
console.log(myTriangle);
var anotherTriangle = new Triangle(7,4);
console.log(anotherTriangle);*/

var myArr = [3, "Novembre", 1988, "Tommaso"];
myArr[10] = "Penta";
for (element in myArr) {
	console.log(myArr[element]);
}