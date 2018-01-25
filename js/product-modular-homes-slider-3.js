
  var slideIndexing3 = 1;
  showSlides3(slideIndexing3);

    function plusSlides3(n) {
        showSlides3(slideIndexing3 += n);
    }

    function currentSlide3(n) {
        showSlides3(slideIndexing3 = n);
    }

    function showSlides3(n) {
        //alert("for slider three");
      var i;
      var slides3 = document.getElementsByClassName("mySlides3");
      var dots3 = document.getElementsByClassName("dot3");

       if (n > slides3.length) {slideIndexing3 = 1}
          if (n < 1) {slideIndexing3 = slides3.length}
              for (i = 0; i < slides3.length; i++) {
                    slides3[i].style.display = "none";
              }
              for (i = 0; i < dots3.length; i++) {
                    dots3[i].className = dots3[i].className.replace(" active", "");
              }
                    slides3[slideIndexing3 - 1].style.display = "block";
                    dots3[slideIndexing3 - 1].className += " active";
    }

    autoSlide3();
    function autoSlide3() {                            
      var i;
      var slides3 = document.getElementsByClassName("mySlides3");
               for (i = 0; i < slides3.length; i++) {
          slides3[i].style.display = "none";
    }
    if (slideIndexing3 > slides3.length) {slideIndexing3 = 1}
        slides3[slideIndexing3 - 1].style.display = "block";
        slideIndexing3++;
        setTimeout(autoSlide3, 3000);
    }
