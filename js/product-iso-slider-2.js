
  var slideIndexing = 1;
  showSlides2(slideIndexing);

    function plusSlides2(n) {
        showSlides2(slideIndexing += n);
    }

    function currentSlide2(n) {
        showSlides2(slideIndexing = n);
    }

    function showSlides2(n) {
        //alert("for slider two");
      var i;
      var slides2 = document.getElementsByClassName("mySlides2");
      var dots2 = document.getElementsByClassName("dot2");

       if (n > slides2.length) {slideIndexing = 1}
          if (n < 1) {slideIndexing = slides2.length}
              for (i = 0; i < slides2.length; i++) {
                    slides2[i].style.display = "none";
              }
              for (i = 0; i < dots2.length; i++) {
                    dots2[i].className = dots2[i].className.replace(" active", "");
              }
                    slides2[slideIndexing - 1].style.display = "block";
                    dots2[slideIndexing - 1].className += " active";
    }

    autoSlide2();
    function autoSlide2() {                            
      var i;
      var slides2 = document.getElementsByClassName("mySlides2");
               for (i = 0; i < slides2.length; i++) {
          slides2[i].style.display = "none";
    }
    if (slideIndexing > slides2.length) {slideIndexing = 1}
        slides2[slideIndexing - 1].style.display = "block";
        slideIndexing++;
        setTimeout(autoSlide2, 3000);
    }
