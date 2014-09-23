'use strict';

/* Services */

var itemLookbookService = angular.module('itemLookbookService', ['ngResource']);

itemLookbookService.factory('Item', ['$resource',
  function($resource){
    return $resource('items/:itemId.json', {}, {
      query: {method:'POST', params:{itemId:'items'}, isArray:true}
    });
  }]);
