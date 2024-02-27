import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit ,AfterContentChecked{
  @Input() popValue: any;
  
ngOnInit(): void {

  console.log('good',this.popValue);
}

  parentViewchildUsing : string = 'this value pass in parent'

  getValueParent: any;
  
  ngAfterContentChecked() {
    // this.getValueParent = JSON.parse(this.popValue);
    // console.log(this.getValueParent1);
    this.getValueParent = this.popValue;
    console.log(this.popValue);
    console.log(this.getValueParent);

  }

  outButtonClose() {
    const openPop = document.getElementById('PopModal');
    if (openPop != null) {
      openPop.style.display = 'none';
    }
  }
}
