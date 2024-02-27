import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataServeService } from '../services/data-serve.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent implements OnInit {

  formArray:any;
  constructor(private _http:HttpClient,private _sharingServcie:DataServeService){}
  ngOnInit(){
    // this._http.get('http://universities.hipolabs.com/search?country=United+States').subscribe(res=>{
    //   this.formArray = res;
    // })

   this._sharingServcie.getUser().subscribe(res => this.formArray = res);    
  }
  DeletedData(list:any){
    this._sharingServcie.DeletedData(list.id).subscribe((res)=>{
      alert('employee delete');
      this.ngOnInit();
    })
  }

  updateData(id:number,list:any){
    let details = {
      id: list.id,
      firsname: list.firsname,
      lastname: list.lastname,
      email: list.email,
      date: list.data,
    }
    this._sharingServcie.updateData(id,list).subscribe(res => {
      alert('update data'),
      console.log(res)

    })
  }
}
