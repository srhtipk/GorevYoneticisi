import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoResponseModel } from '../models/todoResponseModel';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl:string="https://localhost:44365/api/";

  constructor(private httpClient:HttpClient) { }

  getTodos():Observable<TodoResponseModel> {
    let newPath=this.apiUrl + "todos/getall";
    return this.httpClient.get<TodoResponseModel>(newPath);
  }

  getTodosByCategory(categoryId:number):Observable<TodoResponseModel> {
    let newPath= this.apiUrl+"todos/getallbycategoryid?id="+categoryId;
    return this.httpClient.get<TodoResponseModel>(newPath);
  }

}
