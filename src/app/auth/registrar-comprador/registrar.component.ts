import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Comprador } from 'src/app/comprador/shared/class/comprador';
import { Departamento, Distrito, Provincia } from '../shared/class/model.location';
import { CompradorService } from '../shared/comprador.service';
import { LocalizacionService } from '../shared/localizacion.service';




@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarCompradorComponent implements OnInit {

  persona:Comprador=new Comprador();
  list:Departamento[]
  miDepartamento:Departamento
  miProvincia:Provincia;
  miDistrito:Distrito;

  constructor(
    private router:Router, 
    private service:CompradorService,
    private cookieService:CookieService,
    private localizacion:LocalizacionService,
    ) { }

  ngOnInit() {
    this.localizacion.ObtenerLista().subscribe(
      (data:any)=>{
        this.list=data.body
      })
  }

  Guardar(){

    this.service.createComprador(this.persona)
    .subscribe(data=>{
      this.cookieService.set('sesionC',data.idShopper+"");
      this.router.navigate([`Comprador-home`])
    })
  }

}
