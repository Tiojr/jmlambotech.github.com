
// MenuToggle to menu bars
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menuToggle(){
	if (MenuItems.style.maxHeight == "0px"){
		MenuItems.style.maxHeight = "200px";
	}
	else {
		MenuItems.style.maxHeight = "0px";
	}
}

// Automatic Cpoyight Year
document.addEventListener("DOMContentLoaded", function(){
	var currentYear = new Date().getFullYear();
	document.getElementById("copyright-year").textContent = currentYear;
});



