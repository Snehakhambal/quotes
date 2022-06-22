import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QoutesComponent } from './qoutes/qoutes.component';
import { QuotesService } from './share/quotes.service';
 
import { FormsModule } from '@angular/forms';
import { AuthorListComponent } from './author-list/author-list.component';
import { HomeComponent } from './home/home.component';
 
 

@NgModule({
  declarations: [
    AppComponent,
    QoutesComponent,
 
    AuthorListComponent,
    HomeComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ QuotesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
