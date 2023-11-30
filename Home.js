//function to toggle menu when hamburger icon is clicked
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
    
}



document.addEventListener('DOMContentLoaded', function() {
  var animation = document.querySelector('.scrolldown');

  // Function to check scroll position and hide animation
  function hideAnimationOnScroll() {
    // Get the scroll position
    var scrollPosition = window.scrollY 
    
    console.log('Scroll Position:', scrollPosition);

    // Define the height at which you want the animation to disappear
    var triggerHeight = 500; // Change this value to your desired height

    // Check if the scroll position is greater than the trigger height
    if (scrollPosition > triggerHeight) {
      // Hide the animation by adding a CSS class that hides it
      animation.style.display = 'none';
    } else {
      // Show the animation if scroll position is above the trigger height
      animation.style.display = 'block';
    }
  }

  // Add event listener for scroll event
  window.addEventListener('scroll', hideAnimationOnScroll);
});

//chgeck the height of the content relative to the window 
//check manjaro website
//anchor points, eventlistener on the icon at that point 

//smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      // Get the target ID from the href attribute
      const targetId = this.getAttribute('href').substring(1);

      // Find the target element by its ID
      const targetElement = document.getElementById(targetId);

      // Scroll to the target element
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});



