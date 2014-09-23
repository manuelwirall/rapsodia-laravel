'use strict';

/* Controllers */

var app = angular.module('appControllers', []);

/* Controladores Generales */

/* Menú */

app.controller('NavCtrl', ['$scope', '$http', '$location',
  function($scope, $http, $location) {
    
    // Navbars
    $scope.navbars = 
    [
      { name: 'main', 
        url: 'partials/navbar-main.html'
      },
      { name: 'secondary', 
        url: 'partials/navbar-secondary.html'
      }
    ];
    $scope.navbar = $scope.navbars[0];
    
    // JSon navbars data
    $http.get('items/navbar.json').success(function(data) {
      $scope.navs = data;
        if(($scope.country != 'ar') && ($scope.country != 'br') && ($scope.country != 'cl') && ($scope.country != 'uy')) {
          $scope.navs[2].sub.splice(3,1);
        }
    });
    
    // Navbars State
    $scope.navClass = function(page) {
      var currentRoute = $location.path().substring(1);
      //console.log( page , currentRoute );
      //console.log( currentRoute );
      if( currentRoute === "campana/fotos" || currentRoute === "lookbook/fotos" ){
        $scope.navbar = $scope.navbars[1];
      }else{
        $scope.navbar = $scope.navbars[0];
      }
      return page.split('/')[1] === currentRoute || currentRoute.search(page.split('#/')[1]) === 0 ? '' : '';
    };
    function NavBarCtrl($scope) {
      $scope.isCollapsed = true;
    }
  }
]);

/* Home */

