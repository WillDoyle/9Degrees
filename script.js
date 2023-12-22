window.onscroll = function () {
  upFunction();
};
// Get the button:

let navOpen = false;

// When the user scrolls down 20px from the top of the document, show the button

function upFunction() {
  let mybutton = document.getElementById("up-btn");
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
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
  const expectedPath = "/";

  // Check if the current pathname ends with the expected pathname
  if (currentPath.endsWith(expectedPath)) {
    // Your code for when the pathname matches
    console.log("Path matches:", currentPath);

    if (window.innerWidth > 960) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop < 100
      ) {
        //document.getElementById("landing-video").style.transform = "scale(1)";
        console.log(document.getElementById("landing-video").style.transform);
        //Text
        document.getElementById("title").style.scale = "1";
        document.getElementById("navBar").style.maxWidth = "800px";
        console.log(document.getElementById("navBar").style.maxWidth);

        document.getElementById("subtitle").style.fontSize = "28px";
        document.getElementById("title").style.padding = "0px 0";
        document.getElementById("subtitle").style.padding = "0px 0";
        //Button

        document.getElementById("down__arrow").style.scale = "0.5";
        document.getElementById("landing-video").style.filter =
          "blur(0px) brightness(100%)";
      } else {
        //document.getElementById("landing-video").style.transform = "scale(0.5)";
        document.getElementById("landing-video").style.filter =
          "blur(2px) brightness(50%)";
        console.log(document.getElementById("landing-video").style.transform);
        document.getElementById("navBar").style.maxWidth = "100%";

        //Text
        document.getElementById("title").style.scale = "0.9";
        document.getElementById("subtitle").style.fontSize = "40px";
        document.getElementById("down__arrow").style.scale = "1";
        document.getElementById("down__arrow").style.color = "#fff";
        //Button
      }
    }
  } else {
    //Do nothing
    console.log("Path doesn't match:", currentPath);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const lazyImages = document.querySelectorAll(".lazy-image");

  lazyImages.forEach((image) => {
    const highResImageSrc = image.getAttribute("data-src");

    const img = new Image();
    img.src = highResImageSrc;

    img.onload = function () {
      image.src = highResImageSrc;
      image.classList.add("loaded");
    };
  });

  // Add a scroll event listener to trigger loading images when they are in the viewport
  window.addEventListener("scroll", lazyLoad);
  window.addEventListener("resize", lazyLoad);

  lazyLoad();

  function lazyLoad() {
    lazyImages.forEach((image) => {
      if (isInViewport(image) && !image.classList.contains("loaded")) {
        image.src = image.getAttribute("data-src");
        image.classList.add("loaded");
      }
    });
  }

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
});

function toggleMenu(element) {
  // Find the closest parent <li> element
  var parentLi = element.closest("li");

  // Find the mobile--nav__sub--links element within the parent <li>
  var subLinks = parentLi.querySelector(".mobile--nav__sub--links");

  // Toggle the visibility of the sub-links using the visible class
  subLinks.classList.toggle("hidden");

  // Toggle the 'active' class on the clicked button
  element.classList.toggle("active");

  // Check if the menu is open
  var isMenuOpen = document.querySelector(".mobile--nav__links:not(.hidden)");

  // Toggle the 'menu-open' class on the body to disable main content scrolling
  if (isMenuOpen) {
    document.body.classList.add("menu-open");
  } else {
    document.body.classList.remove("menu-open");
  }
}

function myFunction(x) {
  x.classList.toggle("change");
}

function toggleNavBarOpacity() {
  var mobileNavLinks = document.getElementById("mobile--navBar");
  var anchors = document.querySelectorAll(".mobile--nav__link--anchor");

  mobileNavLinks.classList.toggle("open-mobile-nav");

  // Remove the CSS class to enable scrolling of the main content
  document.body.classList.toggle("menu-open");
}

function smoothNavTransition() {
  var mobileNavLinks = document.querySelectorAll(".mobile--nav__link");
  if (navOpen === true) {
    for (var i = 0; i < mobileNavLinks.length; i++) {
      mobileNavLinks[i].style.height = "100%";
    }
  } else {
    for (var i = 0; i < mobileNavLinks.length; i++) {
      mobileNavLinks[i].style.height = "0";
    }
  }
}

const body = document.querySelector("body");

const images = document.querySelectorAll(".promo__image--wrapper");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
      if (entry.isIntersecting) observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.3,
  }
);

images.forEach((image) => {
  observer.observe(image);
});

const textWrappers = document.querySelectorAll(".text__wrapper");
const textWrappersRight = document.querySelectorAll(".text__wrapper--right");

textWrappers.forEach((text) => {
  observer.observe(text);
});

textWrappersRight.forEach((text) => {
  observer.observe(text);
});

const reveals = document.querySelectorAll(".reveal");

console.log(reveals);

function getElements() {
  console.log(reveals);
}

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting);
      if (entry.isIntersecting) revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);

reveals.forEach((elem) => {
  revealObserver.observe(elem);
});

const paddingBanner = document.querySelector("#banner");

const animationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("paddingTransition", entry.isIntersecting);
      if (entry.isIntersecting) revealObserver.unobserve(entry.target);
    });
  },
  {
    threshold: 0.5,
  }
);
animationObserver.observe(paddingBanner);

