import { Component, Input, OnInit } from '@angular/core';
import { Target } from '../../shared/class/model.clases';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {

  @Input()
  target:Target;

  constructor() { }

  ngOnInit(): void {
  }

}
