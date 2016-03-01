app.controller("mainController", ['$scope', 'Teas', function($scope, Teas) {
  $scope.teas = Teas.teas;
  $scope.add = Teas.add;
  $scope.cart = Teas.cart;
  $scope.showEdit = false;
  $scope.quantity = 1;

  $scope.total = function() {
    var cartTotalArr = []
    for (var i = 0; i < Teas.cart.length; i++) {
      var cartTotal = Teas.cart[i].total
      cartTotalArr.push(cartTotal)
      var total = cartTotalArr.reduce((prev, curr) => prev+curr);
    }
    if (total===undefined) {
      return "$0.00"
    } else {
      return "$" + parseFloat(total).toFixed(2);
    }
  };

  $scope.toggleEdit = function() {
    $scope.showEdit = !$scope.showEdit;
    $scope.hideQty = !$scope.hideQty;
    $scope.hideSave = !$scope.hideSave;
  }

  $scope.updateQuantity = function(edit) {
    this.item.quantity = edit;
    this.item.total = this.item.price/100 * edit;
  }

  $scope.remove = function(x) {
    $scope.cart.splice(x, 1);
  }

}]);
