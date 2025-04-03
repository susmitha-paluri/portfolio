/*=======typing animation======*/
var typed =new Typed(".typing",{
   strings:["","Fullstack web Developer","Web Designer","Java Developer"],
   typeSpeed:60,
   BackSpeed:60,
   loop:true 
})
/*========aside===========*/
document.addEventListener('DOMContentLoaded', () => {
   // Select all sections
   const sections = document.querySelectorAll('.section');
   const navLinks = document.querySelectorAll('.nav a');
   let currentSectionIndex = 0; // Default to home section (index 0)
   let sectionHistory = [0]; // Keep track of section navigation history

   // Create back button
   const backButton = document.createElement('button');
   backButton.innerHTML = '&larr; Back';
   backButton.classList.add('back-button');
   
   document.body.appendChild(backButton);

   // Function to show a specific section
   function showSection(index) {
       // Remove active class from all sections
       sections.forEach(section => {
           section.classList.remove('active');
       });

       // Remove active class from all nav links
       navLinks.forEach(link => {
           link.classList.remove('active');
       });

       // Add active class to the selected section
       if (sections[index]) {
           sections[index].classList.add('active');
           navLinks[index].classList.add('active');
           
           // Update current section and history
           if (currentSectionIndex !== index) {
               sectionHistory.push(index);
           }
           currentSectionIndex = index;

           // Toggle back button visibility
           backButton.style.display = sectionHistory.length > 1 ? 'block' : 'none';
       }
   }

   // Back button functionality
   backButton.addEventListener('click', () => {
       if (sectionHistory.length > 1) {
           // Remove current section from history
           sectionHistory.pop();
           
           // Go back to the previous section
           const previousSectionIndex = sectionHistory[sectionHistory.length - 1];
           showSection(previousSectionIndex);
       }
   });

   // Initial setup - show home section by default
   showSection(0);

   // Add click event listeners to navigation links
   navLinks.forEach((link, index) => {
       link.addEventListener('click', (e) => {
           e.preventDefault();
           showSection(index);
       });
   });

   // Keyboard navigation
   document.addEventListener('keydown', (e) => {
       switch(e.key) {
           case 'ArrowRight':
               currentSectionIndex = (currentSectionIndex + 1) % sections.length;
               showSection(currentSectionIndex);
               break;
           case 'ArrowLeft':
               currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
               showSection(currentSectionIndex);
               break;
       }
   });

   // Swipe navigation for touch devices
   let touchStartX = 0;
   document.addEventListener('touchstart', (e) => {
       touchStartX = e.touches[0].clientX;
   });

   document.addEventListener('touchend', (e) => {
       const touchEndX = e.changedTouches[0].clientX;
       const diffX = touchEndX - touchStartX;

       if (Math.abs(diffX) > 50) { // Minimum swipe distance
           if (diffX > 0) {
               // Swipe right
               currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
           } else {
               // Swipe left
               currentSectionIndex = (currentSectionIndex + 1) % sections.length;
           }
           showSection(currentSectionIndex);
       }
   });
});