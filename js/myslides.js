
    ////// this is for the manual slider //////

    var slideIndex = 1;

    //showSlides(slideIndex);
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        console.log(slides);
        console.log(dots);

        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";       
    }

    ////// this is for the manual slider //////


    ////// this is for the manual slideindex-4 ///////
    var slideIndexing4 = 1;
    //showSlides4(slideIndexing4);

    function plusSlides4(n) {
        showSlides4(slideIndexing4 += n);
    }

    function currentSlide4(n) {
        showSlides4(slideIndexing4 = n);
    }

    function showSlides4(n) {
        var i;
        var slides4 = document.getElementsByClassName("mySlides4");
        var dots4 = document.getElementsByClassName("dot4");

        if (n > slides4.length) { slideIndexing4 = 1 }
        if (n < 1) { slideIndexing4 = slides4.length }
        for (i = 0; i < slides4.length; i++) {
            slides4[i].style.display = "none";
        }
        for (i = 0; i < dots4.length; i++) {
            dots4[i].className = dots4[i].className.replace(" active", "");
        }
        //if (slideIndexing4 > slides4.length) { slideIndexing4 = 1 } else { slides4[slideIndexing4 - 1].style.display = "block"; dots4[slideIndexing4 - 1].className += " active"; } 
        if (slideIndexing4 > slides4.length) {
            slideIndexing4 = 1
        } else {
            slides4[slideIndexing4 - 1].style.display = "block"; dots4[slideIndexing4 - 1].className += " active";
        } 
        //slides4[slideIndexing4 - 1].style.display = "block";
        //dots4[slideIndexing4 - 1].className += " active";
    }
    ////// this is for the manual slideindex-4 ///////


    ////// this is for manual slider-1 ///////        
    var slideIndex = 1;

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        //var slideIndex = 1;
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");

        console.log(slides);
        //console.log(slides2);
         
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        if (slideIndex > slides.length) {
            slideIndex = 1
            alert("this is for slideIndex = 1");
        } else {
            alert("this is NOT for slideIndex = 1");
           
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
        }                    
        //    slides[slideIndex - 1].style.display = "block";
        //    dots[slideIndex - 1].className += " active";        
    }
    ////// this is for manual slider-1 ///////

    ////// this is for manual slider-2 ///////         
    var slideIndexing = 1;

    function plusSlides2(n) {
        showSlides2(slideIndexing += n);
    }

    function currentSlide2(n) {
        showSlides2(slideIndexing = n);
    }

    function showSlides2(n) {
        var i;
        var slides2 = document.getElementsByClassName("mySlides2");
        var dots2 = document.getElementsByClassName("dot2");

        if (n > slides2.length) { slideIndexing = 1 }
        if (n < 1) { slideIndexing = slides2.length }
        for (i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        for (i = 0; i < dots2.length; i++) {
            dots2[i].className = dots2[i].className.replace(" active", "");
        }
        if (slideIndexing > slides2.length) { slideIndexing = 1 } else { slides2[slideIndexing - 1].style.display = "block"; dots2[slideIndexing - 1].className += " active";}
        //slides2[slideIndexing - 1].style.display = "block";
        //dots2[slideIndexing - 1].className += " active";
    }
    ////// this is for manual slider-2 ///////

    ////// this is for manula slider-3 ///////  
    var slideIndexing3 = 1;
    //showSlides3(slideIndexing3);

    function plusSlides3(n) {
        showSlides3(slideIndexing3 += n);
    }

    function currentSlide3(n) {
        showSlides3(slideIndexing3 = n);
    }

    function showSlides3(n) {
        var i;
        var slides3 = document.getElementsByClassName("mySlides3");
        var dots3 = document.getElementsByClassName("dot3");

        if (n > slides3.length) { slideIndexing3 = 1 }
        if (n < 1) { slideIndexing3 = slides3.length }
        for (i = 0; i < slides3.length; i++) {
            slides3[i].style.display = "none";
        }
        for (i = 0; i < dots3.length; i++) {
            dots3[i].className = dots3[i].className.replace(" active", "");
        }
        if (slideIndexing3 > slides3.length) { slideIndexing3 = 1 } else { slides3[slideIndexing3 - 1].style.display = "block"; dots3[slideIndexing3 - 1].className += " active";}
        //slides3[slideIndexing3 - 1].style.display = "block";
        //dots3[slideIndexing3 - 1].className += " active";
    }
////// this is for manula slider-3 ///////

