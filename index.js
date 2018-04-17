
// This function loads in HTML from other files, just put a '<div data-include="<filename>"></div>'
$(document).ready(function() {

  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var html = 'components/' + $(this).data('include') + '.html';
    $(this).load(html);
  });

});

var AngularApp = angular.module('Angular', ["ngRoute"]);
var extScope;



AngularApp.controller('AngularApp', function($scope, $interval, $compile) {
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
      tags: ["Node.js", "Webserver", "begginner"],
    },
    {
      name: "Control Philips Hue using Node.js",
      url: "index.html#!/tutorials/hue_control_nodejs",
      image_url: "./static/nodejs_logo.png",
      created: {
        year: "2018",
        month: "04",
        day: "15"
      },
      tags: ["Node.js", "Phillips Hue", "Intermitiate"],
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
      tags: ["Node.js", "NeoPixels", "NeoPixels", "Intermitiate"],
    },

  ];

      extScope = $scope; //allows access to the $scope object outside of the Angular Contructor

});

AngularApp.config(function($routeProvider) { //Angular routing provides these HTML docs to "<ng-view></ng-view>" element
  $routeProvider
  .when("/", {
    templateUrl : "components/projects.html",
    controller : "AngularApp"
  })
  .when("/projects", {
    templateUrl : "./components/projects.html",
    controller : "AngularApp"
  })
  .when("/tutorials", {
    templateUrl : "./components/tutorials.html",
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
  .when("/about", {
    templateUrl : "./about/",
    controller : "AngularApp"
  })
  .otherwise({
    template : "<h1>404 Error</h1><p>Sorry! There's nothing here! <a href='/'>Go back to Home</a></p>"
  });
});
