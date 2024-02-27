import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private _router: ActivatedRoute) { }

  user = {
    id: 1,
    name: 'vis'
  };

  ngOnInit(): void {

    // this.user = {
    //   id:this._router.snapshot.params['id'],
    //   name:this._router.snapshot.params['name'],
    // };

    this._router.params
    .subscribe( 
      (params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

}
