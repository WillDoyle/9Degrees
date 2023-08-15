window.onscroll = function() {scrollFunction(), scrollFunction2(), checkWindowWidth()};



function scrollFunction() {
  
  // Create a media condition that targets viewports at least 768px wide
const mediaQuery = window.matchMedia('(min-width: 768px)')
// Check if the media query is true


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
  else{
    //Do nothing
  }
}



 function myFunction(x) {
  
  x.classList.toggle("change");
 }

 function checkWindowWidth() {
  const windowWidth = window.innerWidth;
  console.log(`Window width: ${windowWidth}px`);
  
  // Add your custom logic here based on the window width
  
  // For example, you can change styles or perform actions based on different width ranges
  if (windowWidth < 960) {
    // Do something for small screens
    
    
  }
   else {
    
    // Do something for large screens
  }
}

// Initial check when the page loads
checkWindowWidth();

// Listen for the 'resize' event and trigger the function
window.addEventListener('resize', checkWindowWidth);

 function toggleNavBarOpacity() {
  console.log('toggle Nav');
  var navBar = document.getElementById('mobile--navBar');
  if (navBar.style.opacity === '' || navBar.style.opacity === '1') {
    navBar.style.zIndex = '-7';
    navBar.style.opacity = '0';
    navBar.style.transform = "translate(-40px, 0px)";
  } else {
    navBar.style.zIndex = '3';
    navBar.style.opacity = '1';
    navBar.style.transform = "translate(0, 0px)"; 
  }

}



function scrollFunction2() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("difficulty").style.scale = "1";
    } else {
      document.getElementById("difficulty").style.scale = "1";
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
  
  window.addEventListener("scroll", reveal);
  