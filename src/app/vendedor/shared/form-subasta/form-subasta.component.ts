import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormGroup,UntypedFormBuilder, Validators } from '@angular/forms';
import { Chatarra } from '../class/model.clases';

@Component({
  selector: 'app-form-subasta',
  templateUrl: './form-subasta.component.html',
  styleUrls: ['./form-subasta.component.css']
})


export class FormSubastaComponent implements OnInit {

  form: UntypedFormGroup;

  @Input() chatarra:Chatarra= new Chatarra();

  @Output() onSubmit:EventEmitter<any> = new EventEmitter();

  constructor(
    private formBuilder:UntypedFormBuilder,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        titulo: [this.chatarra.titulo,[Validators.required]],
        description: [this.chatarra.description,[Validators.required]],
        precioBase: [this.chatarra.precioBase,[Validators.required]]
      }
    );
  }
  save(){
    this.onSubmit.emit(this.form.value)
  }
}