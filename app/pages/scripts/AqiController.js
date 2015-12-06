angular
    .module('pages')
    .controller('AqiController', function ($scope, supersonic, $http, apiConfig) {
        // Get user current location
        supersonic.device.geolocation.getPosition().then(function (position) {
            supersonic.logger.info(position);
            var prom = $http({
                url: apiConfig.apiEndpoint + "/quality",
                method: "get",
                params: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                }
            });

            prom.then(function (response) {
                supersonic.logger.debug("Received response from server /api/quality");
                supersonic.logger.debug("Arguments: ");
                supersonic.logger.debug(arguments);
            });

            prom.catch(function () {
                supersonic.logger.error("Received ERROR response from server /api/quality");
                supersonic.logger.debug("Arguments: ");
                supersonic.logger.debug(arguments);
            });
        });

        $scope.openLegend = function () {
            var modalView = new supersonic.ui.View("pages#legend");
            supersonic.ui.modal.show(modalView, {
                animate: true
            });
        }
    });

