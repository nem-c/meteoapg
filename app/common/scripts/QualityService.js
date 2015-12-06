angular.module('common')
    .factory('qualityService', function ($q, supersonic, $http, apiConfig) {
        var get = function (lat, lng) {
            var deferred = $q.defer();
            $http.get(apiConfig.apiEndpoint + "/quality", {
                params: {
                    lat: lat,
                    lng: lng
                },
                cache: true
            }).then(function (response) {
                supersonic.logger.debug("Received response from /api/quality");
                if (response.status === 204) {
                    deferred.resolve(null);
                } else {
                    supersonic.logger.debug(response.data);
                    deferred.resolve(response.data);
                }
            }).catch(function () {
                supersonic.logger.error("Received ERROR response from server /api/quality");
                deferred.reject();
            });
            return deferred.promise;
        }

        return {
            get: get
        }
    });