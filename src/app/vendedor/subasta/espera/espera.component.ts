import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Comprador } from 'src/app/comprador/shared/class/comprador';
import { CompradorService } from 'src/app/comprador/shared/comprador.service';
import { Propuesta } from 'src/app/comprador/shared/class/propuesta';
import { PropuestaService } from 'src/app/comprador/shared/propuesta.service';
import { CrearSubastasService } from '../../shared/crear-subastas.service';

@Component({
  selector: 'app-espera',
  templateUrl: './espera.component.html',
  styleUrls: ['./espera.component.css']
})
export class EsperaComponent implements OnInit {

  propuesta:Propuesta= new Propuesta();
  comprador:Comprador= new Comprador();

  constructor(
    private link_router:ActivatedRoute,
    private router:Router,
    private subastaService:CrearSubastasService,
    private compradorService:CompradorService,
    private cookieService:CookieService,
    private propuestaService:PropuestaService,
  ) { }

  ngOnInit(): void {
    var sesionCookie:string=this.cookieService.get('sesion')
    if (sesionCookie== ""){
      this.router.navigate([''])
    }

    var idPropuestaStr=this.link_router.snapshot.paramMap.get('id')
    if(idPropuestaStr==null){
      this.router.navigate(['/home'])
    }
    else{
      this.propuestaService.BuscarPorId(+idPropuestaStr).subscribe(
        (res:any)=>{
          this.propuesta.idPropuesta=res.body.idPropuesta;
          this.propuesta.comprador=res.body.comprador;
          this.propuesta.subasta=res.body.subasta;
          this.propuesta.price=res.body.price;
          this.propuesta.time=res.body.time;
          this.comprador.idShopper=res.body.comprador
          
          this.compradorService.getCompradorById(this.comprador.idShopper).subscribe(
            (res:any)=>{
              this.comprador.idShopper=res.body.idShopper;
              this.comprador.region=res.body.region;
              this.comprador.distrito=res.body.distrito;
              this.comprador.ciudad=res.body.ciudad;
              this.comprador.name=res.body.name;
              this.comprador.phone=res.body.phone;
              this.comprador.status=res.body.status;
              this.comprador.user=res.body.user;
            }
          )

        }
        
      )
      

    }
    
  }

  AnularAsignacion(){
    this.subastaService.AsignacionAnulada(this.propuesta.subasta).subscribe(
      (res:any)=>{
        this.router.navigate([`/home/subasta/${res.body.idSubasta}`])
    })
  }
}
