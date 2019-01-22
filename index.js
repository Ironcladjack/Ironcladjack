
// This function loads in HTML from other files, just put a '<div data-include="<filename>"></div>'
$(document).ready(function() {

  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var html = 'components/' + $(this).data('include') + '.html';
    $(this).load(html);
  });

});

var scrollToTop = function() {
    $("html").animate({scrollTop: 0}, 800);
  };

$(document).scroll(function() {
  $(".scroll-top").css("display","block");
  var y = $(this).scrollTop();
  if (y > 20) {
    $('.scroll-top').fadeIn();
  } else {
    $('.scroll-top').fadeOut();
  }
});



var AngularApp = angular.module('Angular', ["ngRoute"]);
var extScope;



AngularApp.config(function($routeProvider) { //Angular routing provides these HTML docs to "<ng-view></ng-view>" element
  $routeProvider
  .when("/", {
    title : 'Jack Gooding: Projects',
    templateUrl : "components/projects.html",
    controller : "AngularApp"
  })
  .when("/projects", {
    title : 'Jack Gooding: Projects',
    templateUrl : "./components/projects.html",
    controller : "AngularApp"
  })
  .when("/3D_Printing", {
    title : 'Jack Gooding: 3D Printing',
    templateUrl : "./components/3D_Printing.php",
    controller : "AngularApp"
  })
  .when("/tutorials", {
    title : 'Jack Gooding: Tutorials',
    templateUrl : "./components/tutorials.html",
    controller : "AngularApp"
  })
  .when("/about", {
    title : 'Jack Gooding: About',
    templateUrl : "./components/about.html",
    controller : "AngularApp"
  })
  .when("/tutorials/node_http_server", {
    templateUrl : "./components/tutorials/node_http_server.html",
    controller : "AngularApp"
  })
  .when("/tutorials/hue_control_nodejs", {
    templateUrl : "./components/tutorials/hue_control_nodejs.html",
    controller : "AngularApp"
  })
  .when("/tutorials/neopixel_control_nodejs", {
    templateUrl : "./components/tutorials/neopixel_control_nodejs.html",
    controller : "AngularApp"
  })
  .when("/tutorials/raspberry_intruder_detection", {
    templateUrl : "./components/tutorials/raspberry_intruder_detection.html",
    controller : "AngularApp"
  })
  .otherwise({
    template : "<h1>404 Error</h1><p>Sorry! There's nothing here! <a href='/'>Go back to Home</a></p>"
  });
}).run(function($rootScope, $route) {
  $rootScope.$on('$locationChangeStart',function(event, next, current){
    console.log(event.name,'current=' + current,'next=' + next);
  });
  $rootScope.$on('$locationChangeSuccess',function(event, next, current){
    console.log(event.name,'current=' + current,'next=' + next,'\n');
    document.title = $route.current.title;
    extScope.setLightboxes();
  });
  }).controller('AngularApp', function($scope, $interval, $compile) {
    $scope.setLightboxes = function() {
      console.log("clearing the lightboxes");
      //remove the #lightbox elements on changing route
      $(".lightbox-target").siblings("#lightbox").remove();
      console.log("adding lightboxes");

      setTimeout(function() {
        $(".lightbox-target").each(function(index) {
          console.log(index);
          //$(this).attr("onClick","location.href='"+$(this).attr("src")+"'");
          //$(this).children("img").attr("onClick","openLightbox("+index+")");
          $(this).after(
            `<div id="lightbox" class="lightbox-container">
              <div class="lightbox-blur" onClick="closeLightbox()"></div>
              <div class="lightbox-content">
                <span class="close cursor" onClick="closeLightbox()">&times;</span>

                    <!-- Next/previous controls -->
                    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                    <a class="next" onclick="plusSlides(1)">&#10095;</a>

                    <!-- Caption text -->
                    <div class="caption-container">
                    <p class="caption"></p>
                    </div>

                    </div>
                    </div>`
                );
          $(this).find("img").each(function(slide) {
            $(this).attr("onClick","openLightbox("+index+","+slide+")");
              $(this).closest(".lightbox-target").siblings("#lightbox").find(".lightbox-content").append(
                `<div class="lightbox-slides" style="display: none;">
                  <img src="${$(this).attr("src")}" style="width:100%" class="lightbox-image" alt="${$(this).attr("alt")}">
                  <div class="numbertext"></div>
                  </div>`
                );
              });
        });
        console.log("added lightboxes");
      }, 1500);
    };
    $scope.tutorials_list = [
      {
        name: "Node HTTP Server",
        url:  "index.html#!/tutorials/node_http_server",
        image_url: "./static/nodejs_logo.png",
        created: {
          year: "2018",
          month: "04",
          day: "04"
        },
        tags: ["Node.js", "Webserver", "Beginner"],
      },
      {
        name: "Control Philips Hue using Node.js",
        url: "index.html#!/tutorials/hue_control_nodejs",
        image_url: "./static/philips-hue-logo.png",
        created: {
          year: "2018",
          month: "04",
          day: "15"
        },
        tags: ["Node.js", "Phillips Hue", "Intermediate"],
      },
      {
        name: "Control NeoPixels / Ws2812b using Node.js and Raspberry Pi",
        url: "index.html#!/tutorials/neopixel_control_nodejs",
        image_url: "./static/nodejs_logo.png",
        created: {
          year: "2018",
          month: "04",
          day: "??"
        },
        tags: ["Node.js", "NeoPixels", "NeoPixels", "Intermediate"],
      },
      {
        name: "Raspberry Pi Intruder Detection",
        url: "index.html#!/tutorials/raspberry_intruder_detection",
        image_url: "./static/RasPi.png",
        created: {
          year: "2018",
          month: "08",
          day: "29"
        },
        tags: ["Raspberry Pi","Node.js","Electronics","Intermediate"]
      },

    ];
        extScope = $scope; //allows access to the $scope object outside of the Angular Contructor

  });
