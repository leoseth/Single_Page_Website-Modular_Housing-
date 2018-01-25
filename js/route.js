
var app = angular.module('myapp', ['ngRoute']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/home',
        {
            controller: 'homecontroller',
            templateUrl:'/html/homes/home.html'
        })
        .when('/about',
        {
            controller: 'aboutcontroller',
            templateUrl:'/html/about/about.html'
        })
        .when('/products',
        {
            controller: 'productscontroller',
            templateUrl:'/html/product/product.html'
        })
        .when('/projects',
        {
            controller: 'projectscontroller',
            templateUrl:'/html/project/projects.html'
        })
        .when('/projects-2',
        {
            controller: 'projects2controller',
            templateUrl:'/html/project/projects-2.html'
        })
        .when('/contact',
        {
            controller: 'contactcontroller',
            templateUrl:'/html/contact/contact.html'
        })
        .when('/brochure',
        {
            controller: 'brochurecontroller',
            templateUrl:'/html/brochures/brochure.html'
        })
        .when('/projects-sion',
        {
            controller: 'projects-sioncontroller',
            templateUrl:'/html/single-project/projects-sion.html'
        })
        .when('/projects-keetwomen',
        {
            controller: 'projects-keetwomencontroller',
            templateUrl:'/html/single-project/projects-keetwomen.html'
        })  
        .when('/projects-germany',
        {
            controller: 'projects-germanycontroller',
            templateUrl:'/html/single-project/projects-germany.html'
        })  
        .when('/projects-belgium',
        {
            controller: 'projects-belgiumcontroller',
            templateUrl:'/html/single-project/projects-belgium.html'
        })  
        .when('/projects-Faeroër',
        {
            controller: 'projects-Faeroërcontroller',
            templateUrl:'/html/single-project/projects-Faeroër.html'
        })  
        .when('/projects-panama',
        {
            controller: 'projects-panamacontroller',
            templateUrl:'/html/single-project/projects-panama.html'
        }) 
        .when('/projects-Skaeve',
        {
            controller: 'projects-Skaevecontroller',
            templateUrl:'/html/single-project/projects-Skaeve.html'
        })  
        .when('/projects-festivilla',
        {
            controller: 'projects-festivillacontroller',
            templateUrl:'/html/single-project/projects-festivilla.html'
        })
        .when('/projects-artlondon',
        {
            controller: 'projects-artlondoncontroller',
            templateUrl:'/html/single-project/projects-artlondon.html'
        }) 
        .when('/projects-Brighton-UK',
        {
            controller: 'projects-Brighton-UKcontroller',
            templateUrl:'/html/single-project/projects-Brighton-UK.html'
        })  
        .when('/projects-caribbean-school',
        {
            controller: 'projects-caribbean-schoolcontroller',
            templateUrl:'/html/single-project/projects-caribbean-school.html'
        })  
        .when('/projects-harbor',
        {
            controller: 'projects-harborcontroller',
            templateUrl:'/html/single-project/projects-harbor.html'
        })  
        .when('/projects-labour-hotel',
        {
            controller: 'projects-labour-hotelcontroller',
            templateUrl:'/html/single-project/projects-labour-hotel.html'
        })  
        .when('/projects-Salvation',
        {
            controller: 'projects-Salvationcontroller',
            templateUrl:'/html/single-project/projects-Salvation-army.html'
        })  
        .when('/projects-Garden home',
        {
            controller: 'projects-Garden-homecontroller',
            templateUrl:'/html/single-project/projects-Garden home.html'
        })  
        .when('/projects-Servotel-haïti',
        {
            controller: 'projects-Servotel-haïticontroller',
            templateUrl:'/html/single-project/projects-Servotel-haïti.html'
        })  
        .when('/projects-Student-housing',
        {
            controller: 'projects-Student-housingcontroller',
            templateUrl:'/html/single-project/projects-Student-housing.html'
        })  
        .when('/projects-Tesla',
        {
            controller: 'projects-Teslacontroller',
            templateUrl:'/html/single-project/projects-Tesla.html'
        })  
        .when('/product-iso',
        {
            controller: 'product-isocontroller',
            templateUrl:'/html/product-iso/product-iso.html'
        })  
        .when('/professor-30',
        {
            controller: 'professor-30controller',
            templateUrl: '/html/product-iso/professor-30.html'
        })   
        .when('/director-60',
        {
            controller: 'director-60controller',
            templateUrl: '/html/product-iso/director-60.html'
        })   
        .when('/Traveler-15',
        {
            controller: 'Traveler-15controller',
            templateUrl: '/html/product-iso/Traveler-15.html'
        })   
        .when('/product-modular-homes',
        {
            controller: 'product-modularcontroller',
            templateUrl:'/html/product-modular-homes/product-modular-homes.html'
        })  
        .when('/concrete-35',
        {
            controller: 'concrete-35controller',
            templateUrl:'/html/product-modular-homes/concrete-35.html'
        })  
        .when('/sp-20',
        {
            controller: 'sp-20controller',
            templateUrl:'/html/product-modular-homes/sp-20.html'
        })  
        .when('/sp-47',
        {
            controller: 'sp-47controller',
            templateUrl:'/html/product-modular-homes/sp-47.html'
        })  
        .when('/product-flat-pack',
        {
            controller: 'product-flatcontroller',
            templateUrl:'/html/product-flat-pack/product-flat-pack.html'
        })  
        .otherwise({
            redirectTo: '/home'
        })
});

