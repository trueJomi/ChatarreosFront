import { Component, Input, OnInit } from '@angular/core';
import { Comprador } from 'src/app/comprador/shared/comprador';
import { Propuesta } from 'src/app/comprador/shared/propuesta';

@Component({
  selector: 'app-propuesta',
  templateUrl: './propuesta.component.html',
  styleUrls: ['./propuesta.component.css']
})
export class PropuestaComponent implements OnInit {

  @Input()
  public propuestas:Propuesta[];

  public comprador:Comprador;

  constructor() {
    
  }

  ngOnInit(): void {
  }

}
