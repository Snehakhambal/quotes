import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

import { QuotesService } from '../share/quotes.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  author!: [];

  constructor(private quoteService: QuotesService, private route: Router) {}
  @Output() authorName = new EventEmitter();
  @Output() ids = new EventEmitter();
  @Input() EnterName = '';
  ngOnInit(): void {
    this.getAuthor();
  }

  getAuthor() {
    this.quoteService.getQuoteByAuth().subscribe((res) => {
      this.author = res as [];
  });
  }


  groupAuthor(author: string) {
    this.authorName.emit(author);
    this.author.filter((value) => {
    
      if (author === value) {
       
        this.ids.emit('quote');
        
      }
    });
  }
}
