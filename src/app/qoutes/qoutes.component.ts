import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Listitem } from '../share/quotes.interface';

import { QuotesService } from '../share/quotes.service';

@Component({
  selector: 'app-qoutes',
  templateUrl: './qoutes.component.html',
  styleUrls: ['./qoutes.component.css'],
})
export class QoutesComponent implements OnInit {
  @Input() EnterName = '';
  @Input() ids = '';
  quote!: string;
  dataList!: Listitem[];
  dataList2: any = [];
  hide = true;

  constructor(public quoteService: QuotesService, private route: Router) {}

  ngOnInit(): void {

    this.getQuotes();
  }


  getQuotes() {
    this.hide = true;
    this.dataList2 = [];
    this.quoteService.getQuotes().subscribe((result) => {
      JSON.stringify(result, (key, value) => {
        this.dataList = value;
      });
    });
  }



  getQuoteBySearch(inputValue: string ) {
    
    if (inputValue === '') {
      alert("Name field can't be empty.");
      this.hide = true;
    } else {
       

      for (let item of this.dataList) {
       
        if (inputValue === item.author  ) {
          console.log(inputValue)
          if (item.quote !== this.dataList2.quote) {
            this.dataList2.push(item);
           
            this.EnterName = '';
            this.hide = false;
          }
        }
      }
    }
  }
}
