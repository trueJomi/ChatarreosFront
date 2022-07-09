import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Propuesta } from '../class/propuesta';
import { PropuestaService } from '../propuesta.service';

@Component({
  selector: 'app-form-propuesta',
  templateUrl: './form-propuesta.component.html',
  styleUrls: ['./form-propuesta.component.css']
})
export class FormPropuestaComponent implements OnInit {

  form: FormGroup;
  propuesta: Propuesta;

  @Output() onSave: EventEmitter<any> = new EventEmitter();

  constructor(
    private propuestaService: PropuestaService,
    private formBuilder:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      price: new FormControl('',Validators.required)
    });
  }

  save(){
    let propuesta = new Propuesta();

    propuesta.price = this.form.value['price']
    this.onSave.emit(propuesta);
    
  }
}
