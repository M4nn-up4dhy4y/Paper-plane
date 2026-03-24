// script.js

// Function to handle scroll events
window.addEventListener('scroll', function() {
    // Get the scroll position
    const scrollPosition = window.scrollY;
    
    // Get the paper plane element
    const paperPlane = document.getElementById('paperPlane');
    
    // Animate the paper plane based on scroll position
    paperPlane.style.transform = `translateY(${scrollPosition}px)`;
});

// Function to create and animate the paper plane
function createPaperPlane() {
    const paperPlane = document.createElement('div');
    paperPlane.id = 'paperPlane';
    paperPlane.style.position = 'fixed';
    paperPlane.style.bottom = '10%';
    paperPlane.style.right = '10%';
    paperPlane.style.transition = 'transform 0.5s ease';
    paperPlane.style.width = '50px'; // Set paper plane width
    paperPlane.style.height = '50px'; // Set paper plane height
    paperPlane.style.backgroundImage = 'url(paper-plane.png)'; // Paper plane image
    paperPlane.style.backgroundSize = 'contain';
    paperPlane.style.backgroundRepeat = 'no-repeat';
    document.body.appendChild(paperPlane);
}

// Call function to create paper plane
createPaperPlane();