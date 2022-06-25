import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Comprador } from 'src/app/comprador/shared/comprador';
import { CompradorService } from 'src/app/comprador/shared/comprador.service';
import { Propuesta } from 'src/app/comprador/shared/propuesta';
import { CrearSubastasService } from '../../shared/crear-subastas.service';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {

  @Input()
  public propuestas:Propuesta[];

  public comprador:Comprador[];

  constructor(
    private router:Router,
    private compradorService:CompradorService,
    private SubastaService:CrearSubastasService
  ) {
    
    
  }

  ngOnInit(): void {
    
  }

}
