import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  we:number=700;
  name:string="Varsha Patel";
  url:string="https://www.google.com";


flag:boolean=true;
show(){
  this.flag=!this.flag;
}

  products=[{name:"pencil",price:"8.3",available:"26-06-2022",rating:4.8},
            {name:"pen",price:"9.0",available:"30-06-2022",rating:5.0},
            {name:"Eraser",price:"5.5",available:"01-07-2022",rating:4.5},
            {name:"Scale",price:"10",available:"27-06-2022",rating:4.8},
            {name:"Strencil",price:"12.25",available:"26-06-2022",rating:4.9},
            ]

}