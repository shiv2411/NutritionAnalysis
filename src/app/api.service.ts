import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
 constructor(private http: HttpClient) {
}

analyzeNutrition(nutrition) : Observable<any> {
  //consuming post api from the provided nutrition details api
return this.http.post('https://api.edamam.com/api/nutrition-details?app_id=47379841&app_key=d28718060b8adfd39783ead254df7f92', nutrition);
}

}
