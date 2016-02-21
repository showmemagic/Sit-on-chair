document.addEventListener("DOMContentLoaded", function(){
	//DROPDOWN MENU VARIABLES
	var dropDownMenu = document.getElementById("dropDownMenu");

	//VANISHING TEXT - PRODUCTS SECTION IMAGES VARIABLES
	var productsImg = document.querySelectorAll(".productsImg");

	//SLIDER VARIABLES
	var nextButton = document.getElementById("nextButton");
	var prevButton = document.getElementById("prevButton");
	var listElements = document.querySelectorAll("#sliderContainer li");
	var visiblePictureIndex = 0;

	//FORM ORDER VARIABLES
	var chairsSelect = document.getElementById("chair");
	var chairDisplay = document.getElementById("chairDisplay");

	var colorSelect = document.getElementById("color");
	var colorDisplay = document.getElementById("colorDisplay");

	var materialSelect = document.getElementById("material");
	var materialDisplay = document.getElementById("materialDisplay");

	var transportCheck = document.getElementById("transport");
	var transportDisplay = document.getElementById("transportDisplay");

	var totalCost = document.getElementById("totalCost");

	var buttonOrder = document.getElementById("buttonPlanner");

	//DROPDOWN MENU
	dropDownMenu.addEventListener("mouseover", function(event){
		var sublist = document.getElementById("aboutUs");
		sublist.style.display = "block";

		sublist.addEventListener("mouseover", function(event){
			sublist.style.display = "block";
		});

		sublist.addEventListener("mouseout", function(event){
			sublist.style.display = "none";
		});
	});

	//VANISHING TEXT
	for (var i = 0; i < productsImg.length; i++) {
		productsImg[i].addEventListener("mouseover", function(event){
			var blockName = this.querySelector(".transparentStripe");
			blockName.style.display = "none";
		});
	}

	for (var i = 0; i < productsImg.length; i++) {
		productsImg[i].addEventListener("mouseout", function(event){
			var blockName = this.querySelector(".transparentStripe");
			blockName.style.display = "block";
		});
	}

	//SLIDER

	listElements[visiblePictureIndex].classList.add("visible");

	var nextButtonFunction = function(event) {
		/*listElements[visiblePictureIndex].style.WebkitTransform = "translateX(-1055px)";
		listElements[visiblePictureIndex].style.msTransform = "translateX(-1055px)";
		listElements[visiblePictureIndex].style.transform = "translateX(-1055px)";*/
		listElements[visiblePictureIndex].classList.remove("visible");
		visiblePictureIndex++;
		if (visiblePictureIndex > listElements.length - 1) {
			visiblePictureIndex = 0;
		}
		listElements[visiblePictureIndex].classList.add("visible");
		
	}
	

	var prevButtonFunction = function(event){
		/*listElements[visiblePictureIndex].style.WebkitTransform = "translateX(1055px)";
		listElements[visiblePictureIndex].style.msTransform = "translateX(1055px)";
		listElements[visiblePictureIndex].style.transform = "translateX(1055px)";*/
		listElements[visiblePictureIndex].classList.remove("visible");
		visiblePictureIndex--;
		if (visiblePictureIndex < 0) {
			visiblePictureIndex = listElements.length - 1;
		}
		listElements[visiblePictureIndex].classList.add("visible");
	}

	nextButton.addEventListener("click", nextButtonFunction);
	prevButton.addEventListener("click", prevButtonFunction);
	

	
	//FORM ORDER

	chairsSelect.addEventListener("change", function(event){
		chairDisplay.innerHTML = chairsSelect.value;
		chairDisplay.nextElementSibling.innerHTML = chairsSelect.options[chairsSelect.selectedIndex].dataset.price + " zł";
		totalSum();
	});

	colorSelect.addEventListener("change", function(event){
		colorDisplay.innerHTML = colorSelect.value;
		colorDisplay.nextElementSibling.innerHTML = "0 zł";
	});

	materialSelect.addEventListener("change", function(event){
		materialDisplay.innerHTML = materialSelect.value;
		materialDisplay.nextElementSibling.innerHTML = "0 zł";
	});

	transportCheck.addEventListener("change", function(event){
		if (transportCheck.checked === true) {
			transportDisplay.innerHTML = "Transport";
			transportDisplay.nextElementSibling.innerHTML = transportCheck.dataset.transportprice + " zł";
		}
		else {
			transportDisplay.innerHTML = "&nbsp;";
			transportDisplay.nextElementSibling.innerHTML = "&nbsp;";
		}
		totalSum();
	});

	buttonOrder.addEventListener("click", function(event) {
		if (chairDisplay.nextElementSibling.innerHTML === "0") {
			event.preventDefault();
		}
		if (colorDisplay.nextElementSibling.innerHTML === "&nbsp;") {
			event.preventDefault();
		}
		if (materialDisplay.nextElementSibling.innerHTML === "&nbsp;") {
			event.preventDefault();
		}
	});
	

	function totalSum() {
		var chairPrice = parseInt(chairsSelect.options[chairsSelect.selectedIndex].dataset.price);
		var transportCost = parseInt(transportCheck.dataset.transportprice);
		if (transportCheck.checked === true) {
			totalCost.innerHTML = chairPrice + transportCost + " zł";
		}
		else {
			totalCost.innerHTML = chairPrice + " zł";
		}
	}

});