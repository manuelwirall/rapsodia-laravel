'use strict';

/* App Module */

var app = angular.module('rapsodiaApp', [
  'gridster',
  'angularFileUpload',
  'pascalprecht.translate',
  'ngSocial',
  'rn-lazy',
  'ngRoute',
  'appControllers',
  'itemLookbookService',
  'ui.bootstrap',
  'google-maps'
]);



app.config(function($translateProvider) {
  $translateProvider.useStaticFilesLoader({
    prefix: 'languages/',
    suffix: '.json'
  });
  $translateProvider.preferredLanguage('es_AR');
});



app.config(['$routeProvider', '$sceDelegateProvider', '$locationProvider',
  function($routeProvider, $sceDelegateProvider, $locationProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      // Allow loading from our assets domain.  Notice the difference between * and **.
      'http://player.vimeo.com/video/**'
    ]);

    // The blacklist overrides the whitelist so the open redirect here is blocked.
    $sceDelegateProvider.resourceUrlBlacklist([
      'http://myapp.example.com/clickThru**'
    ]);
    
    $routeProvider.
      /*********************************************/
      // HOME
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      when('/home/aniversario', {
        templateUrl: 'partials/home-aniversario.html'
      }).
      /*********************************************/
      // CAMPAÑA
      when('/campana/fotos', {
        templateUrl: 'partials/campana-fotos.html'
      }).
      when('/campana/video', {
        templateUrl: 'partials/campana-video.html'
      }).
      /*********************************************/
      // LOOKBOOK
      when('/lookbook/fotos', {
        templateUrl: 'partials/lookbook-fotos.html'
      }).
      when('/lookbook/video', {
        templateUrl: 'partials/lookbook-video.html'
      }).
      /*********************************************/
      // UNIVERSO
      when('/universo/weare', {
        templateUrl: 'partials/universo-weare.html'
      }).
      when('/universo/weare/video', {
        templateUrl: 'partials/universo-weare-video.html'
      }).
      when('/universo/news', {
        templateUrl: 'partials/universo-news.html'
      }).
      when('/universo/styleguide', {
        templateUrl: 'partials/universo-styleguide.html'
      }).
      when('/universo/welisten', {
        templateUrl: 'partials/universo-welisten.html'
      }).
      when('/universo/welove', {
        templateUrl: 'partials/universo-welove.html'
      }).
      when('/universo/downloads', {
        templateUrl: 'partials/universo-downloads.html'
      }).
      /*********************************************/
      // RSE
      when('/rse', {
        templateUrl: 'partials/rse.html'
      }).
      when('/rse/acciones', {
        templateUrl: 'partials/rse-acciones.html'
      }).
      /*********************************************/
      // LOCALES
      when('/locales', {
        templateUrl: 'partials/locales.html'
      }).
      /*********************************************/
      // LOCALES
      when('/giftcard', {
        templateUrl: 'partials/giftcard.html'
      }).
      /*********************************************/
      // TERMINOS Y CONDICIONES
      when('/terminos',{
        templateUrl: 'partials/terminos.html'
      }).
      /*********************************************/
      // ADMIN CVS
      when('/cvs',{
        templateUrl: 'admin/list-cvs.php'
      }).
      /*********************************************/
      // DEFAULT
      otherwise({
        templateUrl: 'partials/home.html'
      });

      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');

  }]);




//focus directive
app.directive('focusIf', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            scope.$watch(attr.focusIf, function (n, o) {
                if (n != 0 && n) {
                    element[0].focus();
                }
            });
        }
    };
});
//blur directive
app.directive('blurIf', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            element.bind('blur', function () {
                //apply scope (attributes)
                scope.$apply(attr.blurIf);
                //return scope value for focusing to false
                scope.$eval(attr.focusIf + '=false');
            });
        }
    };
});

app.directive('owlcarouselinverse', function ($timeout) {
  var linker = function (scope,element,attr) {
    var loadCarousel = function () {
      element.owlCarousel({
        rtl: true,
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 3
          },
          1000: {
            items: 6
          }
        }
      });
    }
    //
    var timeout = $timeout(function () {
      loadCarousel(element);
    }, 2000);
  }
  return {
    restrict : "A",
    link: linker
  }
});

app.directive('owlcarousel', function ($timeout) {
  var linker = function (scope,element,attr) {
    var loadCarousel = function () {
      element.owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 3
          },
          1000: {
            items: 6
          }
        }
      });
    }
    //
    var timeout = $timeout(function () {
      loadCarousel(element);
    }, 2000);
  }
  return {
    restrict : "A",
    link: linker
  }
});


app.directive('spinnerOnLoadHome', function () {
  return {
    restrict: 'A',
    link: function (scope,element) {
      element.on('load', function() {
          element.removeClass('spinner-hide');
          element.addClass('spinner-show');
          element.parent().find('span.spinner').remove();
          element.hide();
          element.parent().css('background-image', 'url('+element.prop('src')+')');
      });
      scope.$watch('ngSrc', function() {
          element.addClass('spinner-hide');
          element.addClass('spinner-fade-in');
          element.parent().append('<span class="spinner"></span>');
      });      
    }
  }
});

app.directive('spinnerOnLoadLookbook', function() {
  return {
    restrict: 'A',
    link: function(scope,element){
      element.on('load', function() {
          element.removeClass('spinner-hide');
          element.addClass('spinner-show');
          element.parent().find('span.spinner').remove();
      });
      scope.$watch('ngSrc', function() {
          element.addClass('spinner-hide');
          element.addClass('spinner-fade-in');
          element.parent().append('<span class="spinner"></span>');
      });      
    }
  }
});




