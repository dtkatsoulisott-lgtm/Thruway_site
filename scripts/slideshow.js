function showSlides() { //takes a string (classname) for query
    let i;
    let slides = document.querySelectorAll(".slide");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.opacity = "0";   
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.opacity = "1";  
    setTimeout(showSlides, 3500); // Change image every 2 seconds
  }