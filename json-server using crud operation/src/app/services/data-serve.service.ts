import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, retry } from 'rxjs';
import { Router } from '@angular/router';
import { UserD } from '../user';
@Injectable({
  providedIn: 'root'
})
export class DataServeService {
  formData: any;
  empty:any;
  constructor(private _http: HttpClient, private _router: Router) { }

  postUser(data: any) {
    console.log(data);
    
    return this._http.post(this.url, data).subscribe(res => { console.log(res) })
  }

  submitData(data: any) {
    this.formData = data;
    this.postUser(data);
    this._router.navigate(['show'])
    console.log(this.formData);

  }
  url = "http://localhost:3000/details"


idNu:number = 1;
  getUser() {
    return this._http.get(this.url)
      .pipe(
        map(res => res)
      )
  }

  DeletedData(i:any){
    
      return this._http.delete("http://localhost:3000/details/"+i)
      .pipe(map((res:any)=>{
        return res;
      })

      )
  }

  updateData(i:number,item:any){
    this._router.navigate(['add'])

    return this._http.patch("http://localhost:3000/details/"+i,item)
    .pipe(map((res:any)=>{
      return res;
    })
    )
  }
}