app.controller('HomeListCtrl', ['$scope', '$http', '$window', '$rootScope',
  function($scope, $http, $window, $rootScope) {
    
    $rootScope.seo = {
      titulo : 'Rapsodia Verano 15`',
      seccion : 'Home',
      description: 'Descubrí el Universo Rapsodia, sus creaciones, su historia y sus valores. Inspirate en la última colección y nuestras propuestas de moda.',
      keywords: 'Rapsodia, Indumentaria, Ropa, Argentina, india, Turquía; Moda, Tendencia, Estilo, Style, Looks.',
    };  
    
    $http.get('items/items-home.json').success(function(data) {
      $scope.items = data;
    });
    
    $scope.gridsterOpts = {
      margins: [5, 0],
      outerMargin: false,
      pushing: true,
      floating: true,
      draggable: {
        enabled: false
      },
      resizable: {
        enabled: true,
        handles: 'n, e, s, w, se, sw'
      }
    };

    $scope.$on('$includeContentLoaded', function(event) {
      resizeWindow();
    });

    function resizeWindow() {

      $scope.width = window.innerWidth;
      $scope.height = window.innerHeight;

      
      if( $scope.width > '1366' ){
        $scope.items[0].row = 0; $scope.items[0].col = 0; $scope.items[0].sizeX = 2; $scope.items[0].sizeY = 3;
        $scope.items[1].row = 0; $scope.items[1].col = 2; $scope.items[1].sizeX = 4; $scope.items[1].sizeY = 3;
        $scope.items[2].row = 3; $scope.items[2].col = 0; $scope.items[2].sizeX = 3; $scope.items[2].sizeY = 2;
        $scope.items[3].row = 3; $scope.items[3].col = 3; $scope.items[3].sizeX = 3; $scope.items[3].sizeY = 2; 
        $scope.items[4].row = 5; $scope.items[4].col = 0; $scope.items[4].sizeX = 6; $scope.items[4].sizeY = 3; 
        $scope.items[5].row = 9; $scope.items[5].col = 0; $scope.items[5].sizeX = 4; $scope.items[5].sizeY = 2;
        $scope.items[6].row = 9; $scope.items[6].col = 4; $scope.items[6].sizeX = 2; $scope.items[6].sizeY = 1;
        $scope.items[7].row = 9; $scope.items[7].col = 4; $scope.items[7].sizeX = 2; $scope.items[7].sizeY = 1; 
        console.log('> 1366');
      }

      else if( $scope.width <= '1366' && $scope.width > '1024' ){
        $scope.items[0].row = 0; $scope.items[0].col = 0; $scope.items[0].sizeX = 2; $scope.items[0].sizeY = 3;
        $scope.items[1].row = 0; $scope.items[1].col = 2; $scope.items[1].sizeX = 4; $scope.items[1].sizeY = 3;
        $scope.items[2].row = 3; $scope.items[2].col = 0; $scope.items[2].sizeX = 3; $scope.items[2].sizeY = 2;
        $scope.items[3].row = 3; $scope.items[3].col = 3; $scope.items[3].sizeX = 3; $scope.items[3].sizeY = 2; 
        $scope.items[4].row = 5; $scope.items[4].col = 0; $scope.items[4].sizeX = 6; $scope.items[4].sizeY = 3; 
        $scope.items[5].row = 9; $scope.items[5].col = 0; $scope.items[5].sizeX = 4; $scope.items[5].sizeY = 2;
        $scope.items[6].row = 9; $scope.items[6].col = 4; $scope.items[6].sizeX = 2; $scope.items[6].sizeY = 1;
        $scope.items[7].row = 9; $scope.items[7].col = 4; $scope.items[7].sizeX = 2; $scope.items[7].sizeY = 1;
        console.log('<= 1366 > 1024');
      }

      else if( $scope.width <= '1024' && $scope.width > '992' ){
        $scope.items[0].row = 0; $scope.items[0].col = 0; $scope.items[0].sizeX = 2; $scope.items[0].sizeY = 3;
        $scope.items[1].row = 0; $scope.items[1].col = 2; $scope.items[1].sizeX = 4; $scope.items[1].sizeY = 3;
        $scope.items[2].row = 3; $scope.items[2].col = 3; $scope.items[2].sizeX = 3; $scope.items[2].sizeY = 2;
        $scope.items[3].row = 3; $scope.items[3].col = 0; $scope.items[3].sizeX = 3; $scope.items[3].sizeY = 2; 
        $scope.items[4].row = 5; $scope.items[4].col = 0; $scope.items[4].sizeX = 6; $scope.items[4].sizeY = 3; 
        $scope.items[5].row = 9; $scope.items[5].col = 0; $scope.items[5].sizeX = 4; $scope.items[5].sizeY = 2;
        $scope.items[6].row = 9; $scope.items[6].col = 4; $scope.items[6].sizeX = 2; $scope.items[6].sizeY = 1;
        $scope.items[7].row = 9; $scope.items[7].col = 4; $scope.items[7].sizeX = 2; $scope.items[7].sizeY = 1; 
        console.log('<= 1024 > 992');
      }

      else if( $scope.width <= '992' && $scope.width > '768' ){
        $scope.items[1].row = 0; $scope.items[1].col = 0; $scope.items[1].sizeX = 6; $scope.items[1].sizeY = 4;
        $scope.items[3].row = 5; $scope.items[3].col = 0; $scope.items[3].sizeX = 4; $scope.items[3].sizeY = 3; 
        $scope.items[0].row = 5; $scope.items[0].col = 5; $scope.items[0].sizeX = 2; $scope.items[0].sizeY = 3;
        $scope.items[2].row = 9; $scope.items[2].col = 1; $scope.items[2].sizeX = 4; $scope.items[2].sizeY = 3;
        $scope.items[4].row = 13; $scope.items[4].col = 0; $scope.items[4].sizeX = 6; $scope.items[4].sizeY = 5; 
        $scope.items[5].row = 19; $scope.items[5].col = 0; $scope.items[5].sizeX = 6; $scope.items[5].sizeY = 3;
        $scope.items[6].row = 19; $scope.items[6].col = 0; $scope.items[6].sizeX = 0; $scope.items[6].sizeY = 0;
        $scope.items[7].row = 19; $scope.items[7].col = 3; $scope.items[7].sizeX = 0; $scope.items[7].sizeY = 0; 
        console.log('<= 992 > 768');
      }

      else if( $scope.width <= '768' && $scope.width > '640' ){
        $scope.items[1].row = 0; $scope.items[1].col = 0; $scope.items[1].sizeX = 6; $scope.items[1].sizeY = 4;
        $scope.items[3].row = 5; $scope.items[3].col = 0; $scope.items[3].sizeX = 4; $scope.items[3].sizeY = 3; 
        $scope.items[0].row = 5; $scope.items[0].col = 5; $scope.items[0].sizeX = 2; $scope.items[0].sizeY = 3;
        $scope.items[2].row = 9; $scope.items[2].col = 1; $scope.items[2].sizeX = 4; $scope.items[2].sizeY = 3;
        $scope.items[4].row = 13; $scope.items[4].col = 0; $scope.items[4].sizeX = 6; $scope.items[4].sizeY = 6; 
        $scope.items[5].row = 19; $scope.items[5].col = 0; $scope.items[5].sizeX = 6; $scope.items[5].sizeY = 3;
        $scope.items[6].row = 22; $scope.items[6].col = 0; $scope.items[6].sizeX = 0; $scope.items[6].sizeY = 0;
        $scope.items[7].row = 22; $scope.items[7].col = 3; $scope.items[7].sizeX = 0; $scope.items[7].sizeY = 0; 
        console.log('<= 768 > 640');
      }

      else if( $scope.width <= '640' && $scope.width > '320' ){
        $scope.items[0].row = 0; $scope.items[0].col = 0; $scope.items[0].sizeX = 6; $scope.items[0].sizeY = 8;
        $scope.items[2].row = 9; $scope.items[2].col = 0; $scope.items[2].sizeX = 6; $scope.items[2].sizeY = 4;
        $scope.items[4].row = 14; $scope.items[4].col = 0; $scope.items[4].sizeX = 6; $scope.items[4].sizeY = 5; 
        $scope.items[5].row = 20; $scope.items[5].col = 0; $scope.items[5].sizeX = 6; $scope.items[5].sizeY = 3;        
        $scope.items[3].row = 22; $scope.items[3].col = 10; $scope.items[3].sizeX = 0; $scope.items[3].sizeY = 0; 
        $scope.items[1].row = 22; $scope.items[1].col = 10; $scope.items[1].sizeX = 0; $scope.items[1].sizeY = 0;
        $scope.items[6].row = 22; $scope.items[6].col = 10; $scope.items[6].sizeX = 0; $scope.items[6].sizeY = 0;
        $scope.items[7].row = 22; $scope.items[7].col = 10; $scope.items[7].sizeX = 0; $scope.items[7].sizeY = 0; 
        console.log('<= 640 > 320');
      }

      else if( $scope.width <= '320' && $scope.width > '0' ){
        $scope.items[0].row = 0; $scope.items[0].col = 0; $scope.items[0].sizeX = 6; $scope.items[0].sizeY = 8;
        $scope.items[2].row = 9; $scope.items[2].col = 0; $scope.items[2].sizeX = 6; $scope.items[2].sizeY = 4;
        $scope.items[4].row = 14; $scope.items[4].col = 0; $scope.items[4].sizeX = 6; $scope.items[4].sizeY = 5; 
        $scope.items[5].row = 20; $scope.items[5].col = 0; $scope.items[5].sizeX = 6; $scope.items[5].sizeY = 3;        
        $scope.items[3].row = 22; $scope.items[3].col = 10; $scope.items[3].sizeX = 0; $scope.items[3].sizeY = 0; 
        $scope.items[1].row = 22; $scope.items[1].col = 10; $scope.items[1].sizeX = 0; $scope.items[1].sizeY = 0;
        $scope.items[6].row = 22; $scope.items[6].col = 10; $scope.items[6].sizeX = 0; $scope.items[6].sizeY = 0;
        $scope.items[7].row = 22; $scope.items[7].col = 10; $scope.items[7].sizeX = 0; $scope.items[7].sizeY = 0; 
        console.log('<= 320 > 0');
      }

    }
    window.onresize = resizeWindow;

  }
]);

/* Happy 15*/
app.controller('HomeAniversarioCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    $rootScope.seo = {
      titulo : 'Video Aniversario Rapsodia Verano 15`',
      seccion : 'Video Aniversario',
      description: '',
      keywords: 'Rapsodia, Lookbook, Verano 15, Moda, Looks, Video',
    };
    $http.get('items/home-aniversario-video.json').success(function(data) {
      $scope.video = data;
    });
    $scope.resizeIframe = function() {
      $('.container-video').css( 'height', ( $(window).height() - $('.navbar').height() ) );
    }
  }
]);

/* Home / Lookbook */

