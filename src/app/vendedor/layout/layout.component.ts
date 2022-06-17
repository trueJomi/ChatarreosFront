import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  toggle:boolean=false;
  
  constructor(private router:Router,private cookieService: CookieService) { }


  ngOnInit(): void {
    // var sesionCookie:string=this.cookieService.get('sesion')
    // if (sesionCookie== null){
    //   this.router.navigate([''])
    // }
  }

  toggleSlideBar(){
    this.toggle=!this.toggle
  }


}
