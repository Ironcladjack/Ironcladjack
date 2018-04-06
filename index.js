
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
  .when("/about", {
    templateUrl : "./about/",
    controller : "AngularApp"
  })
  .otherwise({
    template : "<h1>404 Error</h1><p>Sorry! There's nothing here! <a href='/'>Go back to Home</a></p>"
  });
});
