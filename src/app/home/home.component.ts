import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../share/quotes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  displayAuthorName = '';
  ids = '';
  event: any;
  event2: any;
  randomQuote: any;
  randomNo!: number;
  data = '';

  constructor(public quoteService: QuotesService) {}

  ngOnInit(): void {

    this.randomQuotes();
  }

  authorName(e: Event) {
    this.event = e;
    this.displayAuthorName = this.event;
   
  }


  toggle(id: any) {
    this.ids = id;
  }


  idsReturn(e: Event) {
    this.event2 = e;
    this.ids = this.event2;
    
  }



  randomQuotes() {
    this.randomNo = Math.floor(Math.random() * 26 + 1);
    if (this.randomNo <= 26) {
     
      this.quoteService.getQuotes().subscribe((result) => {
        JSON.stringify(result, (key, value) => {
          this.randomQuote = value;
          this.data = this.randomQuote[this.randomNo].quote;
        });
      });
    }
  }
}
