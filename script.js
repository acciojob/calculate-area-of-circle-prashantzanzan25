#function calculateArea() {
	// Get the radius from the user using the prompt() function
    let radius = prompt("Enter the radius of the circle:");
	let ans = (Math.PI * radius * radius).toFixed(2)
    // write you code here and display the result to the user
	alert(`The area of the circle with radius ${radius} is ${ans}`);
           
}
calculateArea();