app.controller('homecontroller', function ($scope) {
    //alert('this is a home controller');
      
    var obj = document.getElementById("home");
    if (obj.style.display == "block")
        obj.style.display = "none";
    else
        obj.style.display = "block";

    document.getElementById("titles").innerText = "Main || Tempo Housing Modular Express";
});

app.controller('aboutcontroller', function ($scope) {   
    
    var obj = document.getElementById("home");
        obj.style.display = "none";

        var obj2 = document.getElementById("about");
        if (obj2.style.display == "block")
            obj2.style.display = "none";
        else
            obj2.style.display = "block";

        document.getElementById("titles").innerText = "About Us || Tempo Housing Modular Express";     

        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);

            });
        }
});

app.controller('productscontroller', function ($scope) {
 
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj4 = document.getElementById("product");
    if (obj4.style.display == "block")
        obj4.style.display = "none";
    else
        obj4.style.display = "block";

    document.getElementById("titles").innerText = "Products || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }   
});

app.controller('projectscontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj5 = document.getElementById("projects");
    if (obj5.style.display == "block")
        obj5.style.display = "none";
    else
        obj5.style.display = "block";

    document.getElementById("titles").innerText = "Projects || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
});

app.controller('projects2controller', function ($scope) {
  
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj6 = document.getElementById("projects-2");
    if (obj6.style.display == "block")
        obj6.style.display = "none";
    else
        obj6.style.display = "block";

    document.getElementById("titles").innerText = "Projects || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
});

app.controller('contactcontroller', function ($scope, $http) {
   
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj7 = document.getElementById("contact");
    if (obj7.style.display == "block")
        obj7.style.display = "none";
    else
        obj7.style.display = "block";

    document.getElementById("titles").innerText = "Contact Us || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    
    $scope.sendemail = function (sendmail) {
        var url = window.location.href
        var arr = url.split("/");
        var result = arr[0] + "//" + arr[2]

        console.log(url, "one");
        console.log(arr, "two");
        console.log(result, "three");

        if (count != 1) {
            var sending = { 'vname': $scope.name, 'vemail': 'voicecontact@yahoo.com', 'vemailreference': $scope.emailref, 'vphone': $scope.phone, 'vsubject': $scope.subject, 'varchitect': $scope.architect, 'vcontractor': $scope.contractor, 'vgovernment': $scope.government, 'vhospitality': $scope.hospitality, 'vhousing_corporation': $scope.housing_corporation, 'vproject_development': $scope.project_development, 'vsupplier': $scope.supplier, 'vmedia': $scope.media, 'vother': $scope.other, 'vnewsletter': $scope.newsletter, 'vremarks': $scope.remarks }
            count = 1
            $http({ url: result + '/mail/Sendemail', method: "POST", data: JSON.stringify(sending), dataType: 'json', headers: { 'Content-Type': 'application/json' } }).success(function (response) {
                alert("email sent successfully");
                count = 0;
                window.location.href = "#contact";  
            }, function (failed) {
                alert("email failed");
            });
            return;
        }
    }

 });

app.controller('brochurecontroller', function ($scope) {   
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj8 = document.getElementById("brochure");
    if (obj8.style.display == "block")
        obj8.style.display = "none";
    else
        obj8.style.display = "block";

    document.getElementById("titles").innerText = "Brochure || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
  
});

app.controller('projects-sioncontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("projects-sion");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";
    

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    //autoSlide();
});

app.controller('projects-keetwomencontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("keetwomen");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    autoSlide();
});

app.controller('projects-germanycontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("germany");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    autoSlide();
});

app.controller('projects-belgiumcontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("belgium");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    autoSlide();
});

app.controller('projects-Faeroërcontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("Faeroë");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    autoSlide();
    $("#trigger").before(function () {
        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    })
});

app.controller('projects-panamacontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("panama");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    autoSlide();
    $("#trigger").before(function () {
        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    })
});

app.controller('projects-Skaevecontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("Skaeve");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    autoSlide();
    $("#trigger").before(function () {
        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    })
});

app.controller('projects-festivillacontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("festivilla");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    autoSlide();
    $("#trigger").before(function () {
        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    })
});

app.controller('projects-artlondoncontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("artlondon");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
   
    autoSlide();

    $("#trigger").before(function () {
        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    })
});

app.controller('projects-Brighton-UKcontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("Brighton-UK");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    
    autoSlide();
    $("#trigger").before(function () {
        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    })
});

app.controller('projects-caribbean-schoolcontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("caribbean");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    
    autoSlide();
    $("#trigger").before(function () {
        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    })
});