app.controller('HomeLookbookCtrl', ['$scope', '$http', '$timeout', '$rootScope',
  function($scope, $http, $timeout, $rootScope) {
    // Variable para guardar el id de la foto 
    // y comparar si sigue en la misma después de X seg.
    var photoHovered;
    // Parsea JSon
    $http.get('items/lookbook-fotos.json').success(function(data) {
      // $scope.lookbooks = data;
      switch($rootScope.country) {
        case "ar":
          $scope.lookbooks = data[0];
          break;
        case "cl":
          $scope.lookbooks = data[1];
          break;
        case "uy":
          $scope.lookbooks = data[1];
          break;
        case "br":
          $scope.lookbooks = data[1];
          break;
        default:
          $scope.lookbooks = data[0];
      }
      splitLookbooks();
    });
    $scope.orderProp = 'id';

    var splitLookbooks = function () {
      $scope.lookbooksTop = $scope.lookbooks.slice(0, $scope.lookbooks.length/2);
      $scope.lookbooksBot = $scope.lookbooks.slice($scope.lookbooks.length/2, $scope.lookbooks.length);
    }
    
    
    // MouseOver
    $scope.showDescription = function (val) {
      
      // Pasa al LOOP todas las prendas
      $scope.prendas = val.prendas;

      // Asigno valor
      photoHovered = val.id;

      // Después de X segundos, si sigue 
      // en la misma foto hace la animación
      $timeout(checkOverTime, 400);
      function checkOverTime () {
        if( val.id === photoHovered ){
          $('.home .home-lookbook .top .description')
            .animate(
            {
              opacity:'1'
            }, 
            {
              duration: 300, 
              easing: 'easeInBack'
            }
          );
        }
      }
    }
    // MouseLeave
    $scope.hideDescription = function () {
      $('.home .home-lookbook .top .description')
        .animate(
        {
          opacity:'0'
        }, 
        {
          duration: 100, 
          easing: 'easeOutBack'
        }
      );
    }
  }
]);

/* Camapaña */

app.controller('CampanaFotosCtrl', ['$scope', '$http', '$rootScope', '$location',
  function($scope, $http, $rootScope, $location) {
    $rootScope.seo = {
      titulo : 'Campaña Rapsodia Verano 15',
      seccion : 'Campaña',
      description: 'Rapsodia celebra su aniversario a través de una colección enriquecida con detalles de bordados flúo, guardas de geometrías étnicas y un mix & match de texturas que revitalizan su espíritu femenino, libre y aventurero.',
      keywords: 'Rapsodia, Campaña, Verano 15, Moda, Looks, Style; Bordados, Ropa, Prendas.',
    };  
    $http.get('items/campana-fotos.json').success(function(data) {
      $scope.slides = data;
    });
    $scope.root_url = $location.absUrl();
    $scope.image_route = 'http://' + $location.host() + '/' + $rootScope.country;
    $scope.current_title = $rootScope.seo.titulo;
    $scope.current_description = $rootScope.seo.description;
    $scope.getPhotoFileName = function (prueba) {
      var file_array = prueba.split('/');
      var file_name = file_array.pop();
      return file_name;
    }
  }
]);

app.controller('CampanaVideoCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    $rootScope.seo = {
      titulo : 'Video Campaña Rapsodia Verano 15`',
      seccion : 'Video Campaña',
      description: 'Rapsodia celebra su aniversario a través de una colección enriquecida con detalles de bordados flúo, guardas de geometrías étnicas y un mix & match de texturas que revitalizan su espíritu femenino, libre y aventurero.',
      keywords: 'Rapsodia, Video campaña, Verano 15, Moda, Looks, Style',
    };
    $http.get('items/campana-video.json').success(function(data) {
      $scope.video = data;
    });
    $scope.resizeIframe = function() {
      $('.container-video').css( 'height', ( $(window).height() - $('.navbar').height() ) );
    }
  }
]);

/* Lookbook */

app.controller('LookbookFotosCtrl', ['$scope', '$http', '$location', '$rootScope',
  function($scope, $http, $location, $rootScope) {
    $rootScope.seo = {
      titulo : 'Lookbook Rapsodia Verano 15',
      seccion : 'Lookbook',
      description: 'El Lookbook Rapsodia Verano 15 propone prendas tradicionales con toques glamorosos e influencias “neo folk” Los prints y bordados del verano se llenan de líneas, blockprints y formas orgánicas inspirados en las tribus marroquíes, africanas y turcas.',
      keywords: 'Rapsodia, Lookbook, Verano 15, Moda, Looks, Style',
      url: $location.absUrl()
    };

    //genero la url root e igualo las variables del share
    //a las del rootscrope
    // var full_url = $location.absUrl();
    // var root_url_end = full_url.search("#");
    // $scope.root_url = full_url.slice(0, root_url_end);
    $scope.root_url = $location.absUrl();
    $scope.image_route = 'http://' + $location.host() + '/' + $rootScope.country;
    $scope.current_title = $rootScope.seo.titulo;
    $scope.current_description = $rootScope.seo.description;

    $http.get('items/lookbook-fotos.json').success(function(data) {
      
      // Decalaro Array
      $scope.slides = [];
      switch($rootScope.country) {
        case "ar":
          angular.forEach(data[0], function(index) {
            $scope.slides.push(index);
          });
          break;
        case "cl":
          angular.forEach(data[1], function(index) {
            $scope.slides.push(index);
          });
          break;
        case "uy":
          angular.forEach(data[1], function(index) {
            $scope.slides.push(index);
          });
          break;
        case "br":
          angular.forEach(data[1], function(index) {
            $scope.slides.push(index);
          });
          break;
        default:
          angular.forEach(data[0], function(index) {
            $scope.slides.push(index);
          });
      }
      // Desarmo JSson y agrego valores al Array
      // angular.forEach(data, function(index) {
      //   $scope.slides.push(index);
      // });

      // Intervalo del Carousel
      $scope.myInterval = 5000;

      // Go to Slide
      if (Object.keys($location.search()).length > 0) {
        var idx = $location.search().idx;
        $scope.$watch('groupedSlides', function(values) {
          $scope.slides[idx].active = true;
        }, true);
      }

      //obtengo el id del slide q esta activo para construir la url del share
      // $scope.getActiveSlide = function () {
      //     return $scope.slides.filter(function (s) { 
            
      //     });
      //   // var index = $(".active", e.target).index();
      //   // return index;
      // };

    
    });

    // 
    $scope.visibleCaption = false;
    $scope.mostrarCaption = function () {
      $scope.visibleCaption = !$scope.visibleCaption;
    }

    //
    $scope.getPhotoFileName = function (prueba) {
      var file_array = prueba.split('/');
      var file_name = file_array.pop();
      return file_name;
    }

    $scope.getLookName = function (prueba) {
      var file_array = prueba.split('/');
      var file_name = file_array.pop();
      var look_array = file_name.split('.');
      var look_name = look_array.shift();
      return look_name;
    }

    $scope.getPrendasNames = function (prueba) {
      var prendas_array = [];
      for (var i = prueba.length - 1; i >= 0; i--) {
        prendas_array.push(prueba[i].nombre);
        var prendas_string = prendas_array.toString();
        var prendas_query = encodeURI(prendas_string);
        console.log(prendas_query);
        return prendas_query;
      };
    }

  }
]);

/* Lookbook Video */

