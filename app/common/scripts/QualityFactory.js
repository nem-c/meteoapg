angular.module('common')
    .factory('qualityFactory', function (supersonic, qualityService) {

        var cache = {"data": null};

        var initializeCache = function (lat, lng) {
            supersonic.logger.debug("Initializing cache...");
            qualityService.get(lat, lng).then(function (response) {
                supersonic.logger.debug("Cache initialized");
                cache.data = response;
                supersonic.logger.debug(cache.data);
            }).catch(function () {
                supersonic.logger.debug("Cache NOT initialized!");
            });
        }

        var getStation = function () {
            var station = (cache.data !== null) ? cache.data["station"] : null;
            return station;
        }

        var getComponents = function () {
            var components = (cache.data !== null) ? cache.data["components"] : null;
            var result = {};
            for (var sepa_id in components) {
                if (components.hasOwnProperty(sepa_id) && components[sepa_id]["measurement"] !== null) {
                    result.push(components[sepa_id]);
                }
            }

            return result;
        }

        return {
            initializeCache: initializeCache,
            getStation: getStation,
            getComponents: getComponents
        }
    });