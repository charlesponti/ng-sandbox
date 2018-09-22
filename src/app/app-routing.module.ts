import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { routes as tutorialRoutes } from './tutorials/tutorials.module';

export const routes: Routes = [
    ...tutorialRoutes
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