app.controller('LookbookVideoCtrl', ['$scope', '$http', '$rootScope', '$filter',
  function($scope, $http, $rootScope, $filter) {
    
    $rootScope.seo = {
      titulo : 'Video Lookbook Rapsodia Verano 15`',
      seccion : 'Video Lookbook',
      description: 'El Lookbook Rapsodia Verano 15 propone prendas tradicionales con toques glamorosos e influencias “neo folk” Los prints y bordados del verano se llenan de líneas, blockprints y formas orgánicas inspirados en las tribus marroquíes, africanas y turcas.',
      keywords: 'Rapsodia, Lookbook, Verano 15, Moda, Looks, Video',
    };

    $http.get('items/lookbook-video.json').success(function(data) {
      console.log("Pais para filtrar video: ",$rootScope.country);
      var filterVideo;
      if ( $rootScope.country == 'ar' ){
        filterVideo = "es_AR";
      }else{
        filterVideo = "es_LA";
      }
      //var dataLang = $filter('filter')( data[ $rootScope.language ] );
      var dataLang = $filter('filter')( data[ filterVideo ] );
      $scope.video = dataLang.video;
    });

    $scope.resizeIframe = function() {
      $('.container-video').css( 'height', ( $(window).height() - $('.navbar').height() ) );
    }

  }
]);

/* Universo We Are */

app.controller('UniversorWeAreCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    $rootScope.seo = {
      titulo : 'Nosotros',
      seccion : 'We Are',
      description: 'Rapsodia nace en Agosto de 1999 en Buenos Aires, Argentina, de la mano de Sol Acuña, Josefina Helguera y Francisco de Narváez.Su estilo bohemio, romántico y rockanrolero recrea una propuesta ecléctica que fusiona innumerables estampados, texturas y colores.',
      keywords: 'Rapsodia, Historia, Fundadores, Origen, Empresa, Ropa, Indumentaria, Textil, Argetina, Moda',
    };
    $scope.myInterval = 5000;
    $http.get('items/universo-weare.json').success(function(data) {
      $scope.image = data[0].image;
      $scope.text = data[0].text;
      $scope.slides = data;
    });
  }
]);

/* Universo We are Video */
app.controller('WeareVideoCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('items/weare-video.json').success(function(data) {
      $scope.video = data;
    });
    $scope.resizeIframe = function() {
      $('.container-video').css( 'height', ( $(window).height() - $('.navbar').height() ) );
    }
  }
]);

/* Descargas */

app.controller('UniversorDownloadsCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    $rootScope.seo = {
      titulo : 'Wallpapers para celulares y computadoras',
      seccion : 'Descargas',
      description: 'Descargá fondos de pantalla para tu teléfono celular y computadora',
      keywords: 'Wallpapers, Teléfono, Computadora, Celular, Fondos de Pantalla',
    };
    $http.get('items/universo-downloads.json').success(function(data) {
      $scope.downloads = data;
    });
    $scope.checkOffset = function(val) {
      if (val % 5 === 0) {
        return true;
      } else {
        return false;
      }
    }
  }
]);

/* NEWS */

app.controller('NewsCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    $rootScope.seo = {
      titulo : 'Events Rapsodia Verano 15`',
      seccion : 'News',
      description: 'Enterate de los últimos eventos de Rapsodia: Aperturas, Desfiles, Charlas estilismo, Girls Night Out, Nomad Festival.',
      keywords: 'Rapsodia, Events, Eventos, Festival, Nomad, Girls Night Out, Apertura',
    };
    $http.get('items/news.json').success(function(data) {
      switch($rootScope.country) {
        case "ar":
          $scope.items = data[0];
          break;
        case "cl":
          $scope.items = data[1];
          break;
        case "uy":
          $scope.items = data[2];
          break;
        case "br":
          $scope.items = data[2];
          break;
        default:
          $scope.items = data[0];
      }
    });
  }
]);  

/* RSE */

app.controller('RseCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    $rootScope.seo = {
      titulo : 'RSE Rapsodia Verano 15`',
      seccion : 'RSE',
      description: 'A través de nuestro programa de RSE, Rapsodia tiene por misión capacitar en el oficio de la confección a mujeres de bajos recursos, acompañándolas en la adquisición de una herramienta laboral para un trabajo digno.',
      keywords: 'Rapsodia, Solidaridad, RSE, Fundación, Colaboración, Fundación Grano de Mostaza, Fundación Conin, Fundación Mediapila, Fundación Cedemil, Hilando Sueños, Fundación Los Tilos, La Casa de Ronald McDonald, Jóvenes con Más y Mejor trabajo.',
    };

    $scope.myInterval = 5000;
    
    $http.get('items/rse-acciones.json').success(function(data) {
      $scope.h3 = data[0].h3;
      $scope.descripcion = data[0].descripcion;
      $scope.quote1 = data[0].quote1;
      $scope.quote2 = data[0].quote2;
      $scope.quote3 = data[0].quote3;
      $scope.h3right = data[0].h3right;
      $scope.li1 = data[0].li1;
      $scope.li2 = data[0].li2;
      $scope.li3 = data[0].li3;
      $scope.img = data[0].img;
      $scope.alt = data[0].alt;
      $scope.slides = data;
    });
  }
]);

/* RSE - acciones */

app.controller('RseAccionesCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    $rootScope.seo = {
      titulo : 'RSE Rapsodia Verano 15`',
      seccion : 'RSE',
      description: 'A través de nuestro programa de RSE, Rapsodia tiene por misión capacitar en el oficio de la confección a mujeres de bajos recursos, acompañándolas en la adquisición de una herramienta laboral para un trabajo digno.',
      keywords: 'Rapsodia, Solidaridad, RSE, Fundación, Colaboración, Fundación Grano de Mostaza, Fundación Conin, Fundación Mediapila, Fundación Cedemil, Hilando Sueños, Fundación Los Tilos, La Casa de Ronald McDonald, Jóvenes con Más y Mejor trabajo.',
    };
    $http.get('items/rse-acciones.json').success(function(data) {
      $scope.slides = data;
    });
  }
]);

/* Locales */

