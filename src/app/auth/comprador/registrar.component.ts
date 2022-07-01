import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comprador } from 'src/app/comprador/shared/class/comprador';
import { CompradorService } from '../shared/comprador.service';




@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarCompradorComponent implements OnInit {

  persona:Comprador=new Comprador();
  constructor(
    private router:Router, 
    private service:CompradorService) { }

  ngOnInit() {
  }

  Guardar(){
    console.log(this.persona);
    this.service.createComprador(this.persona)
    .subscribe(data=>{
      alert("Se Agrego con Exito...!!!");
      //this.router.navigate(["Comprador-home/listar"]);
    })
  }

}
