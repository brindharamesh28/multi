import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'multiselect',
  template: `
    <form>
  
    <div class="multiselect">
    
      <div class="selectBox" (click)="con=!con" >
        <select class="scrollable">
          <option>Select an option</option>
  
        </select >
        <div class="overSelect"></div>
      </div>
     
     <div  id="checkboxes" [ngStyle]="{'display': con ? 'block':'none'}"class="scrollable">
    <div [hidden]="!filter"> 
      <input type="search" (change)=searchValue($event) >
    </div>
      <div *ngFor="let i of opt" (change)=valueview($event)>
      
          <input type="checkbox" [id]="i.value" [name]="i.label" />{{i.label}}
        </div>
      </div>
     
    </div>
  </form>
  `,
  styles: [`
    
  .multiselect {
    width: 200px;
  }
  
  .selectBox {
    position: relative;
  }
  
  .selectBox select {
    width: 100%;
    font-weight: bold;
  }
  
  .overSelect {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  
  #checkboxes {
    display: none;
    border: 1px #dadada solid;
  }
  
  #checkboxes label {
    display: block;
  }
  
  #checkboxes label:hover {
    background-color: #1e90ff;
  }
  .scrollable{
    overflow: auto;
    width: 600px; /* adjust this width depending to amount of text to display */
    height: 80px; /* adjust height depending on number of options to display */
    border: 1px silver solid;
  }
  .scrollable select{
    border: none;
  }`
  ]
})
export class Multiselect13Component implements OnInit {

  temArr:any
  con=false
  opt:any
  opt1:any
  value:any
  selected:string[]=[]
  @Input()set option(n1:string) {
    this.opt=n1
    this.opt1=n1
      }
    
      @Input() filter:boolean | undefined
      @Input() filterBy:string | undefined;
      @Output()onMyChange=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  searchValue(ip:any){
    this.temArr=[];
    var a=ip.target.value
    console.log(a.length)
    if(a.length == 0){
      
      this.opt1=this.opt
 
    }
    switch(this.filterBy){
      case "label" :
      this.temArr=[];
      for(let j=0;j< this.opt.length;j++){
       
        if(this.opt[j].label.toLowerCase().includes(a)){
        this.temArr.push(this.opt[j]);
        this.opt=this.temArr
         
        }
    
      }
       break;
       case "value":
        this.temArr=[];
        for(let j=0;j< this.opt.length;j++){
       
          if(this.opt[j].value.toLowerCase().includes(a)){
          this.temArr.push(this.opt[j]);
          this.opt=this.temArr
           
          }
      
        }
       break;
      
     
      
    }
    
  }  
  valueview(i:any){

    if(i.target.checked){
//console.log(typeof(i.target.name))
this.selected.push(i.target.name)
    this.onMyChange.emit(this.selected)
    }
    else if (!i.target.checked){
      //console.log(typeof(i.target.name))
      this.selected.splice(this.selected.indexOf(i.target.name),1)
          this.onMyChange.emit(this.selected)
          }
  }


}
