import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-multiselect28',
  template: `
  <div class="dropdown">
  <button class="dropbtn">
      Country List
  </button>
    
  <div class="dropdown-content">
      <a href="#" class="scrollable">
        <div [hidden]="!filter"> 
          <input type="search" (change)=searchValue($event) >
        </div>
        <div *ngFor="let i of opt" (change)=valueview($event)>
          <button class="dropbtn1">
          <input type="checkbox" [id]="i.value" [name]="i.label" />{{i.label}}
        </button> </div>
         </a>

    
  </div>
</div>
  `,
  styles: [`
    
  .dropbtn {
    background-color: #4430b1;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
  .dropbtn1 {
    
    color: black;
    padding: 8px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
  
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 
        0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  .dropdown-content a:focus {
    background-color: #f1f1f1
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  .dropdown:hover .dropbtn {
    background-color:  #4430b1;
  }
  
  .scrollable{
    overflow: auto;
    width: 300px; /* adjust this width depending to amount of text to display */
    height: 80px; /* adjust height depending on number of options to display */
    border: 1px silver solid;
  }
  .scrollable select{
    border: none;
  }`
  ]
})
export class Multiselect28Component implements OnInit {
  temArr:any
  
  opt:any
  opt1:any
  value:any
  selected:string[]=[]
  @Input()set option(n1:string) {
    this.opt=n1
    this.opt1=n1
      }
    
      @Input() filter:boolean 
      @Input() filterBy:string 
      @Output()onMyChange=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  searchValue(ip:any){
    this.temArr=[];
    var a=ip.target.value
   
    if(a.length == 0){
      
      this.opt=this.opt1
      return this.opt
 
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
