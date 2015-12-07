angular.module('common')
    .factory('qualityFactory', function (supersonic, qualityService) {

        var initializeCache = function (lat, lng) {
            return qualityService.get(lat, lng).then(function (response) {
                writeLocalStorage('data', response);
            }).catch(function (error) {
                supersonic.logger.error(error);
            });
        }

        var getStation = function () {
            var data = readLocalStorage('data');
            var station = (data !== null) ? data.station : null;
            return station;
        }

        var getComponents = function () {
            var data = readLocalStorage('data');
            var components = (data !== null) ? data.components : null;
            var result = {};
            for (var sepa_id in components) {
                if (components.hasOwnProperty(sepa_id) && components[sepa_id]["measurement"] !== null) {
                    result.push(components[sepa_id]);
                }
            }

            return result;
        }

        var writeLocalStorage = function (name, data) {
            alert(data);
            var stringified = JSON.stringify(data);
            alert(stringified);
            localStorage.setItem(name, stringified);
        }

        var readLocalStorage = function (name) {
            var cached = localStorage.getItem(name);
            return JSON.parse(cached);
        }

        return {
            initializeCache: initializeCache,
            getStation: getStation,
            getComponents: getComponents
        }
    });