function searchdrop() {
  let x = document.getElementById("searchicon");
 x.classList.toggle("opened");
 console.log(x);
}

function menuopen() {
    document.getElementById("sidebarid").style.display = "block";
  }
  
  function menuclose() {
    document.getElementById("sidebarid").style.display = "none";
  }

  function homedrop() {
    let x = document.getElementById("homedwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function pagedrop() {
    let x = document.getElementById("pagedwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function shopdrop() {
    let x = document.getElementById("shopdwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function producdrop() {
    let x = document.getElementById("subproduc");
    if (x.className === "sub_side-dropdown") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown";
    }
  }

  function portdrop() {
    let x = document.getElementById("portdwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function blogdrop() {
    let x = document.getElementById("blogdwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function elementdrop() {
    let x = document.getElementById("elementdwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }

  const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 5000;
let currentImageCounter = 0; 
slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;
  slideshowImages[currentImageCounter].style.opacity = 1;
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("buttonFilter");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("card");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
};

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
};

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
};

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("caegories");
var btns = btnContainer.getElementsByClassName("category");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
};


 