import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  toggle:boolean=false;
  
  constructor() { }


  ngOnInit(): void {

  }

  toggleSlideBar(){
    this.toggle=!this.toggle
  }


}