app.controller('LocalesCtrl', ['$scope', '$http', '$location', '$anchorScroll', '$timeout', '$rootScope',
  function($scope, $http, $location, $anchorScroll, $timeout, $rootScope) {
    
    $rootScope.seo = {
      titulo : 'Locales Rapsodia Verano 15`',
      seccion : 'Locales',
      description: 'Encontrá tu local más cercano en Argentina, Chile, Uruguay, Colombia, México, Venezuela.',
      keywords: 'Rapsodia, Locales, Argentina, Uruguay, Chile, Colombia, México, Venezuela',
    };

    switch($rootScope.country) {
      case "ar":
        $scope.titulo = "ARGENTINA";
        $scope.banderita = "css/img/argentina.jpg";
        break;
      case "cl":
        $scope.titulo = "CHILE";
        $scope.banderita = "css/img/chile.jpg";
        break;
      case "uy":
        $scope.titulo = "URUGUAY";
        $scope.banderita = "css/img/uruguay.jpg";
        break;
      case "br":
        $scope.titulo = "BRASIL";
        $scope.banderita = "css/img/brasil.jpg";
        break;
      default:
        $scope.titulo = "ARGENTINA";
    }

    $scope.myInterval = 5000;

    // data
    $http.get('items/locales.carousel.json').success(function(data) {
      $scope.slides = data;
    });

    $http.get('items/locales.json').success(function(data) {
      switch($rootScope.country) {
        case "ar":
          $scope.locales = data[0];
          break;
        case "cl":
          $scope.locales = data[1];
          break;
        case "uy":
          $scope.locales = data[2];
          break;
        case "br":
          $scope.locales = data[3];
          break;
        default:
          $scope.locales = data[0];
      }
    });

    // funciones del selector de locales
    $scope.mostrarSucursales = function(local) {
      //escondo todos los locales y las sucursales
      angular.forEach($scope.locales, function(otros) {
        otros.visible = false;
        $('.info-container-lugares').hide();
        angular.forEach(otros.suc, function(sucursal) {
          sucursal.visible = false;
        });
      });
      //muestro el local seleccionado
      local.visible = !local.visible;
    }

    $scope.volverLugares = function() {
      //escondo todos los locales y las sucursales
      angular.forEach($scope.locales, function(otros) {
        otros.visible = false;
        $('.info-container-lugares').show();
        angular.forEach(otros.suc, function(sucursal) {
          sucursal.visible = false;
        });
      });
    }

    $scope.mostrarDetalles = function(suc) {
      $('.info-container-detalles').show();
      //escondo todas las sucursales
      angular.forEach($scope.locales, function(otros) {
        otros.visible = false;
        angular.forEach(otros.suc, function(sucursal) {
          sucursal.visible = false;
        });
      });
      //muestro la sucursal seleccionada
      suc.visible = !suc.visible;
    }

    $scope.volverSucursales = function(local) {
      $('.info-container-detalles').hide();
      local.visible = !local.visible;
    }

    $scope.centrarMapaAgregarMarker = function(lat, lng, addr, lbl) {
      // $('.info-container-detalles').hide();
      // $('.info-container-lugares').show();
      $scope.map.center.latitude = lat;
      $scope.map.center.longitude = lng;
      $scope.map.zoom = 15;
      $scope.markers = [];
      $scope.newMarker = [
        {
          "latitude": lat,
          "longitude": lng,
          "icon": "css/img/marker-alitas.png",
          "label": lbl+',<br>'+addr
        }
      ];
      $scope.markers = $scope.newMarker;
    }
    

    // $timeout( function() {
        $scope.map = {
          center: {
            latitude: -34,
            longitude: -58
          },
          zoom: 4,
          events: {
            tilesloaded: function (map) {
              $scope.$apply(function () {
                google.maps.event.trigger(map, "resize");
              });
            }
          }
        };

      
    // $scope.map.event.trigger(map, 'resize');
      
    //init del mapa
    // $scope.initMap = function() {
    //   $scope.map = {
    //     center: {
    //       latitude: -34,
    //       longitude: -58
    //     },
    //     zoom: 4
    //   };
    // }
    // $scope.initMap();

    //scroll al mapa 
    $scope.scrollTo = function(id) {
      $("body").animate({scrollTop: $('#map').offset().top});
    }
    //si la url tiene parametros poner marker en mapa y scrollear
    if (Object.keys($location.search()).length > 1) {
      $scope.centrarMapaAgregarMarker($location.search().lat, $location.search().lng, $location.search().addr, $location.search().lbl); 
      setTimeout(function(){
        $("body").animate({scrollTop: $('#map').offset().top});
      }, 1500);
    }
  }
]);

/* Footer */

app.controller('FooterCtrl', ['$scope', '$http', '$location', '$rootScope',
  function($scope, $http, $location, $rootScope) {

    switch($rootScope.country) {
        case "ar":
          $scope.giftCard = true;
          break;
        case "cl":
          $scope.giftCard = false;
          break;
        case "uy":
          $scope.giftCard = false;
          break;
        case "br":
          $scope.giftCard = false;
          break;
        default:
          $scope.giftCard = true;
      }


    $http.get('items/locales.json').success(function(data) {
      switch($rootScope.country) {
        case "ar":
          $scope.locales = data[0];
          //console.log("locales ar");
          break;
        case "cl":
          $scope.locales = data[1];
          //console.log("locales cl");
          break;
        case "uy":
          $scope.locales = data[2];
          //console.log("locales uy");
          break;
        case "br":
          $scope.locales = data[3];
          //console.log("locales uy");
          break;
        default:
          $scope.locales = data[0];
      }
    });

    //redireccion con parametros
    $scope.gotoMapaConCoords = function (lat, lng, addr, lbl) {
      $location.path('/locales').search('lat='+lat+'&lng='+lng+'&addr='+addr+'&lbl='+lbl);
    }

    $scope.centrarMapaAgregarMarker = function(lat, lng, addr, lbl) {
      $scope.map.center.latitude = lat;
      $scope.map.center.longitude = lng;
      $scope.map.zoom = 15;
      $scope.markers = [];
      $scope.newMarker = [
        {
           "latitude": lat,
           "longitude": lng,
           "icon": "css/img/marker-alitas.png",
           "label": lbl+',<br>'+addr
        }
      ];
      $scope.markers = $scope.newMarker;
    }
  }
]);

/* Global */

app.controller('GlobalCtrl', ['$scope', '$modal', '$http', '$rootScope', '$location', '$window', '$translate', '$timeout',
  function($scope, $modal, $http, $rootScope, $location, $window, $translate, $timeout) {

    
    // Asigna lenguajes a los paises
    function getLanguage () {
      if( 
        $rootScope.country == "ar" || 
        $rootScope.country == "uy" 
        )
      {
        return 'es_AR';
      }else if( 
        $rootScope.country == "cl" ||
        $rootScope.country == "co" ||
        $rootScope.country == "mx" ||
        $rootScope.country == "ve"
        )
      {
        return 'es_LA';
      }else{
        return 'pt_BR';
      }
    }



    // Busca pais /??/
    function mySplit (string, nb) {
      $scope.array = string.split('/');
      return $scope.result = $scope.array[nb];
    }
    var country_code = mySplit($location.absUrl(),3);
    // Asugna Pais
    $rootScope.country = country_code;
    // Asigna Lenguaje
    $rootScope.language = getLanguage ();
    

    // Event Start
    $scope.view_loaded = false;
    $scope.$on('$routeChangeStart', function () {
      
      // Start Preloader
      // $('.preloader').fadeIn(50);
      $scope.view_loaded = false;
      // Asigno lenguaje a los paises
      $translate.use( getLanguage() );

    });


    // Events Load
    var first_time = true;
    $scope.$on('$routeChangeSuccess', function () {
      
      if (!first_time) {

        // Tracker Analytics
        ga('send', 'pageview', $location.url());
      }
      first_time = false;
      //mostrar view
      $timeout(function(){
        $scope.view_loaded = true;
      }, 1000);


    });


    // Modales
    $scope.openModal = function (id) {

      $rootScope.modalInstance = $modal.open({
        templateUrl: id
      });
    
    };

    // $scope.setCountry = function() {
    //   return $rootScope.country;
    // }

  }
]);










