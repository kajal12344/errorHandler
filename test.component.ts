import { getCurrencySymbol } from '@angular/common';
import { templateJitUrl } from '@angular/compiler';
import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template:
  //` <h2>{{name}}</h2>
  //             <h2 class="text-success"> Kajal </h2>
  //             <!-- <h2 [class]="successClass" class="text-special"> Kajal </h2> -->
  //             <h2 [class.text-danger]="hasError"> Kajal </h2>
  // `,
  // `<h2 [style.color] = "hasError ? 'red': 'green'"> Style Binding </h2>`
  // `<input #myName type="text">
  // // <button (click)= "onClick(myName.value)"> Greet </button>`,
  // `<input [(ngModel)]="name" type = "text">
  //   {{name}}
  // `

  //  <div *ngIf = "false; then thenBlock; else elseBlock">
  //  </div>

  //  <ng-template #thenBlock>
  //  <h1>Hello</h1>
  //  </ng-template>


  //  <ng-template #elseBlock>
  //  <h1>HIII</h1>
  //  </ng-template>

  //  `
  //  <div [ngSwitch] = "color">
  //  <div *ngSwitchCase = "'red'"> You have picked red color</div>
  //  <div *ngSwitchCase = "'green'"> You have picked green color</div>
  //  <div *ngSwitchCase = "'blue'"> You have picked blue color</div>
  //  <div *ngSwitchDefault> Pick Again</div>
  //  </div>
  //  `
  // `
  // <div *ngFor = "let color of colors">
  //   <h1>{{color}}</h1>
  // </div>
  // `
  `<h1> {{parentData}} </h1>
   <button (click) = eventMessage()> Send Event </button>`
  ,
  styles: [`
     /* .text-success {
       color: green;
     },

     .text-danger {
       color: red;
     },
     .text-special {
       font-style: italic;
     } */


  `]

})
export class TestComponent implements OnInit {

  public name = "Kajal";
  public successClass = "text-success";
  public hasError = false;
  public color = "red";

  public colors = ["Red","Blue","Green","Yellow","Pink"];

  @Input() public parentData : any;
  @Output() public childEvent = new EventEmitter();

  constructor() {
   }

  ngOnInit(): void {
  }

  onClick(myName:any)
  {
    document.write("Greeting!!!"+myName);
  }

  public eventMessage(){
     this.childEvent.emit("Hey codevalution");
  }
}
