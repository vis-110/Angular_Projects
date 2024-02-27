import { Routes } from "@angular/router"
import { HiComponent } from "./hi/hi.component"
import { HelloComponent } from "./hello/hello.component";
import { Component } from "@angular/core";
import { TestComponent } from "./test/test.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HelloChildComponent } from "./hello-child/hello-child.component";

export const routes: Routes = [
    { path: 'hi', component: HiComponent },
    {
        path: 'hello', component: HelloComponent, children: [{ path: 'helloChild', component: HelloChildComponent },
        ]
    },
    { path: "", redirectTo: 'hi', pathMatch: "full" },
    { path: 'test', component: TestComponent },
    { path: '**', component: PageNotFoundComponent },
];