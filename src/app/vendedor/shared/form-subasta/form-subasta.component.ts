import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chatarra } from '../model.clases';

@Component({
  selector: 'app-form-subasta',
  templateUrl: './form-subasta.component.html',
  styleUrls: ['./form-subasta.component.css']
})
export class FormSubastaComponent implements OnInit {

  form: FormGroup;

  @Input() chatarra:Chatarra= new Chatarra();

  @Output() onSubmit:EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder:FormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        titulo: [this.chatarra.titulo,[Validators.required]],
        descripccion: [this.chatarra.description,[Validators.required]],
        precioBase: [this.chatarra.precioBase,[Validators.required]],
      }
    );
  }
  
  save(){
    this.onSubmit.emit(this.form.value)
  }
}
