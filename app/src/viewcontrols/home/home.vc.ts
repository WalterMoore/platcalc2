import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: any = {
		title: "The Calculator",
		result: null,
		input1: null,
		input2: null

	};
	
	operation = function(operator){
		//this.context.input1 = Number(this.context.input1);
		//this.context.input2 = Number(this.context.input2);
		if (this.context.input1 == null || this.context.input2 == null){
			alert("Both operands are required!");
			return;

		}else if(operator == "+"){
			this.context.result = this.context.input1 + this.context.input2;
			this.context.para = "The result of adding " + this.context.input1 + " and " + this.context.input2 + " is " + this.context.result;
		}else if(operator == "-"){
			this.context.result = this.context.input1 - this.context.input2;
			this.context.para = "The result of subtracting " + this.context.input1 + " and " + this.context.input2 + " is " + this.context.result;
		}else if(operator == "*"){
			this.context.result = this.context.input1 * this.context.input2;
			this.context.para = "The result of multiplying " + this.context.input1 + " and " + this.context.input2 + " is " + this.context.result;			
		}else if(operator =="/" && this.context.input2 == 0){
			alert("Are you trying to kill us all? Please don't divide by zero");
			return;
			}else{
			this.context.result = this.context.input1 / this.context.input2;
			this.context.para = "The result of dividing " + this.context.input1 + " and " + this.context.input2 + " is " + this.context.result;
		}
		this.context.input1 = 0;
		this.context.input2 = 0;	
		
	}
	
}

register.viewControl('home-vc', HomeViewControl);
