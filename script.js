 function calculateArea() {
    // Get the radius from the user using the prompt() function
    let radius = prompt("Enter the radius of the circle:");
    
    radius = parseFloat(radius);
    
	if (isNaN(radius) || radius <= 0) {
        alert("Invalid input. Please enter a positive number for the radius.");
        return;
    }
    
    let area = Math.PI * radius * radius;
    
    area = area.toFixed(2);
    
    alert("The area of the circle with radius " + radius + " is " + area);
}

calculateArea();
