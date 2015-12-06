angular
    .module('pages')
    .controller('LegendController', function ($scope, supersonic) {
        $scope.closeLegend = function () {
            supersonic.ui.modal.hide({
                animate: true
            });
        }
    });
