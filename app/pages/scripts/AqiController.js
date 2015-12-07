angular
    .module('pages')
    .controller('AqiController', function ($scope, supersonic, qualityService) {

        supersonic.device.geolocation.getPosition().then(function (position) {
            qualityService.get(position.coords.latitude, position.coords.longitude).then(function (response) {
                var station = response.station;
                var components = response.components;
                var temp = false;
                station.name = station.name.replace(station.city, '');

                if (components[10054] !== null) {
                    temp = components[10054].measurement.value;
                }

                //explode timestamp
                var ts = station.aqi_timestamp.split(' ');
                var ts_time = ts[1].split(':');

                $scope.temp = temp;
                $scope.time = ts_time[0] + ' : ' + ts_time[1];
                $scope.unit = 'INDEX';
                $scope.value = station.aqi_value;
                $scope.name = 'kvalitet vazduha';
                $scope.station = station;
                $scope.components = components;

                $scope.apply(function () {
                    if (value <= 25) {
                        $scope.aqi_color = 'green';
                    } else if (value > 25 && value <= 50) {
                        $scope.aqi_color = 'blue';
                    } else if (value > 50 && value <= 75) {
                        $scope.aqi_color = 'yellow';
                    } else if (value > 75 && value <= 100) {
                        $scope.aqi_color = 'purple';
                    } else if (value > 101) {
                        $scope.aqi_color = 'red';
                    }
                })
            });
        });

        $scope.openLegend = function () {
            supersonic.ui.views.find('legend').then(function (legendView) {
                supersonic.ui.modal.show(legendView, {
                    animate: true
                });
            });
        }

        $scope.openAQIDescription = function ($value) {
            var text;

            if ($value <= 25) {
                text = 'Vazduh je odličan! Uživajte u vašim uobičajenim aktivnostima. Provodite više vremena napolju, dišite duboko';
            } else if ($value > 25 && $value <= 50) {
                text = 'Vazduh je dobrog kvaliteta. Ukoliko ne osećate ništa čudno u vazduhu, verovatno je sve u redu.';
            } else if ($value > 50 && $value <= 75) {
                text = 'Zagađenje vazduha za opštu populaciju je prihvatljivo. Senzitivne grupe bi trebale da smanje boravak napolju.';
            } else if ($value > 75 && $value <= 100) {
                text = 'Vazduh zagađen. Preporuka za sve je da smanje boravak napolju, naročito senzitivne grupe.';
            } else if ($value > 101) {
                text = 'Visoko zagađenje vazduha. Nije preporučljivo izlaziti napolje, osim u izuzetnim slučajevima.';
            }

            supersonic.ui.dialog.alert("Diši duboko", {
                message: text,
                buttonLabel: 'Zatvori'
            });
        }
    });

