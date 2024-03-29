import { Quotes } from './../quotes';
import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
// import * as EventEmitter from 'events';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote=new Quotes(0,"","","",new Date());
  @Output() addQuote=new EventEmitter<Quotes>();
  submitQuote(){
    this.addQuote.emit(this.newQuote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
