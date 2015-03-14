'use strict';

angular.module('halfDayTrackerApp')
  .directive('personErrorSrc', function () {
  	var personErrorSrc = {
  		link: function postLink(scope, iElement, iAttrs) {
  			iElement.bind('error', function() {
  				angular.element(this).attr("src", iAttrs.personErrorSrc);
  			});
  		}
  	}

  	return personErrorSrc;
  });