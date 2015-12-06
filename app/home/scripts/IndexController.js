angular
    .module('home')
    .controller('HomeController', function ($scope, supersonic) {

        $scope.close = function () {
            var animation = supersonic.ui.animate("fade");
            supersonic.ui.initialView.dismiss(animation);
        }
    });
