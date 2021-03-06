var portfolioApp = angular.module('portfolioApp',[]);

portfolioApp.controller("Portfolio",["$scope", function($scope) {
	$scope.name = "Luke";
	$scope.universityMajor = "Purdue Computer Science";
	$scope.passion = "Student and Web Developer";
	$scope.isHome = true;
	$scope.isAboutMe = false;
	$scope.isResume = false;
	$scope.showResumePic = false;
	$scope.showResumeLink = false;
	$scope.isProjects = false;

	$scope.clickedAboutMe = function() {
                $scope.isAboutMe = true;
                $scope.isHome = false;
                $scope.isResume = false;
			
    }

    $scope.clickedHome = function() {
                $scope.isAboutMe = false;
                $scope.isHome = true;
                $scope.isResume = false;

    }

    $scope.clickedResume = function() {
                $scope.isAboutMe = false;
                $scope.isHome = false;
                $scope.isResume = true;

    }

    $scope.showResume = function() {
    			if($scope.showResumePic) {
    				$scope.showResumePic = false;
    			}
    			else {
                	$scope.showResumePic = true;
            	}
    }

    $scope.showLink = function() {
    			if($scope.showResumeLink) {
    				$scope.showResumeLink = false;
    			}
    			else {
                	$scope.showResumeLink = true;
            	}
    }
	$scope.clickedProjects = function() {
				$scope.isAboutMe = false;
				$scope.isHome = false;
				$scope.isResume = false;
				$scope.isProjects = true;
			
	}


	/* ========================================================================= */
/*	Preloader
/* ========================================================================= */

jQuery(window).load(function(){

	$("#preloader").fadeOut("slow");

});


$(document).ready(function(){

	/* ========================================================================= */
	/*	Menu item highlighting
	/* ========================================================================= */

	jQuery('#nav').singlePageNav({
		offset: jQuery('#nav').outerHeight(),
		filter: ':not(.external)',
		speed: 1200,
		currentClass: 'current',
		easing: 'easeInOutExpo',
		updateHash: true,
		beforeStart: function() {
			console.log('begin scrolling');
		},
		onComplete: function() {
			console.log('done scrolling');
		}
	});
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color","#0EB493");
        } else {
            $("#navigation").css("background-color","rgba(16, 22, 54, 0.2)");
        }
    });
	
	/* ========================================================================= */
	/*	Fix Slider Height
	/* ========================================================================= */	

	var slideHeight = $(window).height();
	
	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);

	$(window).resize(function(){'use strict',
		$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
	});
	
	
	/* ========================================================================= */
	/*	Portfolio Filtering
	/* ========================================================================= */	
	
	
    // portfolio filtering

    $(".project-wrapper").mixItUp();
	
	
	$(".fancybox").fancybox({
		padding: 0,

		openEffect : 'elastic',
		openSpeed  : 650,

		closeEffect : 'elastic',
		closeSpeed  : 550,

		closeClick : true,
	});
	
	/* ========================================================================= */
	/*	Parallax
	/* ========================================================================= */	
	
	$('#facts').parallax("50%", 0.3);
	
	/* ========================================================================= */
	/*	Timer count
	/* ========================================================================= */

	"use strict";
    $(".number-counters").appear(function () {
        $(".number-counters [data-to]").each(function () {
            var e = $(this).attr("data-to");
            $(this).delay(6e3).countTo({
                from: 50,
                to: e,
                speed: 3e3,
                refreshInterval: 50
            })
        })
    });
	
	/* ========================================================================= */
	/*	Back to Top
	/* ========================================================================= */
	
	
    $(window).scroll(function () {
        if ($(window).scrollTop() > 400) {
            $("#back-top").fadeIn(200)
        } else {
            $("#back-top").fadeOut(200)
        }
    });
    $("#back-top").click(function () {
        $("html, body").stop().animate({
            scrollTop: 0
        }, 1500, "easeInOutExpo")
    });
	
});

}]);
