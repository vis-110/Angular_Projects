import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent {
imgPath:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNXxbpp8TOPUaMEjX7hoxPwSNFznAJ_ws1NA&usqp=CAU';

inserData:string = 'Property binding using'

htmlString:string = 'Hello <script>aleart("Hacked");</script> World';
}
