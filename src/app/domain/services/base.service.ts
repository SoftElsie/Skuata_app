import { Observable } from "rxjs"
import { ApiUtil } from "../../infrastructure/utils/api.util"
import { HttpParams } from "@angular/common/http"
import { environment } from "../../../environments/environment"
import { LookUpListResponse } from "../model/Response/lookup-list.model"

export abstract class BaseService {
  /**
   *   BaseEntity is
   *      : name  = a string name of the Entity that can also be used as a base url since our backend standard is to to make the name of the entity part of the base URL
   *      : entity  = a generic any type that can replanced by any model
   * 
   *          api endpoint => /api/{entitiname}/ge
   */

  protected find: string = '/find'
  protected updateEndpoint: string = '/update'
  protected createEndpoint: string = '/create'
  protected getByIdEndpoint: string = '/get-by-id'
  protected all: string = '/get-all'
  protected apiPrefix = ''
  constructor(protected apiUtil: ApiUtil) {
  }

  create(request: any, entity: string) {
    const isSendReminder = entity.toLowerCase().includes('send-reminder')|| entity.toLowerCase().includes('comment');
  const endpoint = isSendReminder ? '' : this.createEndpoint;

  return this.apiUtil.post(
    environment.basePre + this.apiPrefix + entity + endpoint,
    request
  );
  }

  update(request: any, entity: string) {
    return this.apiUtil.put(environment.basePre+this.apiPrefix + entity + this.updateEndpoint,request)
  }
  
  getById(id: any, entity: string,idName:string='id'): Observable<any> {
    let param = new HttpParams();
    param = param.append(idName,id)
    return this.apiUtil.get( environment.basePre+this.apiPrefix + entity + this.getByIdEndpoint+`/${id}`)
  }

  delete(entity:string,id:any): Observable<any>{
    return this.apiUtil.delete(environment.basePre+this.apiPrefix+ entity + '/delete/'+id)
  }
  getFiltered(filter: any, entity: string): Observable<any> {
    let params = new HttpParams();

    for (let key in filter) {
      params = params.append(key, filter[key]);
    }
    return this.apiUtil.filter(environment.basePre+this.apiPrefix + entity + this.find, params)
  }
  
  getAll(entity: string): Observable<any> {
    return this.apiUtil.get(environment.basePre+this.apiPrefix+ entity + '/get-all')
  }


  getFormFieldLookUp(url:any,conditionValue:any=null,condition:any=null):Observable<LookUpListResponse> {

    if(conditionValue && condition)
      url = url+`?${condition}=${conditionValue}` //parameters requires peroperty name
    else if(conditionValue){
      url=url+conditionValue // e.g get-city-by-province-id/{proviceid}
    }
    return this.apiUtil.get(url)
  }

  getUsersInProject(pojectId: number):Observable<LookUpListResponse> {
    let pref='app-api/api/'
    return this.apiUtil.get(environment.basePre+pref+ 'Pledge/users-in-project/' + pojectId);
  }

  getMyByProject(me:string,projectId:number): Observable<any> {
    let pref='app-api/api/'
    return this.apiUtil.get( environment.basePre+pref + `pledge/get-by-project-user/${projectId}/${me}` )
  }
}