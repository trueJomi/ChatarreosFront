import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrearSubastasService } from '../../shared/crear-subastas.service';
import { Chatarra, Subasta } from '../../shared/model.clases';

@Component({
  selector: 'app-new-subasta',
  templateUrl: './new-subasta.component.html',
  styleUrls: ['./new-subasta.component.css']
})
export class NewSubastaComponent implements OnInit {

  subasta:Subasta = new Subasta();

  constructor(public servicoCrearSubastas:CrearSubastasService, private router:Router ) {
    
  }

  ngOnInit(): void {

  }

  CrearSubastasService(chatarra:Chatarra){
    this.subasta.chatarra=chatarra
    this.subasta.vendedor=1
    this.servicoCrearSubastas.CrearSubasta(this.subasta).subscribe(
      ()=>{
        this.router.navigate(['']);
      },
      (error:any)=>{}
    )

  }    

}