/***************************************************************************************************************************/
// Formularios
/***************************************************************************************************************************/



/* Formulario Newsletter */

app.controller('NewsletterFormCtrl', ['$scope', '$http', '$rootScope', '$timeout',
  function($scope, $http, $rootScope, $timeout) {

    $scope.sent = false;
    $scope.newsletter = {};
    $scope.newsletter.pais = $rootScope.country;

    // Selector de Locales
    var dataLocales;
    $http.get('items/locales.json').success(function(data) {
      switch($rootScope.country) {
        case "ar":
          dataLocales = data[0];
          break;
        case "cl":
          dataLocales = data[1];
          break;
        case "uy":
          dataLocales = data[2];
          break;
        case "br":
          dataLocales = data[3];
          break;
        default:
          dataLocales = data[0];
      }

      console.log("dataLocales: ",dataLocales.length);

      $scope.locales = [];
      angular.forEach(dataLocales, function(local) {
        
        angular.forEach(local.suc, function(loc) {
          console.log( "zzzzz: ", loc.label );
          $scope.locales.push({ name: loc.label  });
        });

        //$scope.locales.push({ name: local.label  });
      
      });

      console.log( "xxx: ", $scope.locales );

    });

    // function to submit the form after all validation has occurred      
    $scope.submitForm = function() {

      // check to make sure the form is completely valid
      if ($scope.formNewsletter.$valid) {

        $scope.newsletter.local = $scope.newsletter.local.name;
        console.log( $scope.newsletter );
        
        $http({          
          method  : 'POST',
          url     : 'admin/newsletter.php',
          data    : $.param($scope.newsletter), 
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
       
        }).success(function(data){
          console.log(data); 
          $scope.sent = true;
          $timeout(function(){
            $rootScope.modalInstance.dismiss('cancel');
          }, 2000);
        });
      }

    };

  }
]);

/*app.controller('NewsletterFormCtrl', ['$scope', '$http', '$rootScope', '$timeout',
  function($scope, $http, $rootScope, $timeout) {

    // Init
    $scope.newsletter = {};
    $scope.showBtnEnviar = true;
    $scope.showPanelMsg = false;
    $scope.showErrorMsg = false;
    $scope.mensaje = "";
    $scope.error = "";

    // Selector de Locales
    var dataLocales;
    $http.get('items/locales.json').success(function(data) {
      switch($rootScope.country) {
        case "ar":
          dataLocales = data[0];
          break;
        case "cl":
          dataLocales = data[1];
          break;
        case "uy":
          dataLocales = data[2];
          break;
        case "br":
          dataLocales = data[3];
          break;
        default:
          dataLocales = data[0];
      }

      console.log("dataLocales: ",dataLocales.length);

      $scope.locales = [];
      angular.forEach(dataLocales, function(local) {
        
        angular.forEach(local.suc, function(loc) {
          console.log( "zzzzz: ", loc.label );
          $scope.locales.push({ name: loc.label  });
        });

        //$scope.locales.push({ name: local.label  });
      
      });

      console.log( "xxx: ", $scope.locales );

    });

    // Submit del formulario
    $scope.submit = function() {
      if ($scope.newsletter.nombre == undefined) {
          $scope.showErrorMsg = true;
          $scope.error = "debes ingresar un nombre válido";
      } else if ($scope.newsletter.apellido == undefined) {
          alert('no');
          //$scope.showErrorMsg = true;
          //$scope.error = "debes ingresar un apellido válido";
      } else if ($scope.newsletter.mail == undefined) {
          //$scope.showErrorMsg = true;
          //$scope.error = "debes ingresar una dirección de email válida";
      } else if ($scope.newsletter.local == undefined) {
          //$scope.showErrorMsg = true;
          //$scope.error = "debes elegir un local";
      } else {

        $scope.newsletter.local = $scope.newsletter.local.name;

        $scope.showBtnEnviar = false;
        $scope.showErrorMsg = false;
        $scope.showPanelMsg = true;
        $scope.mensaje = "ENVIANDO...";

        $http({
          
          method  : 'POST',
          url     : 'admin/newsletter.php',
          data    : $.param($scope.newsletter), 
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        
        }).success(function(data){
         
          console.log(data); 
          $scope.showBtnEnviar = false;
          $scope.showErrorMsg = false;
          $scope.showPanelMsg = true;
          $scope.mensaje = "El Mensaje fue enviado. Gracias!";
          $timeout(function(){
            $rootScope.modalInstance.dismiss('cancel');
          }, 2000);
          
        });
      }
    }

  }
]);*/

/* Formulario CV */


