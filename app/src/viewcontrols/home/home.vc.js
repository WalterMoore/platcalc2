var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var platypus_1 = require('platypus');
var base_vc_1 = require('../base/base.vc');
var HomeViewControl = (function (_super) {
    __extends(HomeViewControl, _super);
    function HomeViewControl() {
        _super.apply(this, arguments);
        this.templateString = require('./home.vc.html');
        this.context = {};
    }
    return HomeViewControl;
})(base_vc_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeViewControl;
platypus_1.register.viewControl('home-vc', HomeViewControl);
(function () {
    var app = angular.module('myApp', []);
    app.controller('CalcController', ['$scope', '$window', function ($scope, $window) {
            $scope.title = "The Calculator";
            $scope.result = null;
            $scope.input1 = null;
            $scope.input2 = null;
            $scope.operation = function (operator) {
                if ($scope.input1 == null || $scope.input2 == null) {
                    alert("Both operands are required");
                    return;
                }
                else if (operator == "+") {
                    $scope.result = $scope.input1 + $scope.input2;
                    $scope.para = "The result of adding " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
                }
                else if (operator == "-") {
                    $scope.result = $scope.input1 - $scope.input2;
                    $scope.para = "The result of subtracting " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
                }
                else if (operator == "*") {
                    $scope.result = $scope.input1 * $scope.input2;
                    $scope.para = "The result of multiplying " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
                }
                else if (operator == "/") {
                    if ($scope.input2 == 0) {
                        alert("Are you trying to kill us all? Please don't divide by zero");
                        return;
                    }
                    else {
                        $scope.result = $scope.input1 / $scope.input2;
                        $scope.para = "The result of dividing " + $scope.input1 + " and " + $scope.input2 + " is " + $scope.result;
                    }
                    ;
                }
                $scope.input1 = 0;
                $scope.input2 = 0;
            };
        }]);
})();
