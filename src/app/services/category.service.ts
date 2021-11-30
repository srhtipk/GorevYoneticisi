import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponseModel } from '../models/categoryResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiUrl:string="https://localhost:44365/api/";

  constructor(private httpClient:HttpClient) { }

  getCategories():Observable<CategoryResponseModel> {
    let newPath=this.apiUrl + "categories/getall";
    return this.httpClient.get<CategoryResponseModel>(newPath);
  }

}