app.controller('CvFormCtrl', ['$scope', '$http', '$rootScope', '$upload', '$timeout',
  function($scope, $http, $rootScope, $upload, $timeout) {

    $scope.sent = false;
    $scope.cv = {};
    $scope.cv.pais = $rootScope.country;

    $scope.showText = true;
    $scope.showPercent = false;
    $scope.showFile = false;
    $scope.showFileMessage = false;

    // Selector de Area
    $scope.areas = [
      { name:'Ventas Locales' },
      { name:'Producto y Producción' },
      { name:'Marketing' },
      { name:'Comercial' },
      { name:'RRHH' },
      { name:'Administración' },
      { name:'Logística' },
      { name:'Desarrollo Internacional' },
      { name:'Sistemas' },
      { name:'Comercio Exterior' }
    ];

    // Upload del archivo
    $scope.onFileSelect = function($files) {
      //$files: an array of files selected, each file has name, size, and type.
      for (var i = 0; i < $files.length; i++) {
        var file = $files[i];
        $scope.upload = $upload.upload({
          url: 'admin/upload-file.php', //upload.php script, node.js route, or servlet url
          //method: 'POST' or 'PUT',
          //headers: {'header-key': 'header-value'},
          //withCredentials: true,
          data: {myObj: $scope.myModelObj},
          file: file, // or list of files ($files) for html5 only
          //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
          // customize file formData name ('Content-Desposition'), server side file variable name. 
          //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
          // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
          //formDataAppender: function(formData, key, val){}
        }).progress(function(evt) {
          
          console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
          $scope.filePercent = parseInt(100.0 * evt.loaded / evt.total) + "%";
          $scope.showText = false;
          $scope.showPercent = true;
          $scope.showFile = false;
          $scope.showFileMessage = false;
        
        }).success(function(data, status, headers, config) {
          
          // file is uploaded successfully
          console.log('File: ',data);
          if(data.success == true){
            $scope.cv.file        = data.archivo;
          }
          $scope.cv.fileMessage   = data.message;
          $scope.showText         = false;
          $scope.showPercent      = false;
          $scope.showFile         = true;
          $scope.showFileMessage  = true;
        
        });
        //.error(...)
        //.then(success, error, progress); 
        // access or attach event listeners to the underlying XMLHttpRequest.
        //.xhr(function(xhr){xhr.upload.addEventListener(...)})
      }
      // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
    };

    // function to submit the form after all validation has occurred      
    $scope.submitForm = function() {

      // check to make sure the form is completely valid
      if ($scope.formCv.$valid) {
        
        $scope.cv.area = $scope.cv.area.name;
        console.log( $scope.cv );

        $http({
          
          method  : 'POST',
          url     : 'admin/cv.php',
          data    : $.param($scope.cv), 
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        
        }).success(function(data){
          
          console.log(data);
          $scope.sent = true;
          $timeout(function(){
            $rootScope.modalInstance.dismiss('cancel');
          }, 2000);

        });

      }



    };

  }
]);

/*app.controller('CvFormCtrl', ['$scope', '$http', '$rootScope', '$upload', '$timeout',
  function($scope, $http, $rootScope, $upload, $timeout) {
    
    // Init
    $scope.cv = {};
    $scope.showText = true;
    $scope.showPercent = false;
    $scope.showFile = false;

    $scope.showBtnEnviar = true;
    $scope.showErrorMsg = false;
    $scope.showPanelMsg = false;
    $scope.mensaje = "";
    $scope.error = "";

    // Selector de Area
    $scope.areas = [
      { name:'Ventas Locales' },
      { name:'Producto y Producción' },
      { name:'Marketing' },
      { name:'Comercial' },
      { name:'RRHH' },
      { name:'Administración' },
      { name:'Logística' },
      { name:'Desarrollo Internacional' },
      { name:'Sistemas' },
      { name:'Comercio Exterior' }
    ];
    
    // Submit del formulario
    $scope.submit = function() {

      if ($scope.cv.nombre == undefined) {
          $scope.showErrorMsg = true;
          $scope.error = "debes ingresar un nombre válido";
      } else if ($scope.cv.apellido == undefined) {
          $scope.showErrorMsg = true;
          $scope.error = "debes ingresar un apellido válido";
      } else if ($scope.cv.mail == undefined) {
          $scope.showErrorMsg = true;
          $scope.error = "debes ingresar una dirección de email válida";
      } else if ($scope.cv.area == undefined) {
          $scope.showErrorMsg = true;
          $scope.error = "debes elegir un área";
      } else if ($scope.cv.file == undefined) {
          $scope.showErrorMsg = true;
          $scope.error = "debes subir un archivo válido";
      } else {

        $scope.cv.area = $scope.cv.area.name;

        $scope.showBtnEnviar = false;
        $scope.showErrorMsg = false;
        $scope.showPanelMsg = true;
        $scope.mensaje = "ENVIANDO...";

        $http({
          
          method  : 'POST',
          url     : 'admin/cv.php',
          data    : $.param($scope.cv), 
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
        
        }).success(function(data){
          
          console.log(data);
          $scope.showBtnEnviar = false;
          $scope.showErrorMsg = false;
          $scope.showPanelMsg = true;
          $scope.mensaje = "El Mensaje fue enviado. Gracias!";
          $timeout(function(){
            $rootScope.modalInstance.dismiss('cancel');
          }, 2000);

        });
      }
    }

    // Upload del archivo
    $scope.onFileSelect = function($files) {
      //$files: an array of files selected, each file has name, size, and type.
      for (var i = 0; i < $files.length; i++) {
        var file = $files[i];
        $scope.upload = $upload.upload({
          url: 'admin/upload-file.php', //upload.php script, node.js route, or servlet url
          //method: 'POST' or 'PUT',
          //headers: {'header-key': 'header-value'},
          //withCredentials: true,
          data: {myObj: $scope.myModelObj},
          file: file, // or list of files ($files) for html5 only
          //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
          // customize file formData name ('Content-Desposition'), server side file variable name. 
          //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
          // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
          //formDataAppender: function(formData, key, val){}
        }).progress(function(evt) {
          
          console.log('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
          $scope.filePercent = parseInt(100.0 * evt.loaded / evt.total) + "%";
          $scope.showText = false;
          $scope.showPercent = true;
          $scope.showFile = false;
        
        }).success(function(data, status, headers, config) {
          
          // file is uploaded successfully
          console.log(data);
          $scope.cv.file = data.message;
          $scope.showText = false;
          $scope.showPercent = false;
          $scope.showFile = true;
        
        });
        //.error(...)
        //.then(success, error, progress); 
        // access or attach event listeners to the underlying XMLHttpRequest.
        //.xhr(function(xhr){xhr.upload.addEventListener(...)})
      }
      // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.
    };
  }
]);*/


/* Formulario Contacto */

app.controller('ContactFormCtrl', ['$scope', '$http', '$rootScope', '$timeout',
  function($scope, $http, $rootScope, $timeout) {

    $scope.sent = false;
    $scope.contacto = {};
    $scope.contacto.pais = $rootScope.country;

    // function to submit the form after all validation has occurred      
    $scope.submitForm = function() {

      // check to make sure the form is completely valid
      if ($scope.formContacto.$valid) {
        console.log( $scope.contacto );
        $http({          
          method  : 'POST',
          url     : 'admin/contacto.php',
          data    : $.param($scope.contacto), 
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
       
        }).success(function(data){
          console.log(data); 
          $scope.sent = true;
          $timeout(function(){
            $rootScope.modalInstance.dismiss('cancel');
          }, 2000);
        });
      }

    };

  }
]);

