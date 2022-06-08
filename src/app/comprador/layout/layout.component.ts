import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comprador } from '../shared/comprador';
import { CompradorService } from '../shared/comprador.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  comprador:Comprador;
  nombre:string;
  constructor(private router:Router,public compradorService:CompradorService) { }

  ngOnInit(): void {
    this.getCompradorById();
  }

  signOut(){
    this.router.navigate([`auth/login-comprador`]);
  }
  getCompradorById(){
    this.compradorService.getCompradorById(Number(sessionStorage.getItem('idShopper'))).subscribe((data: any) => {
      this.comprador=data['body']
      this.nombre=this.comprador.name
      console.log(this.nombre)
    })
   }

}
