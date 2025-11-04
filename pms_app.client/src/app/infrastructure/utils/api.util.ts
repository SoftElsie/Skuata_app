import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CommandResponse } from "../../domain/model/Response/command-response.model";

@Injectable({
  providedIn: 'root'
})

export class ApiUtil {
constructor (private http: HttpClient) { }

  get<T>(url:string):Observable<T>{
    return this.http.get<T>(url)
  }

  filter<T>(url:string,params:any):Observable<T>{
    return this.http.get<T>(url,{params})
  }

  post(url:string,data:any){
    return this.http.post<CommandResponse>(url,data)
  }

  put(url:string,data:any){
    return this.http.put<CommandResponse>(url,data)
  }

  delete(url:string){
    return this.http.delete(url)
  }

  deleteComplex(url:string,params:any){
    return this.http.delete(url,params)
  }

  export(url:string,params:any)
  {
    return this.http.get(url, { responseType: 'blob' ,params:params})
  }
  
}