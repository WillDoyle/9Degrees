window.onscroll = function() {scrollFunction(), scrollFunction2()};

window.onload = function(){        document.getElementById('landing__button').style.border = "1px solid black";
document.getElementById('landing__button').style.color ="#000"}

const para = document.querySelector("p");
const mql = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
  if (e.matches) {
    /* the viewport is 600 pixels wide or less */
    para.textContent = "This is a narrow screen — less than 600px wide.";
    document.body.style.backgroundColor = "red";
  } else {
    /* the viewport is more than 600 pixels wide */
    para.textContent = "This is a wide screen — more than 600px wide.";
    document.body.style.backgroundColor = "blue";
  }
}

mql.addEventListener("change", screenTest);


function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop < 100) {
    document.getElementById("background-video").style.scale = "1";

        //Text
        document.getElementById("title").style.scale = "1";
        document.getElementById("subtitle").style.fontSize = "28px";
        document.getElementById("title").style.padding = "0px 0";
        document.getElementById("subtitle").style.padding = "0px 0";
        //Button
        document.getElementById("down__arrow").style.color = "#000";
        document.getElementById("landing__button").style.scale = "1";
        document.getElementById("down__arrow").style.scale = "0.5";
    document.getElementById('landing__button').style.color ="#000"
    document.getElementById('landing__button').style.border = "1px solid black"


  } else {
    document.getElementById("background-video").style.scale = "0.5";


    //Text
    document.getElementById("title").style.scale = "0.9";
    document.getElementById("subtitle").style.fontSize = "40px";
    document.getElementById("down__arrow").style.scale = "1";
    document.getElementById("down__arrow").style.color = "#fff";
    //Button
    document.getElementById("landing__button").style.scale = "1";
    document.getElementById('landing__button').style.color ="#fff"
    document.getElementById('landing__button').style.border = "1px solid white"
    
    
  }
}

function scrollFunction2() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      document.getElementById("difficulty").style.scale = "1";
    } else {
      document.getElementById("difficulty").style.scale = "0.2";
    }
  }


  function reveal() {
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
  
  function myFunction(x) {
    if (x.matches) { // If media query matches
      document.body.style.backgroundColor = "yellow";
    } else {
     document.body.style.backgroundColor = "pink";
    }
  }
  
  var x = window.matchMedia("(max-width: 700px)")
  myFunction(x) // Call listener function at run time
  x.addEventListener('change', myFunction) // Attach listener function on state changes


  
  window.addEventListener("scroll", reveal);
