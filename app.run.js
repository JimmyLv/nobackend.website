export default function running($rootScope, $location, $router, $http, CacheFactory) {
  'ngInject';

  $http.defaults.cache = CacheFactory('defaultCache', {
    maxAge: 15 * 60 * 1000, // Items added to this cache expire after 15 minutes
    cacheFlushInterval: 60 * 60 * 1000, // This cache will clear itself every hour
    deleteOnExpire: 'aggressive' // Items will be deleted from this cache when they expire
  });

  $router.config([
    {
      path: '/dashboard',
      component: {
        users: 'users',
        dashboard: 'dashboard'
      },
      as: 'dashboard'
    }]);

  $rootScope.$on('$locationChangeSuccess', function () {
    console.info($location.absUrl());
  });
}