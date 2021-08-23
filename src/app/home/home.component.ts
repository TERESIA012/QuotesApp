// import { Quotes } from './../quotes';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  quotes: Quotes[] = [
    new Quotes(1,'wairimu','Unaishi aje vibasic ni ka kesho iko promised ','Nyashinski',new Date(2021, 7, 20) ),
    new Quotes(2,'tess','If they don \'t know your dreams ,they can\' t shoot them down ','J Cole' ,new Date(2021, 7, 20)),
    new Quotes(3,'kings','Imperfection is beauty,madness is genius and it is better to be absolutely ridiculous than absolutely boring ','Marilyn Monroe',new Date(2021, 7, 20) ),

    // { name: 'wairimu', quote: 'Unaishi aje vibasic ni ka kesho iko promised ', musician: 'Nyashinski' },
    // { name: 'tess', quote: 'Live to be more than just another boring eulogy', musician: 'Bensoul' },
    // { name: 'kings', quote: 'Live to be more than just another boring eulogy', musician: 'Khaligraph' },
  ];
  toggleDetails(index:any){
  this.quotes[index].showQuote=!this.quotes[index].showQuote;
  }

 


completeQuote(isComplete:any,index:number){
if(isComplete){
  let toDelete=confirm(`It will delete quote posted by ${this.quotes[index].name}`)
  if (toDelete){
  this.quotes.splice(index,1);
  }
}
}

addNewQuote(quotes:Quotes){
  let quoteLength=this.quotes.length;
  quotes.index=quoteLength+1;
  quotes.posted=new Date(quotes.posted);
  this.quotes.push(quotes);
}


  constructor() { }

  ngOnInit(): void {

  }

}

