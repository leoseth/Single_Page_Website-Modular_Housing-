
  var slideIndexing4 = 1;
  showSlides4(slideIndexing4);

    function plusSlides4(n) {
        showSlides4(slideIndexing4 += n);
    }

    function currentSlide4(n) {
        showSlides4(slideIndexing4 = n);
    }

    function showSlides4(n) {
        //alert("for slider three");
      var i;
      var slides4 = document.getElementsByClassName("mySlides4");
      var dots4 = document.getElementsByClassName("dot4");

       if (n > slides4.length) {slideIndexing4 = 1}
          if (n < 1) {slideIndexing4 = slides4.length}
              for (i = 0; i < slides4.length; i++) {
                    slides4[i].style.display = "none";
              }
              for (i = 0; i < dots4.length; i++) {
                    dots4[i].className = dots4[i].className.replace(" active", "");
              }
                    slides4[slideIndexing4 - 1].style.display = "block";
                    dots4[slideIndexing4 - 1].className += " active";
    }

    autoSlide4();
    function autoSlide4() {                            
      var i;
      var slides4 = document.getElementsByClassName("mySlides4");
               for (i = 0; i < slides4.length; i++) {
          slides4[i].style.display = "none";
    }
    if (slideIndexing4 > slides4.length) {slideIndexing4 = 1}
        slides4[slideIndexing4 - 1].style.display = "block";
        slideIndexing4++;
        setTimeout(autoSlide4, 9000);
    }