// function reveal() {
//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var elementTop = reveals[i].getBoundingClientRect().top;
//     var elementVisible = 100;
//     if (elementTop < windowHeight - elementVisible) {
//       reveals[i].classList.add("active");
//     }
//   }
// }

const scrollContent = document.querySelector(".scroll-content");

//   document.addEventListener("DOMContentLoaded", function () {
//     const svgGraphic = document.getElementById("svg-graphic");
//     const textDiv = document.querySelector(".text");
//     const container = document.querySelector(".graphics__animation--container");
//     const windowHeight = window.innerHeight;
//     let isScrollingDown = true;
//     let isSticky = false;

//     // Set initial scale and position
//     let scale = 0.5; // Initial scale factor
//     svgGraphic.style.transform = `scale(${scale})`;
//     svgGraphic.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";

//     window.addEventListener("scroll", () => {
//         const scrollPosition = window.scrollY;

//         if (scrollPosition >= container.offsetTop && scrollPosition < textDiv.offsetTop) {
//             if (!isScrollingDown) {
//                 isScrollingDown = true;
//                 svgGraphic.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
//             }

//             // Scale the SVG as user scrolls down
//             scale = 0.5 + ((scrollPosition - container.offsetTop) / windowHeight) * 0.5;
//             scale = Math.min(1, scale); // Limit scale to 1
//             svgGraphic.style.transform = `scale(${scale})`;

//             // Fade in the SVG as it scales in
//             const opacity = Math.min(1, (scrollPosition - container.offsetTop) / (windowHeight / 2));
//             svgGraphic.style.opacity = opacity;
//         } else if (scrollPosition >= textDiv.offsetTop) {
//             // Keep the scaled SVG sticky
//             svgGraphic.style.transition = "none"; // Remove transition
//             svgGraphic.style.position = "fixed";
//             svgGraphic.style.top = "200px";
//             svgGraphic.style.left = "50%"; // Center horizontally
//             svgGraphic.style.transformOrigin = "center bottom"; // Anchor at the bottom
//             isSticky = true;
//         } else if (isSticky) {
//             // Revert to initial state if scrolling up after sticky
//             svgGraphic.style.position = "static";
//             svgGraphic.style.transform = "scale(0.5)";
//             svgGraphic.style.opacity = 0;
//             svgGraphic.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
//             isSticky = false;
//         } else {
//             // User is scrolling up; scale and fade out the SVG
//             if (isScrollingDown) {
//                 isScrollingDown = false;
//                 svgGraphic.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
//             }
//             scale = 1 - ((scrollPosition - textDiv.offsetTop) / windowHeight);
//             scale = Math.max(0.5, scale);
//             svgGraphic.style.transform = `scale(${scale})`;
//             svgGraphic.style.opacity = scale;
//         }
//     });
// });

// Get a reference to the div with the ID "hoverDiv"
const coffeeID = document.getElementById("coffeeid");
const energybarsID = document.getElementById("energyid");
const icecreamID = document.getElementById("icecreamid");

const coffeeH1 = document.querySelector("#coffee h1");
const energyH1 = document.querySelector("#energybars h1");
const icecreamH1 = document.querySelector("#icecream h1");

// console.log(coffeeH1);

// Get a reference to the "fuel__img" div
const fuelImg = document.querySelector(".fuel__img");

// Function to change the background image when hovering
function changeBackgroundImage(id) {
  console.log(id);
  if (id === "coffee") {
    fuelImg.style.backgroundImage = "url('./assets/coffee.jpeg')"; // Change 'new-image.jpg' to the desired image URL
    coffee.style.backgroundColor = "#9facf6";
    coffeeH1.style.color = "#242424";
    coffeeID.style.color = "#242424";

    coffeeID.style.display = "block";
    energybarsID.style.display = "none";
    icecreamID.style.display = "none";
  }

  if (id === "energybars") {
    fuelImg.style.backgroundImage = "url('./assets/cliff-bar.webp')";
    energybars.style.backgroundColor = "#fe464f";

    coffeeID.style.display = "none";
    energybarsID.style.display = "block";
    icecreamID.style.display = "none";
  }

  if (id === "icecream") {
    fuelImg.style.backgroundImage = "url('./assets/pat-and-stick.png')";

    icecream.style.backgroundColor = "#d3f258";
    icecreamH1.style.color = "#242424";
    icecreamID.style.color = "#242424";

    coffeeID.style.display = "none";
    energybarsID.style.display = "none";
    icecreamID.style.display = "block";
  }
}

// Function to reset the background image when not hovering
function resetBackgroundImage() {
  // Change 'original-image.jpg' to the default image URL

  coffee.style.backgroundColor = "";
  icecream.style.backgroundColor = "";
  energybars.style.backgroundColor = "";
  fuelImg.style.backgroundImage = "url(./assets/cafe-2.jpg";

  coffeeH1.style.color = "#fff";
  icecreamH1.style.color = "#fff";
  energyH1.style.color = "#fff";

  energybarsID.style.display = "none";
  coffeeID.style.display = "none";
  icecreamID.style.display = "none";
}

function cafeScroll() {
  if (location.pathname == "/cafe.html") {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const containerRect = scrollContent.getBoundingClientRect();

    if (containerRect.top <= windowHeight) {
      scrollContent.classList.add("show");
    } else {
      scrollContent.classList.remove("show");
    }
  }
}

window.addEventListener("scroll", cafeScroll);
window.addEventListener("scroll", scrollFunction);
body.addEventListener("load", getElements);
