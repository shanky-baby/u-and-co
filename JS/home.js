
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth'});
    }
}

document.getElementById("menu").addEventListener("click", function(event) {
    // Prevent the default behavior of the anchor link
    event.preventDefault();
    
    // Get the href value of the anchor tag
    const linkHref = event.target.getAttribute('href');
    
    // Add class for animation
    event.target.classList.add("animate__animated", "animate__bounce");
  
    // Remove animation class after 1 second
    setTimeout(() => {
        event.target.classList.remove("animate__animated", "animate__bounce");
        
        // Open the link after animation is completed
        window.open(linkHref, '_blank');
    }, 1000);

    console.log("Animation applied to the menu button");
});