app.controller('projects-harborcontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("harbor");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    
    autoSlide();
    $("#trigger").before(function () {
        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    })
});

app.controller('projects-labour-hotelcontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("labour-hotel");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    autoSlide();
});

app.controller('projects-Salvationcontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("salvation");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    autoSlide();
});

app.controller('projects-Garden-homecontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("Garden-home");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    autoSlide();
});

app.controller('projects-Servotel-haïticontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("servotel");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    autoSlide();
});

app.controller('projects-Student-housingcontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("student-housing");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    
    autoSlide();
    $("#trigger").before(function () {
        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    })
});

app.controller('projects-Teslacontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("tesla");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Project Single || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    autoSlide();

    $("#trigger").before(function () {       
        var target = $(this).attr('data-target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
            }, 1000);
    })
});

app.controller('product-isocontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("productiso");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Product ISO Module || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }   
    slider1();
    slider2();
    slider3();
});

app.controller('professor-30controller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("professor30");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Product Professor 30|| Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    slideindex4();
});

app.controller('director-60controller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("director60");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Product Director 60 || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    slideindex4();
});

app.controller('Traveler-15controller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("Traveler15");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Product Traveller 15 || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    slideindex4();
});

app.controller('product-modularcontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("product-modular");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Product Modular Homes || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }    
    slider1();
    slider2();
    slider3();
});

app.controller('concrete-35controller', function ($scope) {    
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("concrete35");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Concrete 35 || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    slideindex4();
});

app.controller('sp-20controller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("sp20");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "SP-20 || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    slideindex4();
});

app.controller('sp-47controller', function ($scope) {   
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("sp47");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "SP-47 || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    slideindex4();
});


app.controller('product-flatcontroller', function ($scope) {
    var obj = document.getElementById("home");
    obj.style.display = "none";

    var obj9 = document.getElementById("product-flat");
    if (obj9.style.display == "block")
        obj9.style.display = "none";
    else
        obj9.style.display = "block";

    document.getElementById("titles").innerText = "Product Flat Pack || Tempo Housing Modular Express";

    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
    slider1();
    slider2();
    slider3();
});

////// this is for automatic slider-1 ///////
function slider1() {
    
    autoSlide();
    function autoSlide() {    
        showSlides(slideIndex);
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        if (slideIndex > slides.length) { slideIndex = 1 } else { slides[slideIndex - 1].style.display = "block";}
        //slides[slideIndex - 1].style.display = "block";
        slideIndex++;
        setTimeout(autoSlide, 3000);
    }
}
////// this is for automatic slider-1 ///////

////// this is for automatic slider-2 ///////
function slider2() {       
    
    autoSlide2();
    function autoSlide2() {       
        showSlides2(slideIndexing);
        var i;
        var slides2 = document.getElementsByClassName("mySlides2");
        for (i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        if (slideIndexing > slides2.length) { slideIndexing = 1 } else { slides2[slideIndexing - 1].style.display = "block";}
        //slides2[slideIndexing - 1].style.display = "block";
        slideIndexing++;
        setTimeout(autoSlide2, 3000);
    }
}
////// this is for automatic slider-2 ///////

////// this is for automatic slider-3 ///////
function slider3() {
    
    autoSlide3();
    function autoSlide3() {   
        showSlides3(slideIndexing3);
        var i;
        var slides3 = document.getElementsByClassName("mySlides3");
        for (i = 0; i < slides3.length; i++) {
            slides3[i].style.display = "none";
        }
        if (slideIndexing3 > slides3.length) { slideIndexing3 = 1 } else { slides3[slideIndexing3 - 1].style.display = "block";}
        //slides3[slideIndexing3 - 1].style.display = "block";
        slideIndexing3++;
        setTimeout(autoSlide3, 3000);
    }
}
////// this is for automatic slider-3 ///////

 ////// this is for the automatic slider //////      
function autoSlide() {
    showSlides(slideIndex);

     var i;
     var slides = document.getElementsByClassName("mySlides");
     for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
     }
     if (slideIndex > slides.length) { slideIndex = 1 } else { slides[slideIndex - 1].style.display = "block";}
        //slides[slideIndex - 1].style.display = "block";
        slideIndex++;
        setTimeout(autoSlide, 9000);
 }
 ////// this is for the automatic slider //////   

////// this is for the automatic slideindex-4 ///////

function slideindex4() {

    //var slideIndexing4 = 1;  
    autoSlide4();
    function autoSlide4() {    
        showSlides4(slideIndexing4);    
        var i;
        var slides4 = document.getElementsByClassName("mySlides4");
        for (i = 0; i < slides4.length; i++) {
            slides4[i].style.display = "none";
        }
        if (slideIndexing4 > slides4.length) { slideIndexing4 = 1 } else { slides4[slideIndexing4 - 1].style.display = "block";}
        //slides4[slideIndexing4 - 1].style.display = "block";
        slideIndexing4++;
        setTimeout(autoSlide4, 9000);
    }
}
////// this is for the automatic slideindex-4 ///////




