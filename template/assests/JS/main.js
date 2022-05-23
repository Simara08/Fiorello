function searchdrop() {
  var x = document.getElementById("searhicon");
  if (x.className === "input") {
    x.className += " opened";
  } else {
    x.className = "input";
  }
}

function menuopen() {
    document.getElementById("sidebarid").style.display = "block";
  }
  
  function menuclose() {
    document.getElementById("sidebarid").style.display = "none";
  }

  function homedrop() {
    var x = document.getElementById("homedwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function pagedrop() {
    var x = document.getElementById("pagedwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function shopdrop() {
    var x = document.getElementById("shopdwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function producdrop() {
    var x = document.getElementById("subproduc");
    if (x.className === "sub_side-dropdown") {
      x.className += " opened";
    } else {
      x.className = "sub_side-dropdown";
    }
  }

  function portdrop() {
    var x = document.getElementById("portdwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function blogdrop() {
    var x = document.getElementById("blogdwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }
  function elementdrop() {
    var x = document.getElementById("elementdwn");
    if (x.className === "side-dropdown-content") {
      x.className += " opened";
    } else {
      x.className = "side-dropdown-content";
    }
  }

 