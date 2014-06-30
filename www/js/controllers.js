angular.module('starter.controllers', [])

.controller('MealCtrl', function($scope) {
})

.controller('WorkoutCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('HomeCtrl', function($scope) {
  $scope.users = ['Javlon', 'Taffy'];
});

