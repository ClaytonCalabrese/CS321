var menuOpen = false;
var openedMenuID;
        
function toggleUg() {
	alert("Hi");
	var funcID = "main_ug";
	if (menuOpen) {
		document.getElementById(openedMenuID).classList.toggle("show");
	}
	if (openedMenuID == funcID) {
		menuOpen = false;
		openedMenuID = "";
	} else {
	   document.getElementById(funcID).classList.toggle("show");
	   menuOpen = true;
	   openedMenuID = funcID; 
	}
}
        
function toggleGrad() {
	var funcID = "main_g";
	if (menuOpen) {
		document.getElementById(openedMenuID).classList.toggle("show");
	}
	if (openedMenuID == funcID) {
		openedMenuID = "";
		menuOpen = false;
	} else {
	   document.getElementById(funcID).classList.toggle("show");
	   menuOpen = true;
	   openedMenuID = funcID; 
	}
}
        
function toggleCourses() {
	var funcID = "main_c";
	if (menuOpen) {
		document.getElementById(openedMenuID).classList.toggle("show");
	}
	if (openedMenuID == funcID) {
		openedMenuID = "";
		menuOpen = false;
	} else {
	   document.getElementById(funcID).classList.toggle("show");
	   menuOpen = true;
	   openedMenuID = funcID; 
	}
}
        
function toggleFaculty() {
	var funcID = "main_f";
	if (menuOpen) {
		document.getElementById(openedMenuID).classList.toggle("show");
	}
	if (openedMenuID == funcID) {
		openedMenuID = "";
		menuOpen = false;
	} else {
	   document.getElementById(funcID).classList.toggle("show");
	   menuOpen = true;
	   openedMenuID = funcID; 
	}
}
        
function toggleNE() {
	var funcID = "main_ne";
	if (menuOpen) {
		document.getElementById(openedMenuID).classList.toggle("show");
	}
	if (openedMenuID == funcID) {
		openedMenuID = "";
		menuOpen = false;
	} else {
	   document.getElementById(funcID).classList.toggle("show");
	   menuOpen = true;
	   openedMenuID = funcID; 
	}
}
        
function toggleSOrg() {
	var funcID = "main_so";
	if (menuOpen) {
		document.getElementById(openedMenuID).classList.toggle("show");
	}
	if (openedMenuID == funcID) {
		openedMenuID = "";
		menuOpen = false;
	} else {
	   document.getElementById(funcID).classList.toggle("show");
	   menuOpen = true;
	   openedMenuID = funcID; 
	}
}
function toggleAbout() {
	var funcID = "main_a";
	if (menuOpen) {
		document.getElementById(openedMenuID).classList.toggle("show");
	}
	if (openedMenuID == funcID) {
		openedMenuID = "";
		menuOpen = false;
	} else {
	   document.getElementById(funcID).classList.toggle("show");
	   menuOpen = true;
	   openedMenuID = funcID; 
	}
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
	menuOpen = false;
	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) {
	  var openDropdown = dropdowns[i];
	  if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show');
	  }
	}
  }
}