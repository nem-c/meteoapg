angular
    .module('home')
    .controller('HomeController', function ($scope, supersonic, qualityFactory) {

        // Get user current location
        supersonic.device.geolocation.getPosition().then(function (position) {
            qualityFactory.initializeCache(position.coords.latitude, position.coords.longitude);
        });

        $scope.close = function () {
            var animation = supersonic.ui.animate("fade");
            supersonic.ui.initialView.dismiss(animation);
        }
    });
