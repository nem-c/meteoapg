angular
    .module('pages')
    .controller('AqiController', function ($scope, supersonic, qualityFactory) {
        supersonic.logger.log("Station cached:");
        supersonic.logger.log(qualityFactory.getStation());
        supersonic.logger.log("Components cached:");
        supersonic.logger.log(qualityFactory.getComponents());
    });

