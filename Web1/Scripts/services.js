'use strict';

// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('app.services', [])
    .value('version', '0.1')
    .service('HelloWorldFromService', function() {
        this.sayHello = function() {
            return "Hello, World!";
        };
    })
    .service('SelectedOptionService', function() {
        var selectedOption = null;
        this.setOption = function(o) {
            selectedOption = o;
        };
        this.getOption = function() {
            return selectedOption;
        }
    });