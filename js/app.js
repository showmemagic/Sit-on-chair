document.addEventListener("DOMContentLoaded", function(){
	var dropDownMenu = document.getElementById("dropDownMenu");

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

	var productsImg = document.querySelectorAll(".productsImg");

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

	var nextButton = document.getElementById("nextButton");
	var prevButton = document.getElementById("prevButton");
	var listElements = document.querySelectorAll("#sliderContainer li");
	var visiblePictureIndex = 0;

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
	
});