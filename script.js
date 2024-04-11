function calculateArea() {
	let radius = prompt("Enter the radius of the circle:");
	
	let ans = (Math.PI * radius * radius).toFixed(2)
     
	alert(`The area of the circle with radius ${radius} is ${ans}`);
           
}
calculateArea();