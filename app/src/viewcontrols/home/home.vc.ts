import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';

export default class HomeViewControl extends BaseViewControl {
    templateString: string = require('./home.vc.html');

    context: contexts.IHomeContext = {
		title: "The Calculator",
		input1: null,
		input2: null,
		para: ''

	};
	
	operation(operator: string){
		var result: number;
		var op1: number = this.context.input1;
		var op2: number = this.context.input2;
		if(this.utils.isEmpty(this.context.input1) || this.utils.isEmpty(this.context.input2)){
			alert("Both operands are required!");
			return;
		}else if(operator == "+"){
			result = op1 + op2;
			this.context.para = "The result of adding " + op1 + " and " + op2 + " is " + result;
		}else if(operator == "-"){
			result = op1 - op2;
			this.context.para = "The result of subtracting " + op1 + " and " + op2 + " is " + result;
		}else if(operator == "*"){
			result = op1 * op2;
			this.context.para = "The result of multiplying " + op1 + " and " + op2 + " is " + result;			
		}else if(operator =="/" && op2 == 0){
			alert("Are you trying to kill us all? Please don't divide by zero");
			return;
			}else{
			result = op1 / op2;
			this.context.para = "The result of dividing " + op1 + " and " + op2 + " is " + result;
		}
		this.context.input1 = 0;
		this.context.input2 = 0;	
		
	}
	
}

register.viewControl('home-vc', HomeViewControl);
