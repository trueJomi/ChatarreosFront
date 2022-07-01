import { Component, Input, OnInit } from '@angular/core';
import { PropuestaExt } from 'src/app/comprador/shared/class/propuesta';
import { PropuestaService } from 'src/app/comprador/shared/propuesta.service';
import { Subasta} from '../../../shared/class/model.clases';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  @Input()
  target:Subasta;
  propuesta:PropuestaExt;
  estados=[{
      nombre:"activo",
      class:"",
    },
    {
      nombre:"aceptado",
      class:"fa-solid fa-calendar-day",
    },
    {
      nombre:"recogiendo",
      class:"fa-solid fa-basket-shopping"
    }

  ]

  constructor(
    private propuestaService:PropuestaService,
  ) { }

  ngOnInit(): void {
    this.propuestaService.ObtenerMayor(this.target.idSubasta).subscribe(
      (res:any)=>{
        if(res.body==null){
        }
        else {
          var propuestatemp:PropuestaExt = new PropuestaExt();
          propuestatemp.idPropuesta = res.body.idPropuesta
          propuestatemp.price = res.body.price
          propuestatemp.subasta = this.target.idSubasta
          propuestatemp.time = res.body.time
          propuestatemp.comprador = res.body.comprador
          this.propuesta=propuestatemp
        }
      }
    )
  }

  icon_status(status:string){
    for (var i in this.estados){
      if(status == this.estados[i].nombre){
        return this.estados[i].class;
      }
    }
    return null;
  }
}
