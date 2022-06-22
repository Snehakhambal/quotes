import { Injectable } from '@angular/core';
import{ HttpClient} from '@angular/common/http'
import { filter, map, toArray } from 'rxjs';
import { Quote } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {
  author:any=[]
baseUrl = "https://quote-api-app.herokuapp.com"
  constructor( private http:HttpClient) { }

getQuotes(){
  return this.http.get("https://quote-api-app.herokuapp.com/quote")
// .pipe(
//     map(result=>{
//       let data = result.toString()
//       data.length
//      let element  
// let likes = JSON.stringify(result,(key,value)=>{
//   console.log(value )
//  for (let i = 0; i < 26; i++) {
//     element = value[i]["likes"];
//   return element
//  }
//  }) 
// console.log(element)
 
//    })
   
 
//   )


  
}


getQuoteByAuth(){
  
  return this.http.get("https://quote-api-app.herokuapp.com/author")
}
}