/*app.controller('ContactFormCtrl', ['$scope', '$http', '$rootScope', '$timeout',
  function($scope, $http, $rootScope, $timeout) {


    // Init
    $scope.contacto = {};
    $scope.showBtnEnviar = true;
    $scope.showPanelMsg = false;
    $scope.mensaje = "";
    var reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


    $scope.submit = function() {

      $scope.showPanelMsg = false;
      $scope.blurNombre = true;
      $scope.blurApellido = true;
      $scope.blurEmail = true;
      $scope.blurMensaje = true;
      console.log($scope.contacto.nombre);

      if ($scope.contacto.nombre == undefined || $scope.contacto.nombre === "") {
        $scope.focusNombre = true;
        $scope.showPanelMsg = true; $scope.mensaje = "debes ingresar un nombre válido";
      
      } else if ($scope.contacto.apellido == undefined || $scope.contacto.apellido == '') {
        $scope.focusApellido = true;
        $scope.showPanelMsg = true; $scope.mensaje = "debes ingresar un apellido válido";
      
      } else if ($scope.contacto.mail == undefined || $scope.contacto.mail == '') {
        $scope.focusEmail = true;
        $scope.showPanelMsg = true; $scope.mensaje = "debes ingresar una dirección de email válida";
     
      } else if (!reg.test($scope.contacto.mail)) {
        $scope.focusEmail = true;
        $scope.showPanelMsg = true; $scope.mensaje = "aaaaaaaa ingresar una dirección de email válida";
     
      } else if ($scope.contacto.telefono == undefined || $scope.contacto.telefono == '') {
        $scope.focusTelefono = true;
        $scope.showPanelMsg = true; $scope.mensaje = "debes ingresar un número de teléfono";
     
      } else if ($scope.contacto.mensaje == undefined || $scope.contacto.mensaje == '') {
        $scope.focusMensaje = true;
        $scope.showPanelMsg = true; $scope.mensaje = "No se detectó ningún mensaje";
     
      } else {

        console.log($scope.contacto);
        
        $scope.showBtnEnviar = false;
        $scope.showPanelMsg = true;
        $scope.mensaje = "ENVIANDO...";

        $http({          
          method  : 'POST',
          url     : 'admin/contacto.php',
          data    : $.param($scope.contacto), 
          headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
       
        }).success(function(data){
          console.log(data); 
          $scope.showBtnEnviar = false;
          //$scope.showErrorMsg = false;
          $scope.showPanelMsg = true;
          $scope.mensaje = "El Mensaje fue enviado. Gracias!";
          $timeout(function(){
            $rootScope.modalInstance.dismiss('cancel');
          }, 2000);
        });
      }

    };

  }
]);*/




// /* Global */

// app.controller('GlobalCtrl', ['$scope', '$modal', '$log',
//   function($scope, $modal, $log) {

//     // $scope.user = {
//     //     user: 'name',
//     //     password: null
//     // };
    
//     // Open
//     $scope.open = function (id) {
//       var modalInstance = $modal.open({
//         templateUrl: id,
//         controller: ModalInstanceCtrl,
//         resolve: {
//           user: function () {
//             return $scope.user;
//           }
//         }
//       });
//     };

//   }
// ]);
// // Modal
// var ModalInstanceCtrl = function ($scope, $modalInstance, $log, user) {
//   //$scope.user = user;
//   alert(contacto);
//   $scope.submit = function(FormName) {

//     if(FormName == "contacto"){
//       $log.log('Submiting user info.');
//       $log.log($scope.user);
//       $modalInstance.dismiss('cancel');
//     }

//   };
//   // $scope.enviar = function () {
//   //   // $modalInstance.close($scope.selected.item);
//   //   console.log( $modalInstance.templateUrl );
//   //   //$modalInstance.close();
//   // };
//   $scope.cancel = function () {
//     $modalInstance.dismiss('cancel');
//   };
// };



/* Countries selector */

app.controller('SelectorPaisesCtrl', ['$scope', '$location', '$rootScope',
  function($scope, $location, $rootScope) {
    switch($rootScope.country) {
      case "ar":
        $scope.banderita = "css/img/argentina-circular.png";
        $('li.ar').hide();
        break;
      case "cl":
        $scope.banderita = "css/img/chile-circular.png";
        $('li.cl').hide();
        break;
      case "uy":
        $scope.banderita = "css/img/uruguay-circular.png";
        $('li.uy').hide();
        break;
      case "br":
        $scope.banderita = "css/img/brasil-circular.png";
        $('li.br').hide();
        break;
      default:
        $scope.banderita = "css/img/argentina-circular.png";
        $('li.ar').hide();
    }
  }
]);

// Footer Social 

app.controller('FooterSocialCtrl', ['$scope', '$location', '$rootScope',
  function($scope, $location, $rootScope) {
    switch($rootScope.country) {
      case "ar":
        $scope.linkfb = "https://www.facebook.com/rapsodia.com.ar?fref=ts";
        $scope.linktw = "https://twitter.com/rapsodiaoficial";
        break;
      case "cl":
        $scope.linkfb = "https://www.facebook.com/pages/Rapsodia-Chile/111681722179993";
        $scope.linktw = "https://twitter.com/rapsodiachile";
        break;
      case "uy":
        $scope.linkfb = "https://www.facebook.com/RapsodiaUruguay?ref=hl";
        $scope.linktw = "https://twitter.com/RapsodiaUruguay";
        break;
      case "br":
        $scope.linkfb = "https://www.facebook.com/pages/Rapsodia-Brasil/351996324856549";
        $scope.linktw = "https://twitter.com/RapsodiaBrasil";
        break;
      default:
        $scope.linkfb = "https://www.facebook.com/rapsodia.com.ar?fref=ts";
        $scope.linktw = "https://twitter.com/rapsodiaoficial";
    }
  }
]);

//styleguide

app.controller('StyleguideCtrl', ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    $rootScope.seo = {
      titulo : 'Events Rapsodia Verano 15`',
      seccion : 'Styleguide',
      description: '',
      keywords: 'Rapsodia, Styleguide, Verano 15, Moda, Revista',
    };
    $http.get('items/universo-styleguide.json').success(function(data) {
      switch($rootScope.country) {
        case "ar":
          $scope.items = data[0];
          break;
        case "cl":
          $scope.items = data[1];
          break;
        case "uy":
          $scope.items = data[1];
          break;
        case "br":
          $scope.items = data[2];
          break;
        default:
          $scope.items = data[0];
      }
    });
  }
]);  



































app.controller('ItemListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('items/items.json').success(function(data) {
      $scope.items = data;
    });
    $scope.orderProp = 'age';
  }
]);


app.controller('ItemDetailCtrl', ['$scope', '$routeParams', 'Item',
  function($scope, $routeParams, Item) {
    $scope.item = Item.get({itemId: $routeParams.itemId}, function(item) {
      $scope.item = item;
      $scope.mainImageUrl = item.images[0];
    });
    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }
]);

app.controller('ThumbnailCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('items/thumbnails.home.json').success(function(data) {
      $scope.thumbs = data;
    });
  }
]);




