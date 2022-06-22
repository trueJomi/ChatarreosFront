import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrearSubastasService } from '../../shared/crear-subastas.service';
import { Chatarra, Subasta } from '../../shared/model.clases';

@Component({
  selector: 'app-edit-subasta',
  templateUrl: './edit-subasta.component.html',
  styleUrls: ['./edit-subasta.component.css']
})
export class EditSubastaComponent implements OnInit {

  subasta:Subasta = new Subasta();

  constructor(public servicoCrearSubastas:CrearSubastasService, private router:Router ) {
    
  }
  ngOnInit(): void {

  }

  EditarSubasta(chatarra:Chatarra){
    this.subasta.chatarra = chatarra;
    this.subasta.chatarra.idChatarra = 39;
    this.servicoCrearSubastas.getVendedor(1).subscribe((data:any)=>{
      console.log(data);
      this.subasta.vendedor = 1;
      this.subasta.idSubasta = 65;
      console.log('..');
      console.log('...');
      this.servicoCrearSubastas.update(this.subasta).subscribe(
        ()=>{
          console.log('OK')
        },
        (error:any)=>{
          console.log(error);
        }
  
        )
    })
  }

}
