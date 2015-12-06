var httpInterceptor = function ($q, $location, supersonic) {
    return {
        responseError: function (response) {
            if (response.status === 204 || response.status === 201) {
                return $q.resolve(response);
            }
            return $q.reject(response);
        }
    }
}

angular
    .module('common')
    .config(function ($httpProvider) {
        $httpProvider.interceptors.push(httpInterceptor);
    });

//angular
//    .module('common')
