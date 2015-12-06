angular
    .module('pages')
    .controller('AqiController', function ($scope, supersonic, $http, apiConfig) {
        // Get user current location
        supersonic.device.geolocation.getPosition().then(function (position) {
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
    });

