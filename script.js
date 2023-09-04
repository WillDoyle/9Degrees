window.onscroll = function() {scrollFunction(), scrollFunction2()};

let navOpen = false;

function scrollFunction() {
  
  // Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true

if(location.pathname=="/index.html"){
  if (window.innerWidth > 960) {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop < 100) {
    document.getElementById("background-video").style.scale = "1";

        //Text
        document.getElementById("title").style.scale = "1";
        document.getElementById("subtitle").style.fontSize = "28px";
        document.getElementById("title").style.padding = "0px 0";
        document.getElementById("subtitle").style.padding = "0px 0";
        //Button
        document.getElementById("down__arrow").style.color = "#000";
        
        document.getElementById("down__arrow").style.scale = "0.5";


  } else {
    document.getElementById("background-video").style.scale = "0.5";


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



function scrollFunction2() {
  if(location.pathname=="/index.html"){

  
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("difficulty").style.scale = "1";
    } else {
      document.getElementById("difficulty").style.scale = "1";
    }
  }
}

  function reveal() {
    if (window.innerWidth < 960) {
      var reveals = document.querySelectorAll(".reveal");
      for (var i=0; i< reveals.length; i++){
        reveals[i].style.transform = "translateY(0px)";
        reveals[i].style.opacity = 1;
      }
   }
   else {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 0;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
   }

  }

  const scrollContent = document.querySelector('.scroll-content');

function cafeScroll(){
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

window.addEventListener("scroll", cafeScroll);
  
  window.addEventListener("scroll", reveal);

  