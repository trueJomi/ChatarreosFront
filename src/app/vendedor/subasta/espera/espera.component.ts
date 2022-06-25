import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CompradorService } from 'src/app/comprador/shared/comprador.service';
import { Propuesta } from 'src/app/comprador/shared/propuesta';
import { PropuestaService } from 'src/app/comprador/shared/propuesta.service';

@Component({
  selector: 'app-espera',
  templateUrl: './espera.component.html',
  styleUrls: ['./espera.component.css']
})
export class EsperaComponent implements OnInit {

  propuesta:Propuesta;


  constructor(
    private link_router:ActivatedRoute,
    private router:Router,
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
        }
      )
    }
    


  }

}
