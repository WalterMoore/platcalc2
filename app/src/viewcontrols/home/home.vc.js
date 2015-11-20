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
        this.context = {
            title: "A Platypi Calculator",
            input1: null,
            input2: null,
            para: ''
        };
    }
    HomeViewControl.prototype.operation = function (operator) {
        var result;
        var op1 = this.context.input1;
        var op2 = this.context.input2;
        if (this.utils.isEmpty(this.context.input1) || this.utils.isEmpty(this.context.input2)) {
            alert("Both operands are required!");
            return;
        }
        else if (operator == "+") {
            result = op1 + op2;
            this.context.para = "The result of adding " + op1 + " and " + op2 + " is " + result;
        }
        else if (operator == "-") {
            result = op1 - op2;
            this.context.para = "The result of subtracting " + op1 + " and " + op2 + " is " + result;
        }
        else if (operator == "*") {
            result = op1 * op2;
            this.context.para = "The result of multiplying " + op1 + " and " + op2 + " is " + result;
        }
        else if (operator == "/" && op2 == 0) {
            alert("Are you trying to kill us all? Please don't divide by zero");
            return;
        }
        else {
            result = op1 / op2;
            this.context.para = "The result of dividing " + op1 + " and " + op2 + " is " + result;
        }
        this.context.input1 = 0;
        this.context.input2 = 0;
    };
    return HomeViewControl;
})(base_vc_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomeViewControl;
platypus_1.register.viewControl('home-vc', HomeViewControl);
