import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Called ngOnInit method');
  }

  result: number = 0;
  currentInput: string | undefined;
  currentOperation: string | undefined;
  inputTrackerIndex: number = 0;
  inputTracker: string[] = [];
  num1: number = 0;
  num2: number = 0;
  
  getInputData = (): string => {
    return this.inputTracker.join('');
  };
  isOperator = () => {
    switch(this.inputTracker[this.inputTracker.length-1]){
      case '+':
      case '-':
      case '*':
      case '/':
      case '%':
        return true
      default:
        return false
    }
  };
  //Use click events to get input data
  setCurrentInput = (value: string) => {
    if(this.currentInput ==undefined){
      this.currentInput = value;
    }
    else{
      this.currentInput += value;
    }
    if(this.inputTracker.length==0){
      console.log(1)
      this.inputTracker.push(this.currentInput)
    }
    else{
      if(this.isOperator()){
        console.log("operator")
        this.inputTracker.push(this.currentInput)
      }
      else{
        console.log("not operator")
        this.inputTracker[this.inputTracker.length-1] = this.currentInput
      }
    }
    console.log(this.inputTracker)
  };

  setCurrentOperation = (operation: string) => {
    this.currentOperation = operation
    this.inputTracker.push(this.currentOperation)
    this.currentInput = undefined
    if(operation=='c'){
      this.inputTracker.length = 0
      this.result = 0
    }
  };

  setResult = (): number => {
    //You can loop over the input tracker array and recompute the result as the values in the array changes
    //String to number, to do mathematical computations
    //Find a method to check if a string can be converted into a number
    //this.i=0
    for(let e of this.inputTracker){
      if(this.inputTracker.length%3==0 && this.inputTracker.length!=0){
        this.num1 = parseInt(this.inputTracker[this.inputTrackerIndex])
        this.num2 = parseInt(this.inputTracker[this.inputTrackerIndex+2])
        //console.log(this.i+". num1 = "+this.num1)
        //console.log(this.i+". num2 = "+this.num2)
        //this.i++
        switch(this.inputTracker[this.inputTrackerIndex+1]){
          case '+':
            this.result = this.num1 + this.num2
            break
          case '-':
            this.result = this.num1 - this.num2
            break
          case '*':
            this.result = this.num1 * this.num2
            break
          case '/':
            this.result = this.num1 / this.num2
            break
          case '%':
            this.result = this.num1 % this.num2
            break
          default:  
        }
      }
    }

    if(this.inputTracker.length%3==0 && this.inputTracker.length!=0){
      
      console.log("abcd")
      this.inputTracker.length = 0
      this.inputTracker.push(this.result.toString())
      console.log(this.inputTracker)
      //this.ngOnInit()
    }
    return this.result;
  };
}