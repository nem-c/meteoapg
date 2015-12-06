angular
    .module('pages')
    .controller('AqiController', function ($scope, supersonic, qualityFactory) {
        supersonic.logger.log("Station cached:");
        supersonic.logger.log(qualityFactory.getStation());
        supersonic.logger.log("Components cached:");
        supersonic.logger.log(qualityFactory.getComponents());

        $scope.openLegend = function () {
            var modalView = new supersonic.ui.View("pages#legend");
            supersonic.ui.modal.show(modalView, {
                animate: true
            });
        }
    });

