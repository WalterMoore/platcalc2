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
            title: "The Calculator",
            result: null,
            input1: null,
            input2: null
        };
        this.operation = function (operator) {
            //if(this.context.input1 === null || this.context.input2 === null){
            //	alert("Both operands are required!");
            //return;
        };
    }
    HomeViewControl.prototype.if = function (operator) {
        if (operator === void 0) { operator =  == "+"; }
        this.context.result = this.context.input1 + this.context.input2;
        this.context.para = "The result of adding " + this.context.input1 + " and " + this.context.input2 + " is " + this.context.result;
    };
    HomeViewControl.prototype.if = function (operator) {
        if (operator === void 0) { operator =  == "-"; }
        this.context.result = this.context.input1 - this.context.input2;
        this.context.para = "The result of subtracting " + this.context.input1 + " and " + this.context.input2 + " is " + this.context.result;
    };
    HomeViewControl.prototype.if = function (operator) {
        if (operator === void 0) { operator =  == "*"; }
        this.context.result = this.context.input1 * this.context.input2;
        this.context.para = "The result of multiplying " + this.context.input1 + " and " + this.context.input2 + " is " + this.context.result;
    };
    HomeViewControl.prototype.if = function (operator) {
        if (operator === void 0) { operator =  == "/" && this.context.input2 == 0; }
        alert("Are you trying to kill us all? Please don't divide by zero");
        return;
    };
    return HomeViewControl;
})(base_vc_1["default"]);
exports["default"] = HomeViewControl;
{
    this.context.result = this.context.input1 / this.context.input2;
    this.context.para = "The result of dividing " + this.context.input1 + " and " + this.context.input2 + " is " + this.context.result;
}
this.context.input1 = 0;
this.context.input2 = 0;
platypus_1.register.viewControl('home-vc', HomeViewControl);
