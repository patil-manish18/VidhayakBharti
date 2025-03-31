// document.addEventListener('DOMContentLoaded', function() {
//   // Load navbar and footer
//   loadNavbar();
//   loadFooter();

//   // Ensure nav elements have transparent backgrounds
//   const navElements = document.querySelectorAll('#nav-menu, .navcontainer, .menu, .menu-bar, .dropdown, .dropdown ul');
//   navElements.forEach(el => {
//       el.style.backgroundColor = 'transparent';
//   });

//   // Add click handler to prevent event bubbling for Read More buttons
//   document.querySelectorAll('.read-more-btn').forEach(btn => {
//       btn.addEventListener('click', function(e) {
//           e.stopPropagation();
//           e.preventDefault();
//           const contentId = this.getAttribute('data-target') || this.getAttribute('onclick').match(/'([^']+)'/)[1];
//           openPopup(contentId);
//       });
//   });

//   // Close popup when clicking outside
//   document.addEventListener('click', function(e) {
//       if (e.target.classList.contains('popup-modal')) {
//           closePopup();
//       }
//   });

//   // Close popup with Escape key
//   document.addEventListener('keydown', function(e) {
//       if (e.key === 'Escape' && document.getElementById('popup-modal').style.display === 'block') {
//           closePopup();
//       }
//   });
// });

// function loadNavbar() {
//   fetch('nav.html')
//       .then(response => response.text())
//       .then(data => {
//           document.getElementById('navbar').innerHTML = data;
//           setupNavbarFunctionality();
//       })
//       .catch(error => console.error('Error loading navbar:', error));
// }

// function loadFooter() {
//   fetch('footer.html')
//       .then(response => response.text())
//       .then(data => {
//           document.getElementById('footer').innerHTML = data;
//       })
//       .catch(error => console.error('Error loading footer:', error));
// }

// function setupNavbarFunctionality() {
//   const hamburger = document.getElementById('hamburger');
//   const menu = document.querySelector('.menu');
//   let activeDropdown = null;

//   // Mobile menu toggle
//   if (hamburger) {
//       hamburger.addEventListener('click', function() {
//           const isExpanded = this.getAttribute('aria-expanded') === 'true';
//           this.setAttribute('aria-expanded', !isExpanded);
//           menu.classList.toggle('active');
//           document.body.classList.toggle('no-scroll');
//       });
//   }

//   // Dropdown functionality
//   document.querySelectorAll('.dropdown-btn').forEach(btn => {
//       btn.addEventListener('click', function(e) {
//           if (window.innerWidth <= 1100) { // Mobile behavior
//               e.preventDefault();
//               const dropdownId = this.getAttribute('data-dropdown');
//               const dropdown = document.getElementById(dropdownId);
              
//               // Close other dropdowns
//               if (activeDropdown && activeDropdown !== dropdown) {
//                   activeDropdown.classList.remove('active');
//               }
              
//               // Toggle current dropdown
//               dropdown.classList.toggle('active');
//               activeDropdown = dropdown.classList.contains('active') ? dropdown : null;
              
//               // Rotate icon
//               const icon = this.querySelector('i');
//               if (icon) {
//                   icon.style.transform = dropdown.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0deg)';
//               }
//           }
//           // Desktop behavior handled via CSS hover
//       });
//   });

//   // Close dropdowns when clicking outside
//   document.addEventListener('click', function(e) {
//       if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-btn')) {
//           document.querySelectorAll('.dropdown').forEach(dropdown => {
//               dropdown.classList.remove('active');
//           });
//           document.querySelectorAll('.dropdown-btn i').forEach(icon => {
//               icon.style.transform = 'rotate(0deg)';
//           });
//           activeDropdown = null;
//       }
//   });
// }

// // Popup functions
// function openPopup(contentId) {
//   document.getElementById('popup-text').innerHTML = document.getElementById(contentId).innerHTML;
//   document.getElementById('popup-modal').style.display = 'block';
//   document.body.classList.add('no-scroll');
  
//   // Ensure nav stays transparent
//   document.querySelectorAll('#nav-menu, .navcontainer, .menu, .dropdown').forEach(el => {
//       el.style.backgroundColor = 'transparent';
//   });
// }

// function closePopup() {
//   document.getElementById('popup-modal').style.display = 'none';
//   document.body.classList.remove('no-scroll');
// }



















































































































// document.addEventListener('DOMContentLoaded', function() {
//   // Mobile menu toggle
//   const hamburger = document.getElementById('hamburger');
//   const menu = document.querySelector('.menu');
  
//   // Dropdown buttons
//   const dropdownBtns = document.querySelectorAll('.dropdown-btn');
  
