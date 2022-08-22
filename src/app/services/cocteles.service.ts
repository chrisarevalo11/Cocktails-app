import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoctelesService {
  ingredients: any[15] = [];
  private urlEndPoint:string='https://www.thecocktaildb.com/api/json/v1/1/';
  constructor(private http:HttpClient) { }

  getCoctel(coctel:String):Observable<any>{
    return this.http.get(this.urlEndPoint+"search.php?s="+coctel);
  }
  getRandomCoctel():Observable<any>{
    return this.http.get(this.urlEndPoint+"random.php");
  }
    
}
