import { Component } from "@angular/core";

@Component({
    selector : 'app-warning-aleart',
    template:`<p>This page Error</p>`,
    styles:[`
        p{
        color:red;
        padding:20px;
        background-color: lightYellow;
        border:2px solid gray;
    }`
]
})

export class warningaleartComponent{

}