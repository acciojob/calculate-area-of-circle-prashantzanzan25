function calculateArea() {
	// Write your code here
	const radius = prompt("Enter the radius of the circle:");
    
	if (!isNaN(radius) && parseFloat(radius) > 0) {
        const area = Math.PI * parseFloat(radius) * parseFloat(radius);
        alert(`The area of the circle with radius ${radius} is ${area.toFixed(2)}`);
    } 
	else {
        alert("Invalid input. Please enter a positive number for the radius.");
    }
}

calculateArea();