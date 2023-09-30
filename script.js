window.onscroll = function() {scrollFunction()};
window.onscroll = function() {upFunction()};
// Get the button:

let navOpen = false;

console.log(mybutton);
// When the user scrolls down 20px from the top of the document, show the button


function upFunction() {
  let mybutton = document.getElementById("up-btn");
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    
    
    mybutton.style.opacity = "0.5";
    
  } else {
    
    mybutton.style.opacity = "0";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



function scrollFunction() {
// Check if the media query is true

// Get the current pathname
const currentPath = window.location.pathname;

// Define the expected pathname you want to match
const expectedPath = "/index.html";

// Check if the current pathname ends with the expected pathname
if (currentPath.endsWith(expectedPath)) {
  // Your code for when the pathname matches
  console.log("Path matches:", currentPath);

 

  if (window.innerWidth > 960) {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop < 100) {
    document.getElementById("landing-video").style.transform = "scale(1)";
    console.log(document.getElementById("landing-video").style.transform);
        //Text
        document.getElementById("title").style.scale = "1";
        document.getElementById("subtitle").style.fontSize = "28px";
        document.getElementById("title").style.padding = "0px 0";
        document.getElementById("subtitle").style.padding = "0px 0";
        //Button
        document.getElementById("down__arrow").style.color = "#000";
        
        document.getElementById("down__arrow").style.scale = "0.5";
        document.getElementById("landing-video").style.filter = "blur(0px) brightness(100%)";


  } else {
    document.getElementById("landing-video").style.transform = "scale(0.5)";
    document.getElementById("landing-video").style.filter = "blur(2px) brightness(50%)";
    console.log(document.getElementById("landing-video").style.transform);


    //Text
    document.getElementById("title").style.scale = "0.9";
    document.getElementById("subtitle").style.fontSize = "40px";
    document.getElementById("down__arrow").style.scale = "1";
    document.getElementById("down__arrow").style.color = "#fff";
    //Button
    
    
  }
  }
}
  else{
    //Do nothing
    console.log("Path doesn't match:", currentPath);
  }
}








function toggleMenu(element) {
  // Find the closest parent <li> element
  var parentLi = element.closest('li');

  // Find the mobile--nav__sub--links element within the parent <li>
  var subLinks = parentLi.querySelector('.mobile--nav__sub--links');

  // Toggle the visibility of the sub-links using the visible class
  subLinks.classList.toggle('hidden');
  
  // Toggle the 'active' class on the clicked button
  element.classList.toggle('active');
  
}



function setNavStyle(){
  var mobileNavLinks = document.querySelectorAll('.mobile--nav__link');
  var mobileNavLinksAfter = document.querySelectorAll('.mobile--nav__link::after');
  var navBar = document.getElementById('mobile--navBar');
  var anchors = document.querySelectorAll('.mobile--nav__link--anchor');
    navBar.style.zIndex = '-7';
    navBar.style.opacity = '0';
    navBar.style.height = '0';
    
  
}


 function myFunction(x) {
  
  x.classList.toggle("change");
 }

 function toggleNavBarOpacity() {
  var mobileNavLinks = document.querySelectorAll('.mobile--nav__link');
  var mobileNavLinksAfter = document.querySelectorAll('.mobile--nav__link::after');
  var darkOverlay = document.getElementById('dark__overlay::after');
  var navBar = document.getElementById('mobile--navBar');
  var anchors = document.querySelectorAll('.mobile--nav__link--anchor');
  if (navBar.style.opacity === '' || navBar.style.opacity === '1') {
    navOpen = false;
    navBar.style.zIndex = '-7';
    navBar.style.opacity = '0';
    navBar.style.height = '0';
    navBar.style.transform = "translate(-40px, 0px)";

    

    for (var i = 0; i < anchors.length; i++) {
      anchors[i].style.height = '0';
      anchors[i].style.opacity = '0';
      anchors[i].style.zIndex = -3;  
      
    }
    setTimeout(smoothNavTransition, 300);
    
  } else {
    navOpen = true;
    navBar.style.zIndex = '3';
    navBar.style.opacity = '1';
    navBar.style.transform = "translate(0, 0px)"; 
    navBar.style.height = 'auto';

    for (var i = 0; i < mobileNavLinks.length; i++) {
      mobileNavLinks[i].style.height = '100%';
      
    }
    for (var i = 0; i < anchors.length; i++) {
      anchors[i].style.height = '10vh';
      anchors[i].style.opacity = '1';
      anchors[i].style.zIndex = 3;
      console.log('set Zindex to -3');
    }
    
  }

}

function smoothNavTransition(){
  var mobileNavLinks = document.querySelectorAll('.mobile--nav__link');
  if(navOpen === true){
    for (var i = 0; i < mobileNavLinks.length; i++) {
      mobileNavLinks[i].style.height = '100%';
      
      
    }
  }
  
  else{
    for (var i = 0; i < mobileNavLinks.length; i++) {
      mobileNavLinks[i].style.height = '0';
    }
  }
}



function reveal() {
  var reveals = document.querySelectorAll(".reveal");
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    }
  }
}

  const scrollContent = document.querySelector('.scroll-content');

function cafeScroll(){
  if(location.pathname=="/cafe.html"){
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const containerRect = scrollContent.getBoundingClientRect();
  
    if (
      containerRect.top <= windowHeight
    ) {
      scrollContent.classList.add('show');
    } else {
      scrollContent.classList.remove('show');
    }
    }
  }

window.addEventListener("scroll", cafeScroll);
  
  window.addEventListener("scroll", reveal);

  