//   // Toggle mobile menu
//   hamburger.addEventListener('click', function() {
//     const isExpanded = this.getAttribute('aria-expanded') === 'true';
//     this.setAttribute('aria-expanded', !isExpanded);
//     menu.classList.toggle('active');
//   });
  
//   // Handle dropdown buttons
//   dropdownBtns.forEach(btn => {
//     // Desktop hover events
//     btn.addEventListener('mouseenter', function() {
//       if (window.matchMedia('(min-width: 1101px)').matches) {
//         closeAllDropdowns();
//         const dropdown = document.getElementById(this.dataset.dropdown);
//         dropdown.classList.add('active');
//         this.setAttribute('aria-expanded', 'true');
//       }
//     });
    
//     // Click events (for mobile)
//     btn.addEventListener('click', function(e) {
//       if (window.matchMedia('(max-width: 1100px)').matches) {
//         e.preventDefault();
//         const dropdown = document.getElementById(this.dataset.dropdown);
//         const isExpanded = this.getAttribute('aria-expanded') === 'true';
        
//         // Close all other dropdowns first
//         if (!isExpanded) {
//           closeAllDropdowns();
//         }
        
//         // Toggle current dropdown
//         dropdown.classList.toggle('active');
//         this.setAttribute('aria-expanded', !isExpanded);
        
//         // Rotate the chevron icon
//         const icon = this.querySelector('i');
//         if (icon) {
//           icon.style.transform = isExpanded ? 'rotate(0deg)' : 'rotate(180deg)';
//         }
//       }
//     });
//   });
  
//   // Close dropdowns when clicking outside (for desktop)
//   document.addEventListener('click', function(e) {
//     if (window.matchMedia('(min-width: 1101px)').matches) {
//       if (!e.target.closest('.dropdown-btn') && !e.target.closest('.dropdown')) {
//         closeAllDropdowns();
//       }
//     }
//   });
  
//   // Close all dropdowns function
//   function closeAllDropdowns() {
//     document.querySelectorAll('.dropdown').forEach(dropdown => {
//       dropdown.classList.remove('active');
//     });
//     document.querySelectorAll('.dropdown-btn').forEach(btn => {
//       btn.setAttribute('aria-expanded', 'false');
//       const icon = btn.querySelector('i');
//       if (icon) {
//         icon.style.transform = 'rotate(0deg)';
//       }
//     });
//   }
  
//   // Close menu when clicking a nav link (for mobile)
//   const navLinks = document.querySelectorAll('.nav-link:not(.dropdown-btn)');
//   navLinks.forEach(link => {
//     link.addEventListener('click', function() {
//       if (window.matchMedia('(max-width: 1100px)').matches) {
//         menu.classList.remove('active');
//         hamburger.setAttribute('aria-expanded', 'false');
//       }
//     });
//   });
// });

// // new change
// // In your nav.js or script section
// document.addEventListener('DOMContentLoaded', function() {
//   // Ensure nav elements have transparent backgrounds
//   document.querySelectorAll('#nav-menu, .navcontainer, .menu, .dropdown').forEach(el => {
//       el.style.backgroundColor = 'transparent';
//   });
  
//   // Add click handler to prevent event bubbling
//   document.querySelectorAll('.read-more-btn').forEach(btn => {
//       btn.addEventListener('click', function(e) {
//           e.stopPropagation();
//           e.preventDefault();
//           const contentId = this.getAttribute('data-target');
//           openPopup(contentId);
//       });
//   });
// });


























































// Old Woking
document.addEventListener('DOMContentLoaded', () => {
  const dropdownButtons = document.querySelectorAll('.dropdown-btn');
  let activeDropdown = null;

  dropdownButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const dropdownId = button.getAttribute('data-dropdown');
      const dropdown = document.getElementById(dropdownId);

      
      if (activeDropdown && activeDropdown !== dropdown) {
        activeDropdown.classList.remove('active');
      }

      
      dropdown.classList.toggle('active');
      activeDropdown = dropdown.classList.contains('active') ? dropdown : null;
    });
  });

  
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown') && !e.target.closest('.dropdown-btn')) {
      if (activeDropdown) {
        activeDropdown.classList.remove('active');
        activeDropdown = null;
      }
    }
  });

  
  const hamburger = document.getElementById('hamburger');
  const menu = document.querySelector('.menu');

  hamburger.addEventListener('click', () => {
    const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', !isExpanded);
    menu.style.display = isExpanded ? 'none' : 'flex';

    
    if (isExpanded && activeDropdown) {
      activeDropdown.classList.remove('active');
      activeDropdown = null;
    }
  });
});











