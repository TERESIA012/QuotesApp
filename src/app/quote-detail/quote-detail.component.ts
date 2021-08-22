import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import{Quotes} from '../quotes';


@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
 @Input() quotes:Quotes;
 @Output() isComplete=new EventEmitter<boolean>();
 
quoteDelete(complete:boolean){
  this.isComplete.emit(complete);
}

likes: number = 0;
dislike: number = 0;

//function for like
onClickLikes() {
  this.likes++;

};
onClickDislike() {
  this.dislike++;
};

 
  constructor() { }

  ngOnInit(): void {
  }

}
