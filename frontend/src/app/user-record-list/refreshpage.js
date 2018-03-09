function RefreshController($scope, $window) {
  $scope.template.url = "user-record-list.component.html";
  $scope.bleeAlert = function() {
    $window.alert('ALERT');
  };
  
  $scope.refreshme = function() {
    $window.location.reload();
  